import ipfsCredentials from 'conf/ipfsCreds';
import { payerKeypair } from 'conf/payer';
import { treasurePublicKeys } from 'conf/treasures';
import image0 from 'assets/tokens/image0';
import { decryptString, encryptString } from 'metaplex/utils/helpers';

import {
  AvailableCandyMachineInfoType,
  CreateCandyMachineInfoType,
} from 'types';
import { creatorPublicKeys } from 'conf/creators';

import image0_meta from 'assets/tokens/0.json';

import sha256 from 'crypto-js/sha256';
import { saveCreateCandyMachine } from 'store/nftFireStore';
import { makeCandyMachine } from 'metaplex/candy-machine';
import { loadWalletKey } from 'metaplex/candy-machine/actions/accounts';
import { ipfsUpload } from 'metaplex/candy-machine/ipfs';

const solanaCluster = 'devnet';
const buffer = Buffer.from(image0, 'base64');
const image = '1009144_fantastic.png';
const manifestBuffer = Buffer.from(JSON.stringify(image0_meta));

(async () => {
  const link = await ipfsUpload(ipfsCredentials, image0, manifestBuffer);
  console.log(link);
})();
console.log(ipfsCredentials);
