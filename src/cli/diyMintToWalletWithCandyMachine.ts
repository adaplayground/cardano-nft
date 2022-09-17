import * as fs from 'fs';
import sha256 from 'crypto-js/sha256';
import {
  diyMintOneNftWithCandyMachine,
  getMintStatusMessage,
} from 'metaplex/candy-machine';
import { createDirIfNotExist, readFileInBuffer, sleep } from 'cli/utils';
import logger from 'metaplex/utils/logger';
import {
  Cluster,
  clusterApiUrl,
  Connection,
  Keypair,
  PublicKey,
} from '@solana/web3.js';

import { payerKeypair } from 'conf/payer';
import { loadWalletKey } from 'metaplex/candy-machine/actions/accounts';
import glob = require('glob');
import { transferOneNft } from 'metaplex/candy-machine/operations';
import { program } from 'commander';

const timeDelay = 15;

let solanaCluster = 'devnet';
const walletPayerKeyPair = loadWalletKey(payerKeypair);
const walletTreasurerKeyPair = walletPayerKeyPair.publicKey;
let toAddress = walletPayerKeyPair.publicKey.toBase58();
const batchFolder = './diy';

program
  .option(
    '-e, --env <string>',
    'Solana cluster env name',
    'devnet', //mainnet-beta, devnet
  )
  .option(
    '-t, --to <string>',
    'mint to address public key name',
    walletPayerKeyPair.publicKey.toBase58(),
  );

program.parse(process.argv);
const options = program.opts();

// options is optional

const bathMint = () => {
  const walletPayerKeyPair = loadWalletKey(payerKeypair);
  createDirIfNotExist('./diy_report/success');
  createDirIfNotExist('./diy_report/error');
  createDirIfNotExist('./diy_report/local');
  // options is optional

  let index = 0;
  glob(`${batchFolder}/*.json`, {}, function (er, files) {
    if (files) {
      files.forEach(async file => {
        index += 1;
        await mintFileToWallet(file, index);
      });
    }
  });

  const mintFileToWallet = async (file, index) => {
    await sleep(index * 1000 * timeDelay);
    logger.log(
      `${index} --> minting ${file} sleep ${index * timeDelay} seconds`,
    );
    const metaFileName = file;
    const pngFileName = file.replace('.json', '.png');
    if (fs.existsSync(metaFileName) && fs.existsSync(pngFileName)) {
      console.log(`${pngFileName}->${metaFileName}`);
      const imageBase64 = readFileInBuffer(pngFileName);
      if (imageBase64) {
        const fileHash = sha256(imageBase64).toString();
        logger.log(fileHash);
        const metaContent = fs.readFileSync(metaFileName);
        // @ts-ignore
        let meta = JSON.parse(metaContent);
        if (meta.attributes) {
          meta.attributes.push({
            trait_type: 'sha256',
            value: fileHash,
          });
        }
        try {
          logger.log(`start mint ${pngFileName}`);
          const mintAddress = await preMint(
            imageBase64,
            meta,
            walletPayerKeyPair,
            walletTreasurerKeyPair,
            fileHash,
          );
          logger.log(
            `done mint ${pngFileName} with mint address = ${mintAddress}`,
          );
          logger.log(`start transfer  mint ${mintAddress}`);
          await sleep(index * 1000 * timeDelay);
          logger.log(
            `${index} --> transfer nft  ${mintAddress} sleep ${timeDelay} seconds`,
          );
          const connection = new Connection(
            clusterApiUrl(solanaCluster as Cluster),
          );
          await transferOneNft(
            mintAddress,
            walletPayerKeyPair,
            toAddress,
            connection,
          );
          logger.log(
            `successfully transferred mint ${mintAddress} to ${toAddress}`,
          );

          const successPngFile = pngFileName.replace(
            './diy',
            './diy_report/success',
          );
          fs.rename(pngFileName, successPngFile, function (err) {
            if (err) throw err;
            logger.log(`Successfully moved  - ${successPngFile}!`);
          });
          const successMetaFile = metaFileName.replace(
            './diy',
            './diy_report/success',
          );
          fs.rename(metaFileName, successMetaFile, function (err) {
            if (err) throw err;
            logger.log(`Successfully moved  - ${successMetaFile}!`);
          });
        } catch {
          const failurePngFile = pngFileName.replace(
            './diy',
            './diy_report/error',
          );
          fs.rename(pngFileName, failurePngFile, function (err) {
            if (err) throw err;
            logger.log(`Successfully moved  - ${failurePngFile}!`);
          });
          const failureMetaFile = metaFileName.replace(
            './diy',
            './diy_report/error',
          );
          fs.rename(metaFileName, failureMetaFile, function (err) {
            if (err) throw err;
            logger.log(`Successfully moved  - ${failureMetaFile}!`);
          });
          logger.log(`failed to mint ${pngFileName}`);
        }
      }
    }
  };

  const preMint = async (
    image: string,
    meta: any,
    payerKeypair: Keypair,
    treasurerPublicKey: PublicKey,
    fileHash: string,
  ) => {
    logger.log(`start mint image with hash ${fileHash}`);
    const price = '0.0000001';
    delete meta.price;
    const cacheContent = await diyMintOneNftWithCandyMachine(
      image,
      meta,
      payerKeypair,
      solanaCluster,
      price,
      true,
      status => {
        logger.log(`${status}->${getMintStatusMessage(status)}`);
      },
    );

    const mintAddress = cacheContent.mintAddress;

    console.log(cacheContent);
    fs.writeFileSync(
      `./diy_report/local/${fileHash}_c.json`,
      JSON.stringify(cacheContent, null, 4),
    );
    return mintAddress;
  };
};

if (options.env === 'devnet' || options.env === 'mainnet-beta') {
  console.log(options);
  solanaCluster = options.env;
  toAddress = options.to;
  bathMint();
} else {
  console.error('env can only be devnet or mainnet');
}
