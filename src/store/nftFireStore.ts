import { initializeApp } from 'firebase/app';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  runTransaction,
  setDoc,
  where,
} from 'firebase/firestore';
import { firebaseConfig } from 'conf/firebase';
import {
  ApplicationConfType,

} from 'types';
import { dateString } from "utils/helpers";


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const fireStore = getFirestore();
const diyMintCollection = 'DiyMint';
const createCandyMachineCollection = 'CreateCandyMachine';
const availableCandyMachineCollection = 'AvailableCandyMachine';
const buyCandyMachineCollection = 'BuyCandyMachine';
const summaryCollection = 'Summary';
const twitterCollection = 'Twitter';
const imageMetaSummaryCollection = 'ImageMetaSummary';
const imageMetaCollection = 'ImageMeta';
const applicationConfCollection = 'ApplicationConf';
const cnftCollection = 'Cnft';
const cnftSummaryCollection = 'CnftSummary';

const tokenCollection = 'Token';
const logCollection = 'Log';
const emailCollection = 'Email';
const emailNotificationCollection = 'mail';

const clearSummaryLock = async (solanaCluster: string, category: string) => {
  const sfDocRef = doc(
    fireStore,
    summaryCollection,
    `${solanaCluster}_${category}`,
  );
  await setDoc(sfDocRef, { locked: false, solanaCluster });
};

const setSummaryLock = async (solanaCluster: string, category: string) => {
  const sfDocRef = doc(
    fireStore,
    summaryCollection,
    `${solanaCluster}_${category}`,
  );
  let ret = false;
  let exist = true;
  try {
    await runTransaction(fireStore, async transaction => {
      let sfDoc = await transaction.get(sfDocRef);

      if (!sfDoc.exists()) {
        await setDoc(sfDocRef, { locked: true, solanaCluster });
        ret = true;
        exist = false;
      } else {
        if (exist) {
          sfDoc = await transaction.get(sfDocRef);
          const newPop = sfDoc.data()!.locked;
          if (newPop === false) {
            transaction.update(sfDocRef, { locked: true, solanaCluster });
            ret = true;
          } else {
            ret = false;
          }
        }
      }
    });
    return ret;
  } catch (e) {
    // This will be a "population is too big" error.
    return false;
  }
};

const getAllRecords = async (solanaCluster: string, collectionName: string) => {
  const records: Array<any> = [];
  const q = query(
    collection(fireStore, collectionName),
    where('solanaCluster', '==', solanaCluster),
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    records.push(doc.data());
  });
  return records;
};



const getApplicationConfInfo = async () => {
  const sfDocRef = doc(fireStore, applicationConfCollection, 'AppConf');
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data();
  }
  return null;
};

const setApplicationConfInfo = async (summary: ApplicationConfType) => {
  const sfDocRef = doc(fireStore, applicationConfCollection, 'AppConf');
  await setDoc(sfDocRef, summary);
};


const restoreCollection = async (
  documentId: string,
  collectionName: string,
  mintData: any,
) => {
  try {
    await setDoc(doc(fireStore, collectionName, documentId), mintData);
  } catch (e) {
    console.log(e);
  }
};

const saveEmail = async (
  firstName: string,
  lastName: string,
  email: string,
  message: string,
) => {
  try {
    const date = dateString(new Date());
    const documentId = `${date}_${email}`;
    await setDoc(doc(fireStore, emailCollection, documentId), {
      firstName,
      lastName,
      email,
      message,
    });
    return true;
  } catch {
    return false;
  }
};


export {
  firebaseApp,
  fireStore,
  diyMintCollection,
  createCandyMachineCollection,
  availableCandyMachineCollection,
  buyCandyMachineCollection,
  summaryCollection,
  saveEmail,
  clearSummaryLock,
  setSummaryLock,

  restoreCollection,

  getApplicationConfInfo,
  setApplicationConfInfo,

};
