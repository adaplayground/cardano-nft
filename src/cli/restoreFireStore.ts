import * as fs from 'fs';

import logger from 'metaplex/utils/logger';
import {
  availableCandyMachineCollection,
  buyCandyMachineCollection,
  createCandyMachineCollection,
  diyMintCollection,
  restoreCollection,
  summaryCollection,
} from 'store/nftFireStore';
import { sleep } from 'cli/utils';
import { glob } from 'glob';
import * as path from 'path';
const timeDelay = 5;
const solanaCluster = 'mainnet-beta';

const getAllRecords = async (solanaCluster: string, collectionName: string) => {
  logger.log(`Restore ${solanaCluster}:${collectionName}`);

  const dirName = `./firestore/${solanaCluster}/${collectionName}`;
  if (fs.existsSync(dirName)) {
    let index = 0;
    glob(`${dirName}/*.json`, {}, function (er, files) {
      if (files) {
        files.forEach(async file => {
          await sleep(1000 * timeDelay);

          logger.log(
            `${index} --> restoring ${file} sleep ${timeDelay} seconds`,
          );
          const documentId = path.basename(file).replace('.json', '');
          const data = fs.readFileSync(file);
          await restoreCollection(
            documentId,
            collectionName,
            JSON.parse(data.toString()),
          );
          logger.log(`restored ${collectionName} of ${documentId}`);
        });
      }
    });
  }
};

const restoreAllDIYs = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, diyMintCollection);
};

const restoreAllSummaries = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, summaryCollection);
};

const restoreAllCreateCandyMachines = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, createCandyMachineCollection);
};

const restoreAllAvailableCandyMachines = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, availableCandyMachineCollection);
};

const restoreAllBuyCandyMachines = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, buyCandyMachineCollection);
};

(async () => {
  await restoreAllDIYs(solanaCluster);
  await restoreAllSummaries(solanaCluster);
  await restoreAllCreateCandyMachines(solanaCluster);
  await restoreAllAvailableCandyMachines(solanaCluster);
  await restoreAllBuyCandyMachines(solanaCluster);
})();
