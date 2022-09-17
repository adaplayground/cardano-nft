import { collection, getDocs, query, where } from 'firebase/firestore';
import * as fs from 'fs';
import {
  diyMintCollection,
  createCandyMachineCollection,
  availableCandyMachineCollection,
  buyCandyMachineCollection,
  summaryCollection,
  fireStore,
  tokenCollection,
} from 'store/nftFireStore';
import logger from 'metaplex/utils/logger';
import { createDirIfNotExist } from 'cli/utils';

const solanaCluster = 'mainnet-beta';

const getAllRecords = async (solanaCluster: string, collectionName: string) => {
  logger.log(`Download ${solanaCluster}:${collectionName}`);
  const q = query(
    collection(fireStore, collectionName),
    where('solanaCluster', '==', solanaCluster),
  );

  const querySnapshot = await getDocs(q);
  const dirName = `./firestore/${solanaCluster}/${collectionName}`;
  createDirIfNotExist(dirName);
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    const data = JSON.stringify(doc.data(), null, 4);
    logger.log(`Downloading ${solanaCluster}:${collectionName}:${doc.id}`);
    fs.writeFileSync(`${dirName}/${doc.id}.json`, data);
  });
};

const getAllDIYs = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, diyMintCollection);
};

const getAllSummaries = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, summaryCollection);
};

const getAllMintAddress = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, tokenCollection);
};

const getAllCreateCandyMachines = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, createCandyMachineCollection);
};

const getAllAvailableCandyMachines = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, availableCandyMachineCollection);
};

const getAllBuyCandyMachines = async (solanaCluster: string) => {
  await getAllRecords(solanaCluster, buyCandyMachineCollection);
};

(async () => {
  await getAllDIYs(solanaCluster);
  await getAllAvailableCandyMachines(solanaCluster);
  await getAllCreateCandyMachines(solanaCluster);
  await getAllBuyCandyMachines(solanaCluster);
  await getAllSummaries(solanaCluster);
  await getAllMintAddress(solanaCluster);
})();
