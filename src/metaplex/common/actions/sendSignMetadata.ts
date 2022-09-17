import { Connection, Keypair, TransactionInstruction } from '@solana/web3.js';

import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { sendTransactionWithRetry } from 'metaplex/common/utils/connections';

import { StringPublicKey } from 'metaplex/common/utils';
import { signMetadata } from 'metaplex/common/types/metaData-types';
import { WalletSigner } from 'metaplex/common/models/wallet';

export async function sendSignMetadata(
  connection: Connection,
  wallet: WalletSigner,
  metadata: StringPublicKey,
) {
  if (!wallet.publicKey) throw new WalletNotConnectedError();

  const signers: Keypair[] = [];
  const instructions: TransactionInstruction[] = [];

  await signMetadata(metadata, wallet.publicKey.toBase58(), instructions);

  await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    signers,
    'single',
  );
}
