import { AccountInfo } from '@solana/web3.js';

import { ParsedAccount } from 'metaplex/common/types/account-types';

import {
  isValidHttpUrl,
  METADATA_PROGRAM_ID,
  pubkeyToString,
} from 'metaplex/common/utils';
import {
  decodeMetadata,
  MasterEditionV1,
  MasterEditionV2,
  Metadata,
  MetadataKey,
} from 'metaplex/common/types/metaData-types';

export const processSimpleMetaData = async (
  account: AccountInfo<Buffer>,
  pubkey: string,
) => {
  if (!isMetadataAccount(account)) return null;
  try {
    if (isMetadataV1Account(account)) {
      const metadata = decodeMetadata(account.data);

      if (isValidHttpUrl(metadata.data.uri)) {
        const parsedAccount: ParsedAccount<Metadata> = {
          pubkey,
          account,
          info: metadata,
        };

        return parsedAccount;
        // await setter('metadataByMint', metadata.mint, parsedAccount);
        // await setter('metadataByMetadata', pubkey, parsedAccount);
      }
    }
  } catch {
    return null;
  }
};

const isMetadataAccount = (account: AccountInfo<Buffer>) =>
  account && pubkeyToString(account.owner) === METADATA_PROGRAM_ID;

const isMetadataV1Account = (account: AccountInfo<Buffer>) =>
  account.data[0] === MetadataKey.MetadataV1;

const isEditionV1Account = (account: AccountInfo<Buffer>) =>
  account.data[0] === MetadataKey.EditionV1;

const isMasterEditionAccount = (account: AccountInfo<Buffer>) =>
  account.data[0] === MetadataKey.MasterEditionV1 ||
  account.data[0] === MetadataKey.MasterEditionV2;

const isMasterEditionV1 = (
  me: MasterEditionV1 | MasterEditionV2,
): me is MasterEditionV1 => {
  return me.key === MetadataKey.MasterEditionV1;
};
