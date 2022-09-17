import { MintLayout, Token } from '@solana/spl-token';
import {
  Connection,
  Keypair,
  SystemProgram,
  TransactionInstruction,
} from '@solana/web3.js';
import crypto from 'crypto';

import BN from 'bn.js';
import {
  ENV,
  sendTransactionWithRetry,
} from 'metaplex/common/utils/connections';
import { IPFS_SOL_HOLDER_ID } from 'metaplex/common/constants';
import { MintMonitor, WebWalletSigner } from 'metaplex/candy-machine/types';
import { MintStatus } from 'metaplex/candy-machine';
import { loadCache, saveCache } from 'metaplex/candy-machine/actions/cache';
import { ipfsConfig, ipfsUpload } from 'metaplex/candy-machine/ipfs';
import { parsePrice } from 'metaplex/candy-machine/actions/various';
import { StringPublicKey, toPublicKey } from 'metaplex/common/utils/ids';
import { findProgramAddress, programIds } from 'metaplex/common/utils';

import {
  createAssociatedTokenAccountInstruction,
  createMint,
} from 'metaplex/common/actions/account';
import {
  createMasterEdition,
  createMetadata,
  Data,
} from 'metaplex/common/types/metaData-types';
import { WalletSigner } from 'metaplex/common/models/wallet';

const RESERVED_METADATA = 'metadata.json';

export const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      // @ts-ignore
      resolve(reader.result);
    };
    reader.onerror = error => reject(error);
  });

export const mintSingleNFT = async (
  connection: Connection,
  wallet: WebWalletSigner,
  env: ENV,
  files: File,
  metadata: any,
  mintMonitor: MintMonitor,
  cacheName: string,
  cacheStorage: any,
  price: string = '0',
  solTreasuryAccount: any = null,
  maxSupply: number = 1,
): Promise<{
  metadataAccount: StringPublicKey;
  arweaveLink: string;
} | void> => {
  if (!wallet?.publicKey) return;
  const savedContent = loadCache(cacheName, env, cacheStorage);
  const cacheContent = savedContent || {};
  const metadataContent = {
    name: metadata.name,
    symbol: metadata.symbol,
    description: metadata.description,
    seller_fee_basis_points: metadata.sellerFeeBasisPoints,
    image: metadata.image,
    animation_url: metadata.animation_url,
    attributes: metadata.attributes,
    external_url: metadata.external_url,
    properties: metadata.properties,
  };

  if (metadata.collection_name && metadata.collection_family) {
    metadataContent['collection'] = {
      name: metadata.collection_name,
      family: metadata.collection_family,
    };
  }

  const realFiles: File[] = [
    files,
    new File([JSON.stringify(metadataContent)], RESERVED_METADATA),
  ];

  const { instructions: pushInstructions, signers: pushSigners } =
    await prepPayForFilesTxn(
      wallet,
      realFiles,
      metadata,
      price,
      solTreasuryAccount,
    );

  const TOKEN_PROGRAM_ID = programIds().token;

  // Allocate memory for the account
  const mintRent = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span,
  );

  cacheContent.mintRent = mintRent;
  // const accountRent = await connection.getMinimumBalanceForRentExemption(
  //   AccountLayout.span,
  // );

  // This owner is a temporary signer and owner of metadata we use to circumvent requesting signing
  // twice post Arweave. We store in an account (payer) and use it post-Arweave to update MD with new link
  // then give control back to the user.
  // const payer = new Account();
  const payerPublicKey = wallet.publicKey.toBase58();
  const instructions: TransactionInstruction[] = [...pushInstructions];
  const signers: Keypair[] = [...pushSigners];
  cacheContent.payerPublicKey = payerPublicKey;
  // This is only temporarily owned by wallet...transferred to program by createMasterEdition below
  const mintKey = createMint(
    instructions,
    wallet.publicKey,
    mintRent,
    0,
    // Some weird bug with phantom where it's public key doesnt mesh with data encode wellff
    toPublicKey(payerPublicKey),
    toPublicKey(payerPublicKey),
    signers,
  ).toBase58();
  cacheContent.mintKey = mintKey;
  const recipientKey = (
    await findProgramAddress(
      [
        wallet.publicKey.toBuffer(),
        programIds().token.toBuffer(),
        toPublicKey(mintKey).toBuffer(),
      ],
      programIds().associatedToken,
    )
  )[0];

  if (mintMonitor) {
    mintMonitor(MintStatus.Create, cacheStorage);
  }

  createAssociatedTokenAccountInstruction(
    instructions,
    toPublicKey(recipientKey),
    wallet.publicKey,
    wallet.publicKey,
    toPublicKey(mintKey),
  );

  const image = await toBase64(files);
  // @ts-ignore
  const imageBase64 = image.replace('data:image/png;base64,', '');
  const manifestBuffer = Buffer.from(JSON.stringify(metadataContent));
  //const manifestBuffer = Buffer.from(JSON.stringify(image0_meta));
  let link: string | null = null;
  if (mintMonitor) {
    mintMonitor(MintStatus.UpLoad, cacheStorage);
  }
  try {
    link = await ipfsUpload(ipfsConfig, imageBase64, manifestBuffer);
  } catch (e) {
    console.log(e);
  }

  const metadataAccount = await createMetadata(
    new Data({
      symbol: metadata.symbol,
      name: metadata.name,
      // @ts-ignore
      uri: link, // size of url for arweave
      sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
      creators: metadata.creators,
    }),
    payerPublicKey,
    mintKey,
    payerPublicKey,
    instructions,
    wallet.publicKey.toBase58(),
  );
  let arweaveLink = '';
  if (link && wallet.publicKey) {
    arweaveLink = link;

    const updateInstructions: TransactionInstruction[] = instructions;
    const updateSigners: Keypair[] = signers;

    updateInstructions.push(
      Token.createMintToInstruction(
        TOKEN_PROGRAM_ID,
        toPublicKey(mintKey),
        toPublicKey(recipientKey),
        toPublicKey(payerPublicKey),
        [],
        1,
      ),
    );

    if (mintMonitor) {
      mintMonitor(MintStatus.Mint, cacheStorage);
    }
    // // In this instruction, mint authority will be removed from the main mint, while
    // // minting authority will be maintained for the Printing mint (which we want.)
    await createMasterEdition(
      maxSupply !== undefined ? new BN(maxSupply) : undefined,
      mintKey,
      payerPublicKey,
      payerPublicKey,
      payerPublicKey,
      updateInstructions,
    );

    const txid = await sendTransactionWithRetry(
      connection,
      wallet,
      updateInstructions,
      updateSigners,
    );

    cacheContent.txid = txid;
    if (mintMonitor) {
      mintMonitor(MintStatus.Sign, cacheStorage);
    }
  }

  saveCache(cacheName, env, cacheContent, cacheStorage);

  return { metadataAccount, arweaveLink };
};

export const mintSingleNFTWithMetaLink = async (
  connection: Connection,
  wallet: WebWalletSigner,
  env: ENV,
  metaLink: string,
  metadata: any,
  mintMonitor: MintMonitor,
  cacheName: string,
  cacheStorage: any,
  price: string = '0',
  solTreasuryAccount: any = null,
  maxSupply: number = 1,
): Promise<{
  metadataAccount: StringPublicKey;
  arweaveLink: string;
} | void> => {
  if (!wallet?.publicKey) return;
  const savedContent = loadCache(cacheName, env, cacheStorage);
  const cacheContent = savedContent || {};

  const { instructions: pushInstructions, signers: pushSigners } =
    await prepPayForFilesTxnForIpfsHolder(wallet, price, solTreasuryAccount);

  // Allocate memory for the account
  const mintRent = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span,
  );

  cacheContent.mintRent = mintRent;
  // const accountRent = await connection.getMinimumBalanceForRentExemption(
  //   AccountLayout.span,
  // );

  // This owner is a temporary signer and owner of metadata we use to circumvent requesting signing
  // twice post Arweave. We store in an account (payer) and use it post-Arweave to update MD with new link
  // then give control back to the user.
  // const payer = new Account();
  const payerPublicKey = wallet.publicKey.toBase58();
  const instructions: TransactionInstruction[] = [...pushInstructions];
  const signers: Keypair[] = [...pushSigners];
  cacheContent.payerPublicKey = payerPublicKey;
  // This is only temporarily owned by wallet...transferred to program by createMasterEdition below
  const mintKey = createMint(
    instructions,
    wallet.publicKey,
    mintRent,
    0,
    // Some weird bug with phantom where it's public key doesnt mesh with data encode wellff
    toPublicKey(payerPublicKey),
    toPublicKey(payerPublicKey),
    signers,
  ).toBase58();
  cacheContent.mintKey = mintKey;
  const recipientKey = (
    await findProgramAddress(
      [
        wallet.publicKey.toBuffer(),
        programIds().token.toBuffer(),
        toPublicKey(mintKey).toBuffer(),
      ],
      programIds().associatedToken,
    )
  )[0];

  if (mintMonitor) {
    mintMonitor(MintStatus.Create, cacheStorage);
  }

  createAssociatedTokenAccountInstruction(
    instructions,
    toPublicKey(recipientKey),
    wallet.publicKey,
    wallet.publicKey,
    toPublicKey(mintKey),
  );

  let arweaveLink = metaLink;
  const TOKEN_PROGRAM_ID = programIds().token;
  const metadataAccount = await createMetadata(
    new Data({
      symbol: metadata.symbol,
      name: metadata.name,
      uri: arweaveLink, // size of url for arweave
      sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
      creators: metadata.creators,
    }),
    payerPublicKey,
    mintKey,
    payerPublicKey,
    instructions,
    wallet.publicKey.toBase58(),
  );

  if (wallet.publicKey) {
    const updateInstructions: TransactionInstruction[] = instructions;
    const updateSigners: Keypair[] = signers;

    updateInstructions.push(
      Token.createMintToInstruction(
        TOKEN_PROGRAM_ID,
        toPublicKey(mintKey),
        toPublicKey(recipientKey),
        toPublicKey(payerPublicKey),
        [],
        1,
      ),
    );

    if (mintMonitor) {
      mintMonitor(MintStatus.Mint, cacheStorage);
    }
    // // In this instruction, mint authority will be removed from the main mint, while
    // // minting authority will be maintained for the Printing mint (which we want.)
    await createMasterEdition(
      maxSupply !== undefined ? new BN(maxSupply) : undefined,
      mintKey,
      payerPublicKey,
      payerPublicKey,
      payerPublicKey,
      updateInstructions,
    );

    const txid = await sendTransactionWithRetry(
      connection,
      wallet,
      updateInstructions,
      updateSigners,
    );

    cacheContent.txid = txid;
    if (mintMonitor) {
      mintMonitor(MintStatus.Sign, cacheStorage);
    }
  }

  saveCache(cacheName, env, cacheContent, cacheStorage);
  return { metadataAccount, arweaveLink };
};

const prepPayForFilesTxnForIpfsHolder = async (
  wallet: WalletSigner,
  price: string,
  solTreasuryAccount: any = null,
): Promise<{
  instructions: TransactionInstruction[];
  signers: Keypair[];
}> => {
  const instructions: TransactionInstruction[] = [];
  const signers: Keypair[] = [];

  if (wallet.publicKey) {
    instructions.push(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: IPFS_SOL_HOLDER_ID,
        lamports: 2300000,
      }),
    );

    if (solTreasuryAccount) {
      const parsedPrice = parsePrice(price);
      instructions.push(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: solTreasuryAccount,
          lamports: parsedPrice,
        }),
      );
    }
  }
  return {
    instructions,
    signers,
  };
};

const prepPayForFilesTxn = async (
  wallet: WalletSigner,
  files: File[],
  metadata: any,
  price: string,
  solTreasuryAccount: any = null,
): Promise<{
  instructions: TransactionInstruction[];
  signers: Keypair[];
}> => {
  const memo = programIds().memo;

  const instructions: TransactionInstruction[] = [];
  const signers: Keypair[] = [];

  if (wallet.publicKey) {
    instructions.push(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: IPFS_SOL_HOLDER_ID, //(paid to ipfs storage fee)
        lamports: 2300000,
      }),
    );

    if (solTreasuryAccount) {
      const parsedPrice = parsePrice(price);
      instructions.push(
        SystemProgram.transfer({
          fromPubkey: wallet.publicKey,
          toPubkey: solTreasuryAccount,
          lamports: parsedPrice,
        }),
      );
    }
  }

  for (let i = 0; i < files.length; i++) {
    const hashSum = crypto.createHash('sha256');
    hashSum.update(await files[i].text());
    const hex = hashSum.digest('hex');
    instructions.push(
      new TransactionInstruction({
        keys: [],
        programId: memo,
        data: Buffer.from(hex),
      }),
    );
  }

  return {
    instructions,
    signers,
  };
};
