import { Keypair, PublicKey } from '@solana/web3.js';
import BN from 'bn.js';
import {
  createConfig,
  loadCandyProgram,
} from 'metaplex/candy-machine/actions/accounts';
import { loadCache, saveCache } from 'metaplex/candy-machine/actions/cache';
import { chunks } from 'metaplex/candy-machine/actions/various';
import logger from 'metaplex/utils/logger';
import { ipfsConfig, ipfsUpload } from 'metaplex/candy-machine/ipfs';

export async function uploadSimple(
  images,
  manifestContents,
  cacheName: string,
  env: string,
  keypair: Keypair,
  totalNFTs: number,
  retainAuthority: boolean,
  cacheStorage: any,
): Promise<boolean> {
  let uploadSuccessful = true;

  let savedContent = loadCache(cacheName, env, cacheStorage);
  let cacheContent = savedContent || {};

  if (!cacheContent.program) {
    cacheContent.program = {};
  }

  if (!cacheContent.items) {
    cacheContent.items = [];
  }

  const SIZE = images.length;

  const walletKeyPair = keypair;
  const anchorProgram = await loadCandyProgram(walletKeyPair, env);

  let config = cacheContent.program.config
    ? new PublicKey(cacheContent.program.config)
    : undefined;

  for (let i = 0; i < SIZE; i++) {
    const image = images[i];
    const index = i;

    logger.debug(`Processing file: ${i}`);
    if (i % 50 === 0) {
      logger.info(`Processing file: ${i}`);
    }

    let link = cacheContent?.items?.[index]?.link;
    if (!link || !cacheContent.program.uuid) {
      const manifestContent = manifestContents[i];
      const manifest = manifestContent;

      const manifestBuffer = Buffer.from(JSON.stringify(manifest));

      if (i === 0 && !cacheContent.program.uuid) {
        // initialize config
        logger.info(`initializing config`);
        try {
          saveCache(cacheName, env, cacheContent, cacheStorage);
          const res = await createConfig(
            anchorProgram,
            walletKeyPair,
            {
              maxNumberOfLines: new BN(totalNFTs),
              symbol: manifest.symbol,
              sellerFeeBasisPoints: manifest.seller_fee_basis_points,
              isMutable: true,
              maxSupply: new BN(0),
              retainAuthority: retainAuthority,
              creators: manifest.properties.creators.map(creator => {
                return {
                  address: new PublicKey(creator.address),
                  verified: true,
                  share: creator.share,
                };
              }),
            },
            cacheName,
            env,
            cacheStorage,
          );
          savedContent = loadCache(cacheName, env, cacheStorage);
          cacheContent = savedContent || {};
          cacheContent.program.uuid = res.uuid;
          cacheContent.program.config = res.config.toBase58();
          config = res.config;

          logger.info(
            `initialized config for a candy machine with publickey: ${res.config.toBase58()}`,
          );

          saveCache(cacheName, env, cacheContent, cacheStorage);
        } catch (exx) {
          logger.error('Error deploying config to Solana network.', exx);
          throw exx;
        }
      }

      if (!link) {
        try {
          // link = await arweaveUpload(
          //   walletKeyPair,
          //   anchorProgram,
          //   env,
          //   image,
          //   manifestBuffer,
          //   manifest,
          //   index,
          // );
          link = await ipfsUpload(ipfsConfig, image, manifestBuffer);

          if (link) {
            logger.debug('setting cache for ', index);
            cacheContent.items[index] = {
              link,
              name: manifest.name,
              onChain: false,
            };
            cacheContent.authority = walletKeyPair.publicKey.toBase58();
            saveCache(cacheName, env, cacheContent, cacheStorage);
          }
        } catch (er) {
          uploadSuccessful = false;
          logger.error(`Error uploading file ${index}`, er);
        }
      }
    }
  }

  const keys = Object.keys(cacheContent.items);
  try {
    await Promise.all(
      chunks(Array.from(Array(keys.length).keys()), 1000).map(
        async allIndexesInSlice => {
          for (
            let offset = 0;
            offset < allIndexesInSlice.length;
            offset += 10
          ) {
            const indexes = allIndexesInSlice.slice(offset, offset + 10);
            const onChain = indexes.filter(i => {
              const index = keys[i];
              return cacheContent.items[index]?.onChain || false;
            });
            const ind = keys[indexes[0]];

            if (onChain.length !== indexes.length) {
              logger.info(
                `Writing indices ${ind}-${keys[indexes[indexes.length - 1]]}`,
              );
              try {
                await anchorProgram.rpc.addConfigLines(
                  // @ts-ignore
                  ind,
                  indexes.map(i => ({
                    uri: cacheContent.items[keys[i]].link,
                    name: cacheContent.items[keys[i]].name,
                  })),
                  {
                    accounts: {
                      config,
                      authority: walletKeyPair.publicKey,
                    },
                    signers: [walletKeyPair],
                  },
                );
                indexes.forEach(i => {
                  cacheContent.items[keys[i]] = {
                    ...cacheContent.items[keys[i]],
                    onChain: true,
                  };
                });
                saveCache(cacheName, env, cacheContent, cacheStorage);
              } catch (e) {
                logger.error(
                  `saving config line ${ind}-${
                    keys[indexes[indexes.length - 1]]
                  } failed`,
                  e,
                );
                uploadSuccessful = false;
              }
            }
          }
        },
      ),
    );
  } catch (e) {
    logger.error(e);
  } finally {
    saveCache(cacheName, env, cacheContent, cacheStorage);
  }
  return uploadSuccessful;
}
