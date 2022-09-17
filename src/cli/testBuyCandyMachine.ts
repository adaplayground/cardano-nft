import { buyerBuyNftFromCandyMachine } from 'metaplex/candy-machine';
import buyer1Keypair from '../assets/tokens/buyer1.json';

// @ts-ignore
import cacheStorage from 'cli/firestore/devnet/CreateCandyMachine/env_devnet_date_29_10_2021_13_43_42_773_sha256_e546caf2f701c5a1ee3641194422d4632a5f29ed8d002f18997df8178d9f894c_user_DYbrSmqCzPSBgcCp3rSL2kBUvXVCCPRBdfqKxoWGNE4B.json';
import { loadWalletKey } from 'metaplex/candy-machine/actions/accounts';
const env = 'devnet';
const walletKeyPair = loadWalletKey(buyer1Keypair);
(async () => {
  const cacheContent = await buyerBuyNftFromCandyMachine(
    walletKeyPair,
    env,
    cacheStorage.data,
    status => {
      console.log(status);
    },
  );

  console.log(cacheContent);
})();
