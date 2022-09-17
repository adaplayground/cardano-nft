import { WalletAdapter } from '@solana/wallet-adapter-base';

export type WalletSigner = Pick<
  WalletAdapter,
  // @ts-ignore
  'publicKey' | 'signTransaction' | 'signAllTransactions'
>;
