import React from 'react';
import { Routes } from 'routes';
import { getAnalytics } from 'firebase/analytics';
import { enableCache } from '@iconify/react';
import { firebaseApp } from 'store/nftFireStore';

const analytics = getAnalytics(firebaseApp);

function App() {
  enableCache('local');
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
export { analytics };
