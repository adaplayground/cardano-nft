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
  AvailableCandyMachineInfoType,
  BuyCandyMachineInfoType,
  CreateCandyMachineInfoType,
  DiyMintInfoType,
  EnvironmentSummaryInfoType,
  ImageMetaInfoType,
  ImageMetaSummaryInfoType,
  MailNotificationType,
  TwitterFollower,
  TwitterTweetType,
  TwitterUserType,
} from 'types';
import { dateString, formatDate, formatDateOnly } from 'metaplex/utils/helpers';

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

const getSummaryInfo = async (solanaCluster: string, category: string) => {
  const sfDocRef = doc(
    fireStore,
    summaryCollection,
    `${solanaCluster}_${category}_CandyMachines`,
  );
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data();
  }
  return null;
};

const setSummaryInfo = async (
  solanaCluster: string,
  category: string,
  summary: EnvironmentSummaryInfoType,
) => {
  const sfDocRef = doc(
    fireStore,
    summaryCollection,
    `${solanaCluster}_${category}_CandyMachines`,
  );
  await setDoc(sfDocRef, summary);
};

const getTwitterTweets = async () => {
  const currentDate = new Date();
  const date = formatDateOnly(currentDate);

  const sfDocRef = doc(fireStore, twitterCollection, date);
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data()['tweets'];
  }
  return null;
};

const setTwitterTweets = async (summary: Array<TwitterTweetType>) => {
  const currentDate = new Date();
  const date = formatDateOnly(currentDate);
  const sfDocRef = doc(fireStore, twitterCollection, date);
  await setDoc(sfDocRef, { tweets: summary });
};

const getTwitterFollowers = async () => {
  const sfDocRef = doc(fireStore, summaryCollection, 'TwitterFollowers');
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data()['followers'];
  }
  return null;
};

const setTwitterFollowers = async (summary: Array<TwitterFollower>) => {
  const sfDocRef = doc(fireStore, summaryCollection, 'TwitterFollowers');
  await setDoc(sfDocRef, { followers: summary });
};

const getTwitterAirdropUsers = async () => {
  const sfDocRef = doc(fireStore, summaryCollection, 'TwitterAirdropUsers');
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data()['users'];
  }
  return null;
};

const setTwitterAirdropUsers = async (summary: Array<TwitterFollower>) => {
  const sfDocRef = doc(fireStore, summaryCollection, 'TwitterAirdropUsers');
  await setDoc(sfDocRef, { users: summary });
};

const getTwitterFollowing = async () => {
  const sfDocRef = doc(fireStore, summaryCollection, 'TwitterFollowing');
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data()['following'];
  }
  return null;
};

const setTwitterFollowing = async (summary: Array<TwitterUserType>) => {
  const sfDocRef = doc(fireStore, summaryCollection, 'TwitterFollowing');
  await setDoc(sfDocRef, { following: summary });
};

const getTwitterTweetsWithName = async (name: string) => {
  const currentDate = new Date();
  const date = formatDateOnly(currentDate);

  const sfDocRef = doc(fireStore, twitterCollection, `${date}_${name}`);
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data()['tweets'];
  }
  return null;
};

const setTwitterTweetsWithName = async (
  summary: Array<TwitterTweetType>,
  name: string,
) => {
  const currentDate = new Date();
  const date = formatDateOnly(currentDate);
  const sfDocRef = doc(fireStore, twitterCollection, `${date}_${name}`);
  await setDoc(sfDocRef, { tweets: summary });
};

const getTwitterFollowingWithName = async (name: string) => {
  const sfDocRef = doc(
    fireStore,
    summaryCollection,
    `${name}_TwitterFollowing`,
  );
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data()['following'];
  }
  return null;
};

const setTwitterFollowingWithName = async (
  summary: Array<TwitterUserType>,
  name: string,
) => {
  const sfDocRef = doc(
    fireStore,
    summaryCollection,
    `${name}_TwitterFollowing`,
  );
  await setDoc(sfDocRef, { following: summary });
};

const getImageMetaSummaryInfo = async () => {
  const sfDocRef = doc(
    fireStore,
    imageMetaSummaryCollection,
    'ImageMetaSummary',
  );
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data();
  }
  return null;
};

const setImageMetaSummaryInfo = async (summary: ImageMetaSummaryInfoType) => {
  const sfDocRef = doc(
    fireStore,
    imageMetaSummaryCollection,
    'ImageMetaSummary',
  );
  await setDoc(sfDocRef, summary);
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

const getTokenList = async (solanaCluster: string, category: string) => {
  const sfDocRef = doc(
    fireStore,
    tokenCollection,
    `${solanaCluster}_${category}_Tokens`,
  );
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data();
  }
  return null;
};

const setTokenList = async (
  solanaCluster: string,
  category: string,
  tokens: any,
) => {
  const sfDocRef = doc(
    fireStore,
    tokenCollection,
    `${solanaCluster}_${category}_Tokens`,
  );
  await setDoc(sfDocRef, tokens);
};

const getImageMetaInfos = async (
  startIndex: number,
  count: number,
): Promise<Array<ImageMetaInfoType>> => {
  try {
    const imageMetaInfoRef = collection(fireStore, imageMetaCollection);
    const imageArray: Array<ImageMetaInfoType> = [];
    const q1 = query(
      imageMetaInfoRef,
      where('imageIndex', '>=', startIndex),
      where('imageIndex', '<=', startIndex + count),
    );
    const querySnapshot1 = await getDocs(q1);
    querySnapshot1.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });

    return imageArray;
  } catch {
    return [];
  }
};

const searchImageMetaInfo = async (
  search: string,
  count: number,
): Promise<Array<ImageMetaInfoType>> => {
  try {
    const imageMetaInfoRef = collection(fireStore, imageMetaCollection);
    const imageArray: Array<ImageMetaInfoType> = [];
    const q0 = query(
      imageMetaInfoRef,
      where('description', '>=', search),
      where('description', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot0 = await getDocs(q0);
    querySnapshot0.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });
    const q1 = query(
      imageMetaInfoRef,
      where('name', '>=', search),
      where('name', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot1 = await getDocs(q1);
    querySnapshot1.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });
    const q2 = query(
      imageMetaInfoRef,
      where('searchTerm', '>=', search),
      where('searchTerm', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot2 = await getDocs(q2);
    querySnapshot2.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });

    const q3 = query(
      imageMetaInfoRef,
      where('searchTerm1', '>=', search),
      where('searchTerm1', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot3 = await getDocs(q3);
    querySnapshot3.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });

    const q4 = query(
      imageMetaInfoRef,
      where('searchTerm2', '>=', search),
      where('searchTerm2', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot4 = await getDocs(q4);
    querySnapshot4.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });

    const q5 = query(
      imageMetaInfoRef,
      where('searchTerm3', '>=', search),
      where('searchTerm3', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot5 = await getDocs(q5);
    querySnapshot5.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });

    const q6 = query(
      imageMetaInfoRef,
      where('searchTerm4', '>=', search),
      where('searchTerm4', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot6 = await getDocs(q6);
    querySnapshot6.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });

    const q7 = query(
      imageMetaInfoRef,
      where('searchTerm5', '>=', search),
      where('searchTerm5', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot7 = await getDocs(q7);
    querySnapshot7.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });

    const q8 = query(
      imageMetaInfoRef,
      where('searchTerm6', '>=', search),
      where('searchTerm6', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot8 = await getDocs(q8);
    querySnapshot8.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });

    const q9 = query(
      imageMetaInfoRef,
      where('searchTerm7', '>=', search),
      where('searchTerm7', '<=', search + '\uf8ff'),
      limit(count),
    );
    const querySnapshot9 = await getDocs(q9);
    querySnapshot9.forEach(doc => {
      // @ts-ignore
      const imageMeta: ImageMetaInfoType = doc.data();
      if (imageArray.findIndex(i => i.assetId === imageMeta.assetId) < 0) {
        imageArray.push(imageMeta);
      }
    });

    return imageArray;
  } catch {
    return [];
  }
};

const saveCnftPage = async (page: number, data: any) => {
  try {
    const documentId = `${page}.json`;
    await setDoc(doc(fireStore, cnftCollection, documentId), data);
    return true;
  } catch {
    return false;
  }
};

const getCnftSummaryInfo = async () => {
  const sfDocRef = doc(fireStore, cnftSummaryCollection, 'Summary');
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data();
  }
  return null;
};

const setCnftSummaryInfo = async (page: number) => {
  const sfDocRef = doc(fireStore, cnftSummaryCollection, 'Summary');
  await setDoc(sfDocRef, { count: page });
};

const getCnftCrawlerSummaryInfo = async () => {
  const sfDocRef = doc(fireStore, cnftSummaryCollection, 'CrawlerSummary');
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data();
  }
  return null;
};

const setCnftCrawlerSummaryInfo = async (page: number) => {
  const sfDocRef = doc(fireStore, cnftSummaryCollection, 'CrawlerSummary');
  await setDoc(sfDocRef, { count: page });
};

const saveImageMetaInfo = async (imageMetaInfo: ImageMetaInfoType) => {
  try {
    const imageIndexStr = String(imageMetaInfo.imageIndex).padStart(10, '0');
    const documentId = `${imageIndexStr}_${imageMetaInfo.assetId}`;
    await setDoc(
      doc(fireStore, imageMetaCollection, documentId),
      imageMetaInfo,
    );
    return true;
  } catch {
    return false;
  }
};

const saveLog = async (logLevel: string, message: Array<any>) => {
  try {
    const currentDate = new Date();
    const date = dateString(currentDate);
    const documentId = `${date}_log`;
    await setDoc(doc(fireStore, logCollection, documentId), {
      date: formatDate(currentDate),
      logLevel,
      message,
    });
    return true;
  } catch {
    return false;
  }
};

const sendEmailNotification = async (
  address: string,
  message: MailNotificationType,
) => {
  try {
    const date = dateString(new Date());
    const documentId = `${date}_notification`;
    await setDoc(doc(fireStore, emailNotificationCollection, documentId), {
      to: [address],
      message,
    });
    return true;
  } catch {
    return false;
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

const readCandyMachineInfo = async (documentId: string) => {
  const sfDocRef = doc(fireStore, createCandyMachineCollection, documentId);
  let sfDoc = await getDoc(sfDocRef);
  if (sfDoc.exists()) {
    return sfDoc.data();
  }
  return null;
};

const saveCreateCandyMachine = async (
  currentDate: string,
  documentId: string,
  createCandyMachineInfo: CreateCandyMachineInfoType,
  availableCandyMachineInfo: AvailableCandyMachineInfoType,
) => {
  try {
    await setDoc(doc(fireStore, createCandyMachineCollection, documentId), {
      creatorPublicKey: createCandyMachineInfo.creatorPublicKey,
      treasurePublicKey: createCandyMachineInfo.treasurePublicKey,
      success: createCandyMachineInfo.success,
      metaData: createCandyMachineInfo.metaData,
      price: createCandyMachineInfo.price,
      goLiveDate: createCandyMachineInfo.goLiveDate,
      arweaveLink: createCandyMachineInfo.arweaveLink,
      solanaCluster: createCandyMachineInfo.solanaCluster,
      data: JSON.parse(JSON.stringify(createCandyMachineInfo.candyMachine)),
      date: currentDate,
      sha256: createCandyMachineInfo.sha256,
    });
    await setDoc(doc(fireStore, availableCandyMachineCollection, documentId), {
      creatorPublicKey: availableCandyMachineInfo.creatorPublicKey,
      treasurePublicKey: availableCandyMachineInfo.treasurePublicKey,
      success: availableCandyMachineInfo.success,
      metaData: availableCandyMachineInfo.metaData,
      price: availableCandyMachineInfo.price,
      goLiveDate: availableCandyMachineInfo.goLiveDate,
      arweaveLink: availableCandyMachineInfo.arweaveLink,
      solanaCluster: availableCandyMachineInfo.solanaCluster,
      name: availableCandyMachineInfo.name,
      description: availableCandyMachineInfo.description,
      date: currentDate,
      sha256: availableCandyMachineInfo.sha256,
    });
  } catch (e) {
    await setDoc(doc(fireStore, createCandyMachineCollection, documentId), {
      treasurePublicKey: createCandyMachineInfo.treasurePublicKey,
      success: false,
      solanaCluster: createCandyMachineInfo.solanaCluster,
      // @ts-ignore
      error: e.toString(),
      date: currentDate,
      sha256: createCandyMachineInfo.sha256,
    });
  }
};

const saveBuyCandyMachine = async (mintData: BuyCandyMachineInfoType) => {
  const currentDate = dateString(new Date());
  try {
    await setDoc(
      doc(
        fireStore,
        buyCandyMachineCollection,
        `env_${mintData.solanaCluster}_date_${currentDate}_sha256_${
          mintData.sha256
        }_user_${mintData.userPublicKey!}`,
      ),
      {
        userPublicKey: mintData.userPublicKey,
        success: mintData.success,
        solanaCluster: mintData.solanaCluster,
        mintData: JSON.parse(JSON.stringify(mintData)),
        cacheStorage: JSON.parse(JSON.stringify(mintData.cacheStorage)),
        date: currentDate,
        sha256: mintData.sha256,
        category: mintData.category,
        treasurerPublicKey: mintData.treasurerPublicKey,
      },
    );
  } catch (e) {
    await setDoc(
      doc(
        fireStore,
        buyCandyMachineCollection,
        `env_${mintData.solanaCluster}_date_${currentDate}_sha256_${
          mintData.sha256
        }_user_${mintData.userPublicKey!}`,
      ),
      {
        userPublicKey: mintData.userPublicKey,
        success: false,
        solanaCluster: mintData.solanaCluster,
        mintData: JSON.parse(JSON.stringify(mintData)),
        cacheStorage: JSON.parse(JSON.stringify(mintData.cacheStorage)),
        // @ts-ignore
        error: e.toString(),
        date: currentDate,
        sha256: mintData.sha256,
        category: mintData.category,
        treasurerPublicKey: mintData.treasurerPublicKey,
      },
    );
  }
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

const saveDiyMint = async (mintData: DiyMintInfoType) => {
  const currentDate = dateString(new Date());
  try {
    await setDoc(
      doc(
        fireStore,
        diyMintCollection,
        `env_${mintData.solanaCluster}_date_${currentDate}_sha256_${
          mintData.sha256
        }_user_${mintData.userPublicKey!}`,
      ),
      {
        userPublicKey: mintData.userPublicKey,
        success: mintData.success,
        solanaCluster: mintData.solanaCluster,
        data: JSON.parse(JSON.stringify(mintData)),
        date: currentDate,
        sha256: mintData.sha256,
      },
    );
  } catch (e) {
    await setDoc(
      doc(
        fireStore,
        diyMintCollection,
        `env_${mintData.solanaCluster}_date_${currentDate}_sha256_${
          mintData.sha256
        }_user_${mintData.userPublicKey!}`,
      ),
      {
        userPublicKey: mintData.userPublicKey,
        success: false,
        solanaCluster: mintData.solanaCluster,
        date: currentDate,
        sha256: mintData.sha256,
        // @ts-ignore
        data: e.toString(),
      },
    );
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
  tokenCollection,
  getImageMetaInfos,
  searchImageMetaInfo,
  sendEmailNotification,
  readCandyMachineInfo,
  getSummaryInfo,
  setSummaryInfo,
  getImageMetaSummaryInfo,
  setImageMetaSummaryInfo,
  saveCreateCandyMachine,
  saveDiyMint,
  clearSummaryLock,
  setSummaryLock,
  saveEmail,
  saveBuyCandyMachine,
  saveLog,
  restoreCollection,
  getTokenList,
  setTokenList,
  saveImageMetaInfo,
  getApplicationConfInfo,
  setApplicationConfInfo,
  saveCnftPage,
  setCnftSummaryInfo,
  getCnftSummaryInfo,
  setCnftCrawlerSummaryInfo,
  getCnftCrawlerSummaryInfo,
  getTwitterFollowing,
  setTwitterFollowing,
  setTwitterTweets,
  getTwitterTweets,
  getTwitterFollowingWithName,
  setTwitterFollowingWithName,
  setTwitterTweetsWithName,
  getTwitterTweetsWithName,
  getTwitterFollowers,
  setTwitterFollowers,
  getTwitterAirdropUsers,
  setTwitterAirdropUsers,
};
