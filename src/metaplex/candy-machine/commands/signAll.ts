import {
  AccountInfo,
  Connection,
  Keypair,
  PublicKey,
  TransactionInstruction,
} from '@solana/web3.js';
import * as borsh from 'borsh';

import {
  MAX_CREATOR_LEN,
  MAX_NAME_LENGTH,
  MAX_SYMBOL_LENGTH,
  MAX_URI_LENGTH,
  TOKEN_METADATA_PROGRAM_ID,
} from 'metaplex/common/constants';
import { sendTransactionWithRetry } from 'metaplex/candy-machine/actions/transactions';
import { AccountAndPubkey } from 'metaplex/candy-machine/types';
import { sleep } from 'metaplex/candy-machine/actions/various';
import { signMetadataInstruction } from 'metaplex/candy-machine/commands/sign';
import logger from 'metaplex/utils/logger';
import {
  Metadata,
  METADATA_SCHEMA,
} from 'metaplex/common/types/metaData-types';

const SIGNING_INTERVAL = 60 * 1000; //60s
let lastCount = 0;

/*
 Get accounts by candy machine creator address
 Get only verified ones
 Get only unverified ones with creator address
 Grab n at a time and batch sign and send transaction

 PS: Don't sign candy machine addresses that you do not know about. Signing verifies your participation.
*/
export async function signAllMetadataFromCandyMachine(
  connection: Connection,
  wallet: Keypair,
  candyMachineAddress: string,
  batchSize: number,
  daemon: boolean,
) {
  if (daemon) {
    // noinspection InfiniteLoopJS
    for (;;) {
      await findAndSignMetadata(
        candyMachineAddress,
        connection,
        wallet,
        batchSize,
      );
      await sleep(SIGNING_INTERVAL);
    }
  } else {
    await findAndSignMetadata(
      candyMachineAddress,
      connection,
      wallet,
      batchSize,
    );
  }
}

async function findAndSignMetadata(
  candyMachineAddress: string,
  connection: Connection,
  wallet: Keypair,
  batchSize: number,
) {
  const metadataByCandyMachine = await getAccountsByCreatorAddress(
    candyMachineAddress,
    connection,
  );
  if (lastCount === metadataByCandyMachine.length) {
    logger.debug(`Didn't find any new NFTs to sign - ${new Date()}`);
    return;
  }
  lastCount = metadataByCandyMachine.length;
  logger.info(
    `Found ${metadataByCandyMachine.length} nft's minted by candy machine ${candyMachineAddress}`,
  );
  const candyVerifiedListToSign = await getCandyMachineVerifiedMetadata(
    metadataByCandyMachine,
    candyMachineAddress,
    wallet.publicKey.toBase58(),
  );
  logger.info(
    `Found ${
      candyVerifiedListToSign.length
    } nft's to sign by  ${wallet.publicKey.toBase58()}`,
  );
  await sendSignMetadata(
    connection,
    wallet,
    candyVerifiedListToSign,
    batchSize,
  );
}

async function getAccountsByCreatorAddress(creatorAddress, connection) {
  const metadataAccounts = await getProgramAccounts(
    connection,
    TOKEN_METADATA_PROGRAM_ID.toBase58(),
    {
      filters: [
        {
          memcmp: {
            offset:
              1 + // key
              32 + // update auth
              32 + // mint
              4 + // name string length
              MAX_NAME_LENGTH + // name
              4 + // uri string length
              MAX_URI_LENGTH + // uri*
              4 + // symbol string length
              MAX_SYMBOL_LENGTH + // symbol
              2 + // seller fee basis points
              1 + // whether or not there is a creators vec
              4 + // creators vec length
              0 * MAX_CREATOR_LEN,
            bytes: creatorAddress,
          },
        },
      ],
    },
  );
  const decodedAccounts = [];
  for (let i = 0; i < metadataAccounts.length; i++) {
    const e = metadataAccounts[i];
    const decoded = await decodeMetadata(e.account.data);
    const accountPubkey = e.pubkey;
    const store = [decoded, accountPubkey];
    // @ts-ignore
    decodedAccounts.push(store);
  }
  return decodedAccounts;
}

async function getProgramAccounts(
  connection: Connection,
  programId: String,
  configOrCommitment?: any,
): Promise<Array<AccountAndPubkey>> {
  const extra: any = {};
  let commitment;
  //let encoding;

  if (configOrCommitment) {
    if (typeof configOrCommitment === 'string') {
      commitment = configOrCommitment;
    } else {
      commitment = configOrCommitment.commitment;
      //encoding = configOrCommitment.encoding;

      if (configOrCommitment.dataSlice) {
        extra.dataSlice = configOrCommitment.dataSlice;
      }

      if (configOrCommitment.filters) {
        extra.filters = configOrCommitment.filters;
      }
    }
  }

  const args = connection._buildArgs([programId], commitment, 'base64', extra);
  const unsafeRes = await (connection as any)._rpcRequest(
    'getProgramAccounts',
    args,
  );
  //logger.log(unsafeRes)
  const data = (
    unsafeRes.result as Array<{
      account: AccountInfo<[string, string]>;
      pubkey: string;
    }>
  ).map(item => {
    return {
      account: {
        // TODO: possible delay parsing could be added here
        data: Buffer.from(item.account.data[0], 'base64'),
        executable: item.account.executable,
        lamports: item.account.lamports,
        // TODO: maybe we can do it in lazy way? or just use string
        owner: item.account.owner,
      } as AccountInfo<Buffer>,
      pubkey: item.pubkey,
    };
  });

  return data;
}

async function decodeMetadata(buffer) {
  return borsh.deserializeUnchecked(METADATA_SCHEMA, Metadata, buffer);
}

async function getCandyMachineVerifiedMetadata(
  metadataList,
  candyAddress,
  creatorAddress,
) {
  const verifiedList = [];
  metadataList.forEach(meta => {
    let verifiedCandy = false;
    let verifiedCreator = true;
    meta[0].data.creators.forEach(creator => {
      if (
        new PublicKey(creator.address).toBase58() === candyAddress &&
        creator.verified === 1
      ) {
        verifiedCandy = true;
      }
      if (
        new PublicKey(creator.address).toBase58() === creatorAddress &&
        creator.verified === 0
      ) {
        verifiedCreator = false;
      }
    });
    if (verifiedCandy && !verifiedCreator) {
      // @ts-ignore
      verifiedList.push(meta);
    }
  });
  return verifiedList;
}

async function sendSignMetadata(connection, wallet, metadataList, batchsize) {
  let total = 0;
  while (metadataList.length > 0) {
    logger.debug('Signing metadata ');
    let sliceAmount = batchsize;
    if (metadataList.length < batchsize) {
      sliceAmount = metadataList.length;
    }
    const removed = metadataList.splice(0, sliceAmount);
    total += sliceAmount;
    await delay(500);
    await signMetadataBatch(removed, connection, wallet);
    logger.debug(`Processed ${total} nfts`);
  }
  logger.info(`Finished signing metadata for ${total} NFTs`);
}

async function signMetadataBatch(metadataList, connection, keypair) {
  const instructions: TransactionInstruction[] = metadataList.map(meta => {
    return signMetadataInstruction(new PublicKey(meta[1]), keypair.publicKey);
  });
  await sendTransactionWithRetry(
    connection,
    keypair,
    instructions,
    [],
    'single',
  );
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
