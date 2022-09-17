import React, { FC, useMemo } from 'react';

import reduxStore from 'store/configureStore';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';

import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { getWallet } from 'wallets';

import { ConfettiProvider } from 'app/components/Confetti';
import { LoaderProvider } from 'contexts/loaderContext';
import useSolanaCluster from 'metaplex/contexts/solanaClusterContext';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ThemeProvider } from 'contexts/themeContext';
import { CoingeckoProvider } from 'metaplex/contexts/coingecko';

export const Providers: FC = ({ children }) => {
  const { solanaCluster } = useSolanaCluster();
  const network =
    solanaCluster === WalletAdapterNetwork.Devnet ? 'devnet' : 'mainnet-beta';
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = getWallet(network);
  return (
    <ReduxProvider store={reduxStore}>
      <ConnectedRouter history={history}>
        <ConnectionProvider endpoint={endpoint}>
          <CoingeckoProvider>
            <WalletProvider wallets={wallets} autoConnect>
              <LoaderProvider>
                <ConfettiProvider>
                  <WalletModalProvider>
                    <ThemeProvider>{children}</ThemeProvider>
                  </WalletModalProvider>
                </ConfettiProvider>
              </LoaderProvider>
            </WalletProvider>
          </CoingeckoProvider>
        </ConnectionProvider>
      </ConnectedRouter>
    </ReduxProvider>
  );
};
