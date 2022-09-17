/* --- STATE --- */
export interface WalletViewState {
  loading: boolean;
  errorMessage?: string;
  walletPublicKey: string | null;
  hasWallet: boolean;
  balance: number;
  mintPublicKeys: Array<string>;
  metaData: { [key: string]: any };
  mintAddresses: { [key: string]: any };
  arweaveId?: string;
  tokenList: Array<string>;
}
