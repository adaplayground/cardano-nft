import { MintMonitor, WebWalletSigner } from 'metaplex/candy-machine/types';
import {
  processCreateCandyMachine,
  processGetInfo,
  processMintOneToken,
  processSignMeta,
  processUpdateCandyMachine,
  processUpload,
  processVerify,
} from 'metaplex/candy-machine/operations';
import { Keypair } from '@solana/web3.js';
import logger from 'metaplex/utils/logger';

export enum MintStatus {
  UpLoad = 1,
  Verify,
  Create,
  Update,
  Mint,
  Sign,
  Info,
  Error,
}

export const getMintStatusMessage = (status: MintStatus) => {
  switch (status) {
    case MintStatus.UpLoad:
      return `Uploading`;
    case MintStatus.Sign:
      return `signing`;
    case MintStatus.Update:
      return `Updating meta data`;
    case MintStatus.Verify:
      return `Verifying meta data`;
    case MintStatus.Create:
      return `Creating meta data`;
    case MintStatus.Mint:
      return `Minting`;
    case MintStatus.Info:
      return `Retrieving information`;
    case MintStatus.Error:
      return `Detected errors`;
  }
};

export {
  processUpload,
  processVerify,
  processCreateCandyMachine,
  processUpdateCandyMachine,
  processMintOneToken,
  processSignMeta,
  processGetInfo,
};

//this is used to create candy machine before sell.
//1. makeCandyMachine
//2.     -->buyerBuyNftFromCandyMachine
//3. mintOneNft (Mint on demand only need one step)
//4. diyMintOneNftWithCandyMachine (normally not needed because of extra cost)
export async function makeCandyMachine(
  image: string, //base64 png images as in sample assets\image0.ts
  meta: any, // meta json as in sample assets\0.json
  payerKeypair: any,
  solTreasuryAccount: any,
  env: string,
  price: string,
  retainAuthority: boolean,
  mintMonitor: MintMonitor,
) {
  const cacheStorage = {};
  const cacheName = 'cache';
  const currentDate = new Date().toISOString();
  const tokenPrice = '1';
  try {
    const success = await processUpload(
      image,
      meta,
      payerKeypair,
      env,
      cacheName,
      retainAuthority,
      cacheStorage,
    );
    if (mintMonitor) {
      if (success) {
        mintMonitor(MintStatus.UpLoad, cacheStorage);
      }
    }
    await processVerify(payerKeypair, env, cacheName, cacheStorage);
    if (mintMonitor) {
      mintMonitor(MintStatus.Verify, cacheStorage);
    }
    await processCreateCandyMachine(
      tokenPrice,
      payerKeypair,
      env,
      cacheName,
      cacheStorage,
      null,
      null,
      solTreasuryAccount,
    );
    if (mintMonitor) {
      mintMonitor(MintStatus.Create, cacheStorage);
    }
    await processUpdateCandyMachine(
      price,
      currentDate,
      payerKeypair,
      env,
      cacheName,
      cacheStorage,
    );
    if (mintMonitor) {
      mintMonitor(MintStatus.Update, cacheStorage);
    }
  } catch (e) {
    if (mintMonitor) {
      mintMonitor(MintStatus.Error, cacheStorage);
      logger.log(e);
    }
  }
  return cacheStorage;
}

//this is for buyer to buy that NFT from candy machine.
export async function buyerBuyNftFromCandyMachine(
  buyerKeypair: Keypair | WebWalletSigner,
  env: string,
  cacheStorage: any,
  mintMonitor: MintMonitor,
  extraMintPrice: string = '0',
) {
  let cacheContent = {};
  const cacheName = 'cache';
  try {
    await processMintOneToken(
      buyerKeypair,
      env,
      cacheName,
      cacheStorage,
      extraMintPrice,
    );
    if (mintMonitor) {
      mintMonitor(MintStatus.Mint, cacheStorage);
    }
    cacheContent = await processGetInfo(
      buyerKeypair,
      env,
      cacheName,
      cacheStorage,
    );
    if (mintMonitor) {
      mintMonitor(MintStatus.Info, cacheStorage);
    }
  } catch (e) {
    if (mintMonitor) {
      mintMonitor(MintStatus.Error, cacheStorage);
    }
  }

  return cacheContent;
}

// this in theory should not needed, pay extra fee for candy machine
export async function diyMintOneNftWithCandyMachine(
  image: string,
  meta: any,
  keypair: any,
  env: string,
  price: string,
  retainAuthority: boolean,
  mintMonitor: MintMonitor,
  extraMintPrice: string = '0',
) {
  const cacheStorage = {};
  const cacheName = 'cache';
  const currentDate = new Date().toISOString();
  const tokenPrice = '1';
  try {
    const success = await processUpload(
      image,
      meta,
      keypair,
      env,
      cacheName,
      retainAuthority,
      cacheStorage,
    );
    if (mintMonitor) {
      if (success) {
        mintMonitor(MintStatus.UpLoad, cacheStorage);
      }
    }
    await processVerify(keypair, env, cacheName, cacheStorage);
    if (mintMonitor) {
      mintMonitor(MintStatus.Verify, cacheStorage);
    }
    await processCreateCandyMachine(
      tokenPrice,
      keypair,
      env,
      cacheName,
      cacheStorage,
    );
    if (mintMonitor) {
      mintMonitor(MintStatus.Create, cacheStorage);
    }
    await processUpdateCandyMachine(
      price,
      currentDate,
      keypair,
      env,
      cacheName,
      cacheStorage,
    );
    if (mintMonitor) {
      mintMonitor(MintStatus.Update, cacheStorage);
    }
    await processMintOneToken(
      keypair,
      env,
      cacheName,
      cacheStorage,
      extraMintPrice,
    );
    if (mintMonitor) {
      mintMonitor(MintStatus.Mint, cacheStorage);
    }
    const cacheContent = await processGetInfo(
      keypair,
      env,
      cacheName,
      cacheStorage,
    );
    if (mintMonitor) {
      mintMonitor(MintStatus.Info, cacheStorage);
    }
    logger.log(cacheContent);
    return cacheContent;
  } catch (e) {
    if (mintMonitor) {
      mintMonitor(MintStatus.Error, cacheStorage);
      logger.log(e);
    }
    return null;
  }
}
