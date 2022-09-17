import { PublicKey } from '@solana/web3.js';

import {
  AUCTION_ID,
  BPF_UPGRADE_LOADER_ID,
  MEMO_ID,
  METADATA_PROGRAM_ID,
  METAPLEX_ID,
  SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
  SYSTEM,
  TOKEN_PROGRAM_ID,
  toPublicKey,
  VAULT_ID,
} from 'metaplex/common/utils/ids';

export const setProgramIds = async (store?: string) => {
  STORE = store ? toPublicKey(store) : undefined;
};

let STORE: PublicKey | undefined;

export const programIds = () => {
  return {
    token: TOKEN_PROGRAM_ID,
    associatedToken: SPL_ASSOCIATED_TOKEN_ACCOUNT_PROGRAM_ID,
    bpf_upgrade_loader: BPF_UPGRADE_LOADER_ID,
    system: SYSTEM,
    metadata: METADATA_PROGRAM_ID,
    memo: MEMO_ID,
    vault: VAULT_ID,
    auction: AUCTION_ID,
    metaplex: METAPLEX_ID,
    store: STORE,
  };
};
