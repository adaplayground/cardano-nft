import { payerKeypair } from 'conf/payer';
import {
  Cluster,
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
  TransactionInstruction,
} from '@solana/web3.js';
import logger from 'metaplex/utils/logger';

import { Token } from '@solana/spl-token';
import { TOKEN_PROGRAM_ID } from 'metaplex/common/constants';
import { sendTransactionWithRetry } from 'metaplex/candy-machine/actions/transactions';

let solanaCluster = 'mainnet-beta';

export function loadWalletKey(keypair): Keypair {
  if (!keypair || keypair === '') {
    throw new Error('Keypair is required!');
  }
  const loaded = Keypair.fromSecretKey(new Uint8Array(keypair));
  logger.info(`wallet public key: ${loaded.publicKey}`);
  return loaded;
}

const transferOneToken = async (
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
      100000,
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

const walletPayerKeyPair = loadWalletKey(payerKeypair);

let toAddress = '4AdKJ2gWq9jFShCKWf9xrhRPf3v87vBhKjpTDRiCFreB';

let mintAddress = '7HrUC7ucM7hr3QPJNhadXhuFtQhpY1sMppNJj1N9x1FY';

const connection = new Connection(clusterApiUrl(solanaCluster as Cluster));
// 2044280
(async () => {
  await transferOneToken(
    mintAddress,
    walletPayerKeyPair,
    toAddress,
    connection,
  );
  logger.log(`successfully transferred mint ${mintAddress} to ${toAddress}`);
})();
