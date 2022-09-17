import React, { createContext, useContext, useState } from 'react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';

const solanaClusterContext = createContext({
  solanaCluster: WalletAdapterNetwork.Mainnet,
  setSolanaCluster: (cluster: WalletAdapterNetwork) => {},
});

function useSolanaCluster() {
  return useContext(solanaClusterContext);
}

export function SolanaClusterProvider({ initValue, children }) {
  const [solanaCluster, setSolanaCluster] =
    useState<WalletAdapterNetwork>(initValue);
  return (
    <solanaClusterContext.Provider value={{ solanaCluster, setSolanaCluster }}>
      {children}
    </solanaClusterContext.Provider>
  );
}

export default useSolanaCluster;
