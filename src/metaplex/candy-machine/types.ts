import { BN } from '@project-serum/anchor';
import { AccountInfo, PublicKey } from '@solana/web3.js';
import { WalletContextState } from '@solana/wallet-adapter-react';
import { MintStatus } from 'metaplex/candy-machine/index';
import { Creator } from 'metaplex/common/types/metaData-types';

export type WebWalletSigner = Pick<
  WalletContextState,
  'publicKey' | 'signTransaction' | 'signAllTransactions'
>;

export type MintMonitor = ((status: MintStatus, result: any) => void) | null;

export interface Config {
  authority: PublicKey;
  data: ConfigData;
}

export interface RemainingAccount {
  pubkey: PublicKey;
  isWritable: boolean;
  isSigner: boolean;
}

export class ConfigData {
  name: string;
  symbol: string;
  uri: string;
  sellerFeeBasisPoints: number;
  creators: Creator[] | null;
  maxNumberOfLines: BN | number;
  isMutable: boolean;
  maxSupply: BN;
  retainAuthority: boolean;

  constructor(args: {
    name: string;
    symbol: string;
    uri: string;
    sellerFeeBasisPoints: number;
    creators: Creator[] | null;
    maxNumberOfLines: BN;
    isMutable: boolean;
    maxSupply: BN;
    retainAuthority: boolean;
  }) {
    this.name = args.name;
    this.symbol = args.symbol;
    this.uri = args.uri;
    this.sellerFeeBasisPoints = args.sellerFeeBasisPoints;
    this.creators = args.creators;
    this.maxNumberOfLines = args.maxNumberOfLines;
    this.isMutable = args.isMutable;
    this.maxSupply = args.maxSupply;
    this.retainAuthority = args.retainAuthority;
  }
}

export type AccountAndPubkey = {
  pubkey: string;
  account: AccountInfo<Buffer>;
};
