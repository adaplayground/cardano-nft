import React from 'react';
import { Routes } from 'routes';
import { getAnalytics } from 'firebase/analytics';
import { enableCache } from '@iconify/react';
import { firebaseApp } from 'store/nftFireStore';
import { initIpfs } from 'metaplex';
import ipfsCredentials from 'conf/ipfsCreds';

const analytics = getAnalytics(firebaseApp);

function App() {
  // React.useEffect(()=>{
  //   console.log(cache);
  // },)
  initIpfs(ipfsCredentials);
  enableCache('local');
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
export { analytics };
