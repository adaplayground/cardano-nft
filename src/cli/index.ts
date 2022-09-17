import {
  clusterApiUrl,
  Connection,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
} from '@solana/web3.js';

import payerKeypair from '../assets/tokens/payer.json';
import creatorKeypair from '../assets/tokens/creator.json';
import treasurerKeypair from '../assets/tokens/treasurer.json';
import buyer1Keypair from '../assets/tokens/buyer1.json';
import { loadWalletKey } from '../metaplex/candy-machine/actions/accounts';
import {
  getSummaryInfo,
  setSummaryInfo,
  setSummaryLock,
} from 'store/nftFireStore';
import { program } from 'commander';
import { sanitiseString } from 'cli/utils';
// import candyData from './firestore/devnet/CreateCandyMachine/env_devnet_date_27_10_2021_21_15_sha256_bc38f7b7f9e7ecd14f04d4b100d3cf0eae4f219906463dadd3e30886d92d6d55_user_4iqiahYMy2o317xfJNFpDu6wzgDXeJv82nGhPDDv62sQ.json';
// import { buyerBuyNftFromCandyMachine } from 'candy-machine';
//

const hello = 'Zombie (Simon Garth)';
console.log(sanitiseString(hello));
