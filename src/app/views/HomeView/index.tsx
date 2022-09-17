import React from 'react';

export function HomeView() {
  return (
    <div
      className={'d-flex align-items-center justify-content-center flex-column'}
      style={{
        height: 'calc(100vh - 280px)',
        overflow: 'hidden',
      }}
    >
      {/*<div className={'text-center display-2 mb-3 text-uppercase text-success'}>*/}
      {/*  Solana*/}
      {/*</div>*/}
      {/*<div className={'text-center display-3 mb-5'}>*/}
      {/*  {' '}*/}
      {/*  <img*/}
      {/*    alt=""*/}
      {/*    src={'/logo.png'}*/}
      {/*    width="200"*/}
      {/*    height="200"*/}
      {/*    className="mb-3 "*/}
      {/*  />*/}
      {/*</div>*/}

      <div className={'text-center display-1 mx-auto '}>
        Solana NFT Playground
      </div>
    </div>
  );
}
