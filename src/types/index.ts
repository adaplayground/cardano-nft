import { RootState } from './RootState';

export type MetaAttributeType = {
  trait_type: string;
  value: string;
};

export type MetaPropertyFileType = {
  uri: string;
  type: string;
  url: string;
};

export type MetaPropertyCreatorType = {
  address: string;
  share: number;
};

export type MetaPropertyType = {
  files: Array<MetaPropertyFileType>;
  category: string;
  creators?: Array<MetaPropertyCreatorType>;
};

export type MetaCollectionType = {
  name: string;
  family: string;
};

export type MetaDataType = {
  name: string;
  symbol?: string;
  description?: string;
  authenticated?: boolean;
  mintAddress?: string;
  image: string;
  price?: number;
  seller_fee_basis_points?: number;
  attributes?: Array<MetaAttributeType>;
  properties?: MetaPropertyType;
  collection?: MetaCollectionType;
};

export type DiyMintInfoType = {
  userPublicKey?: string;
  treasurerPublicKey?: string;
  success: boolean;
  metaAccount?: string;
  arweaveLink?: string;
  cacheStorage: any;
  solanaCluster: string;
  sha256: string;
  metaData?: any;
};

export type CreateCandyMachineInfoType = {
  creatorPublicKey?: string;
  success: boolean;
  arweaveLink?: string;
  sha256: string;
  treasurePublicKey?: string;
  metaData?: any;
  goLiveDate: string;
  price: number;
  solanaCluster: string;
  candyMachineAddress: string;
  candyMachine: any;
  maxSupply: number;
  category?: string;
};

export type AvailableCandyMachineInfoType = {
  creatorPublicKey?: string;
  success: boolean;
  arweaveLink?: string;
  sha256: string;
  treasurePublicKey?: string;
  metaData?: any;
  goLiveDate: string;
  price: number;
  solanaCluster: string;
  candyMachineAddress: string;
  name: string;
  description: string;
  available: boolean;
  maxSupply: number;
  category?: string;
};

export type BuyCandyMachineInfoType = {
  userPublicKey?: string;
  treasurerPublicKey?: string;
  success: boolean;
  metaAccount?: string;
  arweaveLink?: string;
  cacheStorage: any;
  metaData?: any;
  price: number;
  solanaCluster: string;
  category?: string;
  sha256: string;
};

export type CandyMachineSummaryInfoType = {
  documentId: string;
  name: string;
  description: string;
  price: number;
  available: boolean;
  sha256?: string;
  metaLink: string;
  category?: string;
};

export type EnvironmentSummaryInfoType = {
  count: number;
  category?: string;
  solanaCluster: string;
  summaries: Array<CandyMachineSummaryInfoType>;
};

export type AboutMeType = {
  title: string;
  content: string;
  subTitle: string;
  date: string;
  current: boolean;
  color: string;
};

export type FaqItemType = {
  title: string;
  content: string;
  fullWidth: boolean;
};

export type FaqSectionType = {
  title: string;
  items: Array<FaqItemType>;
};

export type MarketOfferType = {
  title: string;
  content: string;
};

export type MailNotificationType = {
  subject: string;
  text: string;
};

export type ImageSizeType = {
  width: number;
  height: number;
  type: string;
  imageUrl: string;
  sha256?: string;
};

export type ImageMetaInfoType = {
  name: string;
  description: string;
  image: string;
  imageIndex: number;
  price: number;
  assetId: string;
  searchTerm: string;
  width?: number;
  height?: number;
  type?: string;
  hasThumbnail?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  searchTerm1?: string;
  searchTerm2?: string;
  searchTerm3?: string;
  searchTerm4?: string;
  searchTerm5?: string;
  searchTerm6?: string;
  searchTerm7?: string;
  sha256?: string;
  attributes?: Array<MetaAttributeType>;
};

export type ImageMetaSummaryInfoType = {
  count: number;
};

export type ApplicationConfType = {
  themeName: string;
};

export type TwitterUserType = {
  id?: string;
  name?: string;
  username: string;
  description?: string;
};

export type TwitterMetricType = {
  retweet_count: number;
  reply_count: number;
  like_count: number;
  quote_count: number;
};

export type TwitterTweetType = {
  id: string;
  public_metrics: TwitterMetricType;
  author_id: string;
  text?: string;
};

export type TwitterFollower = {
  twitterUser: TwitterUserType;
  userPublicKey?: string;
  transferred?: boolean;
  registered?: boolean;
};

export type { RootState };
