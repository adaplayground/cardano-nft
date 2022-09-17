// on demand mint, without any pre-paid fee for seller
// or diy mint on demand if not set solTreasuryAccount

import { MintMonitor, WebWalletSigner } from 'metaplex/candy-machine/types';
import { web3 } from '@project-serum/anchor';
import { Cluster } from '@solana/web3.js';
import {
  mintSingleNFT,
  mintSingleNFTWithMetaLink,
} from 'metaplex/diy-mint/nft';
import { ENV } from 'metaplex/common/utils/connections';
import { MintStatus } from 'metaplex/candy-machine';
import {
  ipfsConfig,
  ipfsUploadWithMediaLink,
} from 'metaplex/candy-machine/ipfs';

import { StringPublicKey } from 'metaplex/common/utils';
import { Attribute, Creator } from 'metaplex/common/types/metaData-types';

export const mintOneNft = async (
  image: File | null,
  meta: {
    name: string;
    symbol: string;
    description: string;
    image: string | undefined;
    animation_url: string | undefined;
    attributes: Attribute[] | undefined;
    external_url: string;
    properties: any;
    creators: Creator[] | null;
    sellerFeeBasisPoints: number;
    collection_name?: string;
    collection_family?: string;
  },
  wallet: WebWalletSigner,
  env: string,
  price: string,
  mintMonitor: MintMonitor,
  solTreasuryAccount: any = null,
  cacheStorage: any,
): Promise<{
  metadataAccount: StringPublicKey;
  arweaveLink: string;
} | void> => {
  if (image) {
    const cacheName = 'cache';
    const solConnection = new web3.Connection(
      web3.clusterApiUrl(env as Cluster),
    );
    return await mintSingleNFT(
      solConnection,
      wallet,
      env as ENV,
      image,
      meta,
      mintMonitor,
      cacheName,
      cacheStorage,
      price,
      solTreasuryAccount,
    );
  }
};

export const mintOneNftWithImageLink = async (
  imageLink: string,
  meta: {
    name: string;
    symbol: string;
    description: string;
    image: string | undefined;
    animation_url: string | undefined;
    attributes: Attribute[] | undefined;
    external_url: string;
    properties: any;
    creators: Creator[] | null;
    sellerFeeBasisPoints: number;
    collection_name?: string;
    collection_family?: string;
  },
  wallet: WebWalletSigner,
  env: string,
  price: string,
  mintMonitor: MintMonitor,
  solTreasuryAccount: any = null,
  cacheStorage: any,
): Promise<{
  metadataAccount: StringPublicKey;
  arweaveLink: string;
} | void> => {
  if (imageLink) {
    const cacheName = 'cache';
    const solConnection = new web3.Connection(
      web3.clusterApiUrl(env as Cluster),
    );
    //const manifestBuffer = Buffer.from(JSON.stringify(image0_meta));
    let link: string | null = null;
    if (mintMonitor) {
      mintMonitor(MintStatus.UpLoad, cacheStorage);
    }
    try {
      const metadata = meta;
      const metadataContent = metadata;

      if (metadata.collection_name && metadata.collection_family) {
        metadataContent['collection'] = {
          name: metadata.collection_name,
          family: metadata.collection_family,
        };
      }
      const manifestBuffer = Buffer.from(JSON.stringify(metadataContent));
      link = await ipfsUploadWithMediaLink(
        ipfsConfig,
        imageLink,
        manifestBuffer,
      );
    } catch (e) {
      console.log(e);
    }
    return await mintSingleNFTWithMetaLink(
      solConnection,
      wallet,
      env as ENV,
      link!,
      meta,
      mintMonitor,
      cacheName,
      cacheStorage,
      price,
      solTreasuryAccount,
    );
  }
};
