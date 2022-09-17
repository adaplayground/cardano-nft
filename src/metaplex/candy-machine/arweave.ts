import * as anchor from '@project-serum/anchor';
import FormData from 'form-data';

import {
  ARWEAVE_PAYMENT_WALLET,
  ARWEAVE_UPLOAD_ENDPOINT,
} from 'metaplex/common/constants';
import { sendTransactionWithRetry } from 'metaplex/candy-machine/actions/transactions';
import fetch from 'node-fetch';
import logger from 'metaplex/utils/logger';

async function upload(data: FormData, manifest, index) {
  logger.debug(`trying to upload ${index}.png: ${manifest.name}`);
  return await (
    await fetch(ARWEAVE_UPLOAD_ENDPOINT, {
      method: 'POST',
      body: data,
    })
  ).json();
}

export async function arweaveUpload(
  walletKeyPair,
  anchorProgram,
  env,
  image,
  manifestBuffer,
  manifest,
  index,
) {
  const storageCost = 2300000;

  const instructions = [
    anchor.web3.SystemProgram.transfer({
      fromPubkey: walletKeyPair.publicKey,
      toPubkey: ARWEAVE_PAYMENT_WALLET,
      lamports: storageCost,
    }),
  ];

  const tx = await sendTransactionWithRetry(
    anchorProgram.provider.connection,
    walletKeyPair,
    instructions,
    [],
    'single',
  );
  const txid = tx['txid'];
  logger.debug('transaction for arweave payment:', tx);
  try {
    await anchorProgram.provider.connection.confirmTransaction(txid, 'max');
  } catch {
    // ignore
  }

  // Force wait for max confirmations
  // await connection.confirmTransaction(txid, 'max');
  await anchorProgram.provider.connection.getParsedConfirmedTransaction(
    txid,
    'confirmed',
  );
  const data = new FormData();
  const buffer = Buffer.from(image, 'base64');

  data.append('transaction', txid);
  data.append('env', env);
  data.append('file', Buffer.from(buffer), { filename: 'image.png' });
  data.append('file', Buffer.from(manifestBuffer), {
    filename: 'metadata.json',
  });

  const result = await upload(data, manifest, index);

  const metadataFile = result.messages?.find(
    m => m.filename === 'manifest.json',
  );
  if (metadataFile?.transactionId) {
    const link = `https://arweave.net/${metadataFile.transactionId}`;
    logger.debug(`File uploaded: ${link}`);
    return link;
  } else {
    // @todo improve
    throw new Error(`No transaction ID for upload: ${index}`);
  }
}
