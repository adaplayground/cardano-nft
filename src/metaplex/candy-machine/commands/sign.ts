import { Program } from '@project-serum/anchor';
import { Keypair, PublicKey, TransactionInstruction } from '@solana/web3.js';
import { loadCandyProgram } from 'metaplex/candy-machine/actions/accounts';
import { TOKEN_METADATA_PROGRAM_ID } from 'metaplex/common/constants';
import { sendTransactionWithRetry } from 'metaplex/candy-machine/actions/transactions';

const METADATA_SIGNATURE = Buffer.from([7]); //now thats some voodoo magic. WTF candy-machine? XD

export async function signMetadata(
  metadata: string,
  keypair: Keypair,
  env: string,
) {
  const creatorKeyPair = keypair;
  const anchorProgram = await loadCandyProgram(creatorKeyPair, env);
  await signWithRetry(anchorProgram, creatorKeyPair, new PublicKey(metadata));
}

async function signWithRetry(
  anchorProgram: Program,
  creatorKeyPair: Keypair,
  metadataAddress: PublicKey,
) {
  await sendTransactionWithRetry(
    anchorProgram.provider.connection,
    creatorKeyPair,
    [
      signMetadataInstruction(
        new PublicKey(metadataAddress),
        creatorKeyPair.publicKey,
      ),
    ],
    [],
    'single',
  );
}

export function signMetadataInstruction(
  metadata: PublicKey,
  creator: PublicKey,
): TransactionInstruction {
  const data = METADATA_SIGNATURE;

  const keys = [
    {
      pubkey: metadata,
      isSigner: false,
      isWritable: true,
    },
    {
      pubkey: creator,
      isSigner: true,
      isWritable: false,
    },
  ];
  return new TransactionInstruction({
    keys,
    programId: TOKEN_METADATA_PROGRAM_ID,
    data,
  });
}