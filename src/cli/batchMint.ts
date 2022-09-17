import * as fs from 'fs';

import {
  AvailableCandyMachineInfoType,
  CandyMachineSummaryInfoType,
  CreateCandyMachineInfoType,
  EnvironmentSummaryInfoType,
} from 'types';
import { creatorPublicKeys } from 'conf/creators';

import sha256 from 'crypto-js/sha256';
import {
  clearSummaryLock,
  getSummaryInfo,
  saveCreateCandyMachine,
  setSummaryInfo,
  setSummaryLock,
} from 'store/nftFireStore';
import { getMintStatusMessage, makeCandyMachine } from 'metaplex/candy-machine';
import { createDirIfNotExist, readFileInBuffer, sleep } from 'cli/utils';
import logger from 'metaplex/utils/logger';
import { Keypair, PublicKey } from '@solana/web3.js';
import { treasurePublicKeys } from 'conf/treasures';
import { payerKeypair } from 'conf/payer';
import { loadWalletKey } from 'metaplex/candy-machine/actions/accounts';
import { dateString } from 'metaplex/utils/helpers';
import { program } from 'commander';
import glob = require('glob');

const batchFolder = './batch';
const timeDelay = 15;

let solanaCluster = 'devnet';
let category = 'Solana';

program
  .option(
    '-e, --env <string>',
    'Solana cluster env name',
    'devnet', //mainnet-beta, devnet
  )
  .option('-c, --category <string>', 'mint category name', 'marblz');

program.parse(process.argv);
const options = program.opts();

const bathMint = () => {
  const walletPayerKeyPair = loadWalletKey(payerKeypair);
  createDirIfNotExist('./report/success');
  createDirIfNotExist('./report/error');
  createDirIfNotExist('./report/local');
  // options is optional

  let index = 0;
  glob(`${batchFolder}/*.json`, {}, function (er, files) {
    if (files) {
      files.forEach(async file => {
        index += 1;
        await createCandyMachineForFile(file, index);
      });
    }
  });

  const createCandyMachineForFile = async (file, index) => {
    await sleep(index * 1000 * timeDelay);
    const walletTreasurerKeyPair =
      treasurePublicKeys[index % treasurePublicKeys.length];
    console.log(
      `${index} --> pre-minting ${file} sleep ${index * timeDelay} seconds`,
    );
    const metaFileName = file;
    const pngFileName = file.replace('.json', '.png');
    if (fs.existsSync(metaFileName) && fs.existsSync(pngFileName)) {
      console.log(`${pngFileName}->${metaFileName}`);
      const imageBase64 = readFileInBuffer(pngFileName);
      if (imageBase64) {
        const fileHash = sha256(imageBase64).toString();
        console.log(fileHash);
        const metaContent = fs.readFileSync(metaFileName);
        // @ts-ignore
        let meta = JSON.parse(metaContent);
        if (meta.attributes) {
          meta.attributes.push({
            trait_type: 'sha256',
            value: fileHash,
          });
        }
        console.log(`start pre-mint ${pngFileName}`);
        try {
          const existing = (await getSummaryInfo(solanaCluster, category)) || {
            count: 0,
            summaries: [],
          };

          const foundExisting =
            existing.summaries.findIndex(
              (s: CandyMachineSummaryInfoType) => s.sha256 === fileHash,
            ) >= 0;
          if (!foundExisting) {
            await preMint(
              imageBase64,
              meta,
              walletPayerKeyPair,
              walletTreasurerKeyPair,
              fileHash,
            );
            console.log(`successfully pre-mint ${pngFileName}`);
          } else {
            console.log(
              `${pngFileName} have been pre-minted before, will not mint again!`,
            );
          }
          const successPngFile = pngFileName.replace(
            './batch',
            './report/success',
          );
          fs.rename(pngFileName, successPngFile, function (err) {
            if (err) throw err;
            console.log(`Successfully moved  - ${successPngFile}!`);
          });
          const successMetaFile = metaFileName.replace(
            './batch',
            './report/success',
          );
          fs.rename(metaFileName, successMetaFile, function (err) {
            if (err) throw err;
            console.log(`Successfully moved  - ${successMetaFile}!`);
          });
        } catch {
          const failurePngFile = pngFileName.replace(
            './batch',
            './report/error',
          );
          fs.rename(pngFileName, failurePngFile, function (err) {
            if (err) throw err;
            console.log(`Successfully moved  - ${failurePngFile}!`);
          });
          const failureMetaFile = metaFileName.replace(
            './batch',
            './report/error',
          );
          fs.rename(metaFileName, failureMetaFile, function (err) {
            if (err) throw err;
            console.log(`Successfully moved  - ${failureMetaFile}!`);
          });
          console.log(`failed to pre-mint ${pngFileName}`);
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
    const price = meta.price ?? 0.001;
    delete meta.price;
    const storage = await makeCandyMachine(
      image,
      meta,
      payerKeypair,
      treasurerPublicKey,
      solanaCluster,
      price,
      true,
      status => {
        console.log(`${status}->${getMintStatusMessage(status)}`);
      },
    );

    const storageObject = JSON.parse(storage[`${solanaCluster}-cache`]);

    const createCandyMachineInfo: CreateCandyMachineInfoType = {
      creatorPublicKey: creatorPublicKeys[0].toBase58(),
      success: true,
      arweaveLink: storageObject.items[0].link,
      sha256: fileHash,
      treasurePublicKey: treasurerPublicKey.toBase58(),
      metaData: meta,
      goLiveDate: storageObject.startDate.toString(),
      price: price,
      solanaCluster: solanaCluster,
      candyMachineAddress: storageObject.candyMachineAddress,
      candyMachine: JSON.parse(JSON.stringify(storage)),
      maxSupply: 0,
      category,
    };

    fs.writeFileSync(
      `./report/local/${fileHash}_c.json`,
      JSON.stringify(createCandyMachineInfo, null, 4),
    );

    const availableCandyMachineInfo: AvailableCandyMachineInfoType = {
      creatorPublicKey: createCandyMachineInfo.creatorPublicKey,
      success: true,
      arweaveLink: createCandyMachineInfo.arweaveLink,
      sha256: fileHash,
      treasurePublicKey: treasurerPublicKey.toBase58(),
      metaData: meta,
      goLiveDate: createCandyMachineInfo.goLiveDate,
      price: 0.1,
      solanaCluster: solanaCluster,
      candyMachineAddress: createCandyMachineInfo.candyMachineAddress,
      name: meta.name,
      description: meta.description,
      maxSupply: 0,
      available: true,
      category,
    };

    const currentDate = dateString(new Date());
    const documentId = `env_${
      createCandyMachineInfo.solanaCluster
    }_date_${currentDate}_sha256_${
      createCandyMachineInfo.sha256
    }_user_${createCandyMachineInfo.treasurePublicKey!}`;

    fs.writeFileSync(
      `./report/local/${fileHash}_a.json`,
      JSON.stringify(availableCandyMachineInfo, null, 4),
    );
    await saveCreateCandyMachine(
      currentDate,
      documentId,
      createCandyMachineInfo,
      availableCandyMachineInfo,
    );

    const candyMachineSummary: CandyMachineSummaryInfoType = {
      documentId,
      name: meta.name,
      description: meta.description,
      price: price,
      available: true,
      sha256: fileHash,
      metaLink: createCandyMachineInfo.arweaveLink,
      category,
    };
    try {
      let lock = await setSummaryLock(solanaCluster, category);

      while (!lock) {
        console.log('Trying to get write summary lock,sleep 2 seconds');
        await sleep(2000);
        lock = await setSummaryLock(solanaCluster, category);
      }
      console.log('Got write summary lock');
      const existing = (await getSummaryInfo(solanaCluster, category)) || {
        count: 0,
        summaries: [],
      };
      const summary: EnvironmentSummaryInfoType = JSON.parse(
        JSON.stringify(existing),
      );

      summary.count += 1;
      (summary.category = category), (summary.solanaCluster = solanaCluster);
      summary.summaries.push(candyMachineSummary);
      console.log(`Write summary for image ${summary.count}:${meta.name}`);
      await setSummaryInfo(solanaCluster, category, summary);
    } finally {
      await clearSummaryLock(solanaCluster, category);
    }
    console.log(storage);
    console.log('Successfully created the candy machine');
  };
};

if (options.env === 'devnet' || options.env === 'mainnet-beta') {
  console.log(options);
  solanaCluster = options.env;
  category = options.category;
  bathMint();
} else {
  console.error('env can only be devnet or mainnet');
}
