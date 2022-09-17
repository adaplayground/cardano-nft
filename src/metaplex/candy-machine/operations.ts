import { uploadSimple } from 'metaplex/candy-machine/commands/upload';
import { loadCache, saveCache } from 'metaplex/candy-machine/actions/cache';
import {
  getCandyMachineAddress,
  loadCandyProgram,
} from 'metaplex/candy-machine/actions/accounts';
import {
  Connection,
  Keypair,
  PublicKey,
  TransactionInstruction,
} from '@solana/web3.js';
import {
  chunks,
  fromUTF8Array,
  parseDate,
  parsePrice,
} from 'metaplex/candy-machine/actions/various';

import {
  CONFIG_ARRAY_START,
  CONFIG_LINE_SIZE,
  TOKEN_PROGRAM_ID,
} from 'metaplex/common/constants';
import { Config, WebWalletSigner } from 'metaplex/candy-machine/types';
import BN from 'bn.js';
import { Token } from '@solana/spl-token';
import * as anchor from '@project-serum/anchor';
import { mint } from 'metaplex/candy-machine/commands/mint';
import { signMetadata } from 'metaplex/candy-machine/commands/sign';
import fetch from 'node-fetch';
import logger from 'metaplex/utils/logger';
import { sendTransactionWithRetry } from 'metaplex/candy-machine/actions/transactions';

export async function processUpload(
  image: string,
  meta: any,
  payerKeypair: any,
  env: string,
  cacheName: string,
  retainAuthority: boolean,
  cacheStorage: any,
) {
  const successful = await uploadSimple(
    [image],
    [meta],
    cacheName,
    env,
    payerKeypair,
    1,
    true,
    cacheStorage,
  );
  logger.log('upload successfully');
  return successful;
}

export async function processVerify(
  payerKeypair: Keypair,
  env: string,
  cacheName: string,
  cacheStorage: any,
) {
  const cacheContent = loadCache(cacheName, env, cacheStorage);
  const walletKeyPair = payerKeypair;
  const anchorProgram = await loadCandyProgram(walletKeyPair, env);

  const configAddress = new PublicKey(cacheContent.program.config);
  const config = await anchorProgram.provider.connection.getAccountInfo(
    configAddress,
  );
  let allGood = true;

  const keys = Object.keys(cacheContent.items);
  await Promise.all(
    chunks(Array.from(Array(keys.length).keys()), 500).map(
      async allIndexesInSlice => {
        for (let i = 0; i < allIndexesInSlice.length; i++) {
          const key = keys[allIndexesInSlice[i]];
          logger.debug('Looking at key ', allIndexesInSlice[i]);

          // @ts-ignore
          const thisSlice = config.data.slice(
            CONFIG_ARRAY_START + 4 + CONFIG_LINE_SIZE * allIndexesInSlice[i],
            CONFIG_ARRAY_START +
              4 +
              CONFIG_LINE_SIZE * (allIndexesInSlice[i] + 1),
          );
          const name = fromUTF8Array([...thisSlice.slice(4, 36)]).trim();
          const uri = fromUTF8Array([...thisSlice.slice(40, 240)]);
          const cacheItem = cacheContent.items[key];
          if (
            !(name.indexOf(cacheItem.name) >= 0) ||
            !uri.match(cacheItem.link)
          ) {
            //leaving here for debugging reasons, but it's pretty useless. if the first upload fails - all others are wrong
            // logger.info(
            //   `Name (${name}) or uri (${uri}) didnt match cache values of (${cacheItem.name})` +
            //   `and (${cacheItem.link}). marking to rerun for image`,
            //   key,
            // );
            cacheItem.onChain = false;
            allGood = false;
          } else {
            const json = await fetch(cacheItem.link);
            if (
              json.status == 200 ||
              json.status == 204 ||
              json.status == 202
            ) {
              const body = await json.text();
              const parsed = JSON.parse(body);
              if (parsed.image) {
                const check = await fetch(parsed.image);
                if (
                  check.status == 200 ||
                  check.status == 204 ||
                  check.status == 202
                ) {
                  const text = await check.text();
                  if (!text.match(/Not found/i)) {
                    if (text.length == 0) {
                      logger.info(
                        'Name',
                        name,
                        'with',
                        uri,
                        'has zero length, failing',
                      );
                      cacheItem.link = null;
                      cacheItem.onChain = false;
                      allGood = false;
                    } else {
                      logger.info('Name', name, 'with', uri, 'checked out');
                    }
                  } else {
                    logger.info(
                      'Name',
                      name,
                      'with',
                      uri,
                      'never got uploaded to arweave, failing',
                    );
                    cacheItem.link = null;
                    cacheItem.onChain = false;
                    allGood = false;
                  }
                } else {
                  logger.info(
                    'Name',
                    name,
                    'with',
                    uri,
                    'returned non-200 from uploader',
                    check.status,
                  );
                  cacheItem.link = null;
                  cacheItem.onChain = false;
                  allGood = false;
                }
              } else {
                logger.info(
                  'Name',
                  name,
                  'with',
                  uri,
                  'lacked image in json, failing',
                );
                cacheItem.link = null;
                cacheItem.onChain = false;
                allGood = false;
              }
            } else {
              logger.info(
                'Name',
                name,
                'with',
                uri,
                'returned no json from link',
              );
              cacheItem.link = null;
              cacheItem.onChain = false;
              allGood = false;
            }
          }
        }
      },
    ),
  );

  if (!allGood) {
    saveCache(cacheName, env, cacheContent, cacheStorage);

    throw new Error(
      `not all NFTs checked out. check out logs above for details`,
    );
  }

  const configData = (await anchorProgram.account.config.fetch(
    configAddress,
  )) as Config;

  // @ts-ignore
  const lineCount = new BN(config.data.slice(247, 247 + 4), undefined, 'le');

  logger.info(
    `uploaded (${lineCount.toNumber()}) out of (${
      configData.data.maxNumberOfLines
    })`,
  );
  if (configData.data.maxNumberOfLines > lineCount.toNumber()) {
    throw new Error(
      `predefined number of NFTs (${
        configData.data.maxNumberOfLines
      }) is smaller than the uploaded one (${lineCount.toNumber()})`,
    );
  } else {
    logger.info('ready to deploy!');
  }

  saveCache(cacheName, env, cacheContent, cacheStorage);
}

export async function processCreateCandyMachine(
  price: string,
  payerKeypair: Keypair,
  env: string,
  cacheName: string,
  cacheStorage: any,
  splToken: any = null,
  splTokenAccount: any = null,
  solTreasuryAccount: any = null,
) {
  let parsedPrice = parsePrice(price);
  const cacheContent = loadCache(cacheName, env, cacheStorage);

  const walletKeyPair = payerKeypair;
  const anchorProgram = await loadCandyProgram(walletKeyPair, env);

  let wallet = walletKeyPair.publicKey;
  const remainingAccounts = [];
  if (splToken || splTokenAccount) {
    if (solTreasuryAccount) {
      throw new Error(
        'If spl-token-account or spl-token is set then sol-treasury-account cannot be set',
      );
    }
    if (!splToken) {
      throw new Error(
        'If spl-token-account is set, spl-token must also be set',
      );
    }
    const splTokenKey = new PublicKey(splToken);
    const splTokenAccountKey = new PublicKey(splTokenAccount);
    if (!splTokenAccount) {
      throw new Error(
        'If spl-token is set, spl-token-account must also be set',
      );
    }

    const token = new Token(
      anchorProgram.provider.connection,
      splTokenKey,
      TOKEN_PROGRAM_ID,
      walletKeyPair,
    );

    const mintInfo = await token.getMintInfo();
    if (!mintInfo.isInitialized) {
      throw new Error(`The specified spl-token is not initialized`);
    }
    const tokenAccount = await token.getAccountInfo(splTokenAccountKey);
    if (!tokenAccount.isInitialized) {
      throw new Error(`The specified spl-token-account is not initialized`);
    }
    if (!tokenAccount.mint.equals(splTokenKey)) {
      throw new Error(
        `The spl-token-account's mint (${tokenAccount.mint.toString()}) does not match specified spl-token ${splTokenKey.toString()}`,
      );
    }

    wallet = splTokenAccountKey;
    parsedPrice = parsePrice(price, 10 ** mintInfo.decimals);

    remainingAccounts.push({
      // @ts-ignore
      pubkey: splTokenKey,
      // @ts-ignore
      isWritable: false,
      // @ts-ignore
      isSigner: false,
    });
  }

  if (solTreasuryAccount) {
    wallet = new PublicKey(solTreasuryAccount);
  }

  const config = new PublicKey(cacheContent.program.config);
  const [candyMachine, bump] = await getCandyMachineAddress(
    config,
    cacheContent.program.uuid,
  );
  await anchorProgram.rpc.initializeCandyMachine(
    bump,
    {
      uuid: cacheContent.program.uuid,
      price: new anchor.BN(parsedPrice),
      itemsAvailable: new anchor.BN(Object.keys(cacheContent.items).length),
      goLiveDate: null,
    },
    {
      accounts: {
        candyMachine,
        wallet,
        config: config,
        authority: walletKeyPair.publicKey,
        payer: walletKeyPair.publicKey,
        systemProgram: anchor.web3.SystemProgram.programId,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
      },
      signers: [],
      remainingAccounts,
    },
  );
  cacheContent.candyMachineAddress = candyMachine.toBase58();
  saveCache(cacheName, env, cacheContent, cacheStorage);
  logger.info(
    `create_candy_machine finished. candy machine pubkey: ${candyMachine.toBase58()}`,
  );
}

export async function processUpdateCandyMachine(
  price: string,
  date: string,
  payerKeypair: Keypair,
  env: string,
  cacheName: string,
  cacheStorage: any,
) {
  const cacheContent = loadCache(cacheName, env, cacheStorage);

  const secondsSinceEpoch = date ? parseDate(date) : null;
  const lamports = price ? parsePrice(price) : null;

  const walletKeyPair = payerKeypair;
  const anchorProgram = await loadCandyProgram(walletKeyPair, env);

  const candyMachine = new PublicKey(cacheContent.candyMachineAddress);
  const tx = await anchorProgram.rpc.updateCandyMachine(
    lamports ? new anchor.BN(lamports) : null,
    secondsSinceEpoch ? new anchor.BN(secondsSinceEpoch) : null,
    {
      accounts: {
        candyMachine,
        authority: walletKeyPair.publicKey,
      },
    },
  );

  cacheContent.startDate = secondsSinceEpoch;
  saveCache(cacheName, env, cacheContent, cacheStorage);
  if (date)
    logger.info(
      ` - updated startDate timestamp: ${secondsSinceEpoch} (${date})`,
    );
  if (lamports)
    logger.info(` - updated price: ${lamports} lamports (${price} SOL)`);
  logger.info('update_candy_machine finished', tx);
}

export async function processMintOneToken(
  buyerKeypair: Keypair | WebWalletSigner,
  env: string,
  cacheName: string,
  cacheStorage: any,
  extraMintPrice: string = '0',
) {
  const cacheContent = loadCache(cacheName, env, cacheStorage);
  const configAddress = new PublicKey(cacheContent.program.config);
  const tx = await mint(
    buyerKeypair,
    configAddress,
    env,
    cacheName,
    cacheStorage,
    extraMintPrice,
  );

  logger.info('mint_one_token finished', tx);
  logger.log(`Done. Successful = ${tx}.`);
}

export async function processSignMeta(
  creatorKeypair: Keypair,
  env: string,
  cacheName: string,
  cacheStorage: any,
) {
  const cacheContent = loadCache(cacheName, env, cacheStorage);
  const metadataAddress = cacheContent.metadataAddress;
  await signMetadata(metadataAddress, creatorKeypair, env);
}

export async function processGetInfo(
  keypair: Keypair | WebWalletSigner,
  env: string,
  cacheName: string,
  cacheStorage: any,
) {
  const cacheContent = loadCache(cacheName, env, cacheStorage);
  cacheContent.details = {};
  const walletKeyPair = keypair;
  const anchorProgram = await loadCandyProgram(walletKeyPair, env);

  const [candyMachine] = await getCandyMachineAddress(
    new PublicKey(cacheContent.program.config),
    cacheContent.program.uuid,
  );

  try {
    const machine = await anchorProgram.account.candyMachine.fetch(
      candyMachine,
    );
    logger.info('...Candy Machine...');
    cacheContent.details['Key'] = candyMachine.toBase58();
    logger.info('Key:', cacheContent.details['Key']);

    //@ts-ignore
    cacheContent.details['authority'] = machine.authority.toBase58();
    logger.info('authority: ', cacheContent.details['authority']);
    //@ts-ignore
    cacheContent.details['wallet'] = machine.wallet.toBase58();
    logger.info('wallet: ', cacheContent.details['wallet']);
    //@ts-ignore
    cacheContent.details['tokenMint'] = machine.tokenMint
      ? //@ts-ignore
        machine.tokenMint.toBase58()
      : null;
    logger.info('tokenMint: ', cacheContent.details['tokenMint']);
    //@ts-ignore
    cacheContent.details['config'] = machine.config.toBase58();
    logger.info('config: ', cacheContent.details['config']);
    //@ts-ignore
    cacheContent.details['uuid'] = machine.data.uuid;
    logger.info('uuid: ', cacheContent.details['uuid']);
    //@ts-ignore
    cacheContent.details['price'] = machine.data.price.toNumber();
    logger.info('price: ', cacheContent.details['price']);
    cacheContent.details['itemsAvailable'] =
      //@ts-ignore
      machine.data.itemsAvailable.toNumber();
    logger.info('itemsAvailable: ', cacheContent.details['itemsAvailable']);
    //@ts-ignore
    cacheContent.details['goLiveDate'] = machine.data.goLiveDate
      ? //@ts-ignore
        new Date(machine.data.goLiveDate * 1000)
      : 'N/A';
    logger.info('goLiveDate: ', cacheContent.details['goLiveDate']);
  } catch (e) {
    logger.log('No machine found');
  }
  cacheContent.config = {};
  const config = await anchorProgram.account.config.fetch(
    cacheContent.program.config,
  );
  logger.info('...Config...');
  //@ts-ignore
  cacheContent.config['authority'] = config.authority.toBase58();
  logger.info('authority: ', cacheContent.config['authority']);
  //@ts-ignore
  cacheContent.config['symbol'] = config.data.symbol;
  logger.info('symbol: ', cacheContent.config['symbol']);

  cacheContent.config['sellerFeeBasisPoints'] =
    //@ts-ignore
    config.data.sellerFeeBasisPoints;
  logger.info(
    'sellerFeeBasisPoints: ',
    cacheContent.config['sellerFeeBasisPoints'],
  );
  //@ts-ignore
  logger.info('creators: ');
  cacheContent.config['creators'] = [];
  //@ts-ignore
  config.data.creators.map(c => {
    const creatorInfo = `${c.address.toBase58()} at ${c.share}%`;
    logger.info(creatorInfo);
    cacheContent.config['creators'].push(creatorInfo);
  });
  //@ts-ignore
  cacheContent.config['maxSupply'] = config.data.maxSupply.toNumber();
  logger.info('maxSupply: ', cacheContent.config['maxSupply']);
  //@ts-ignore
  cacheContent.config['retainAuthority'] = config.data.retainAuthority;
  logger.info('retainAuthority: ', cacheContent.config['retainAuthority']);
  //@ts-ignore
  cacheContent.config['maxNumberOfLines'] = config.data.maxNumberOfLines;
  logger.info('maxNumberOfLines: ', cacheContent.config['maxNumberOfLines']);

  saveCache(cacheName, env, cacheContent, cacheStorage);
  return cacheContent;
}

export const transferOneNft = async (
  tokenMintAddress: string,
  wallet: Keypair,
  to: string,
  connection: Connection,
) => {
  logger.info(`Started transferring mint ${tokenMintAddress} to ${to}`);
  const mintPublicKey = new PublicKey(tokenMintAddress);
  const mintToken = new Token(
    connection,
    mintPublicKey,
    TOKEN_PROGRAM_ID,
    wallet, // the wallet owner will pay to transfer and to create recipients associated token account if it does not yet exist.
  );

  const fromTokenAccount = await mintToken.getOrCreateAssociatedAccountInfo(
    wallet.publicKey,
  );

  const destPublicKey = new PublicKey(to);

  // Get the derived address of the destination wallet which will hold the custom token
  const associatedDestinationTokenAddress =
    await Token.getAssociatedTokenAddress(
      mintToken.associatedProgramId,
      mintToken.programId,
      mintPublicKey,
      destPublicKey,
    );

  const receiverAccount = await connection.getAccountInfo(
    associatedDestinationTokenAddress,
  );

  const instructions: TransactionInstruction[] = [];

  if (receiverAccount === null) {
    instructions.push(
      Token.createAssociatedTokenAccountInstruction(
        mintToken.associatedProgramId,
        mintToken.programId,
        mintPublicKey,
        associatedDestinationTokenAddress,
        destPublicKey,
        wallet.publicKey,
      ),
    );
  }

  instructions.push(
    Token.createTransferInstruction(
      TOKEN_PROGRAM_ID,
      fromTokenAccount.address,
      associatedDestinationTokenAddress,
      wallet.publicKey,
      [],
      1,
    ),
  );

  const tx = await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    [],
    'single',
  );
  const txid = tx['txid'];
  logger.debug('transaction for transfer token:', tx);
  try {
    await connection.confirmTransaction(txid, 'max');
  } catch {
    // ignore
  }

  logger.info(`Successfully transfer mint ${tokenMintAddress} to ${to}`);
};
