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

      <div className={'text-center display-1 mx-auto pb-1 text-warning'}>
        Cardano
      </div>
      <div className={'text-center display-2 mx-auto text-danger pb-2'}>
        Red Alert
      </div>
      <div className={'text-center display-1 mx-auto '}>NFT Playground</div>
    </div>
  );
}
