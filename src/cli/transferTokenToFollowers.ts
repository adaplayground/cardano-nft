import { TwitterApi } from 'twitter-api-v2';
import { twitterApiConf } from 'conf/twitter';
import { getTwitterFollowers, setTwitterFollowers } from 'store/nftFireStore';
import { TwitterFollower } from 'types';

const fetch = require('node-fetch');
const fs = require('fs');

const myTwitterId = '1467736667733708804';
// OAuth 1.0a (User context)
const userClient = new TwitterApi(twitterApiConf);

// OAuth2 (App-only context)
// Create a client with an already known bearer token
const appOnlyClient = new TwitterApi(twitterApiConf.bearerToken);

(async () => {
  const existingFollowers = ((await getTwitterFollowers()) ||
    []) as Array<TwitterFollower>;

  const newFollowers: Array<TwitterFollower> = [];
  existingFollowers.forEach(u => newFollowers.push(u));

  const myFollowers = await appOnlyClient.v2.followers(myTwitterId);

  for (const user of myFollowers.data) {
    const existingFollower = existingFollowers.find(
      u => u.twitterUser.id === user.id,
    );
    if (!existingFollower) {
      newFollowers.push({
        transferred: false,
        userPublicKey: '',
        twitterUser: user,
        registered: false,
      });
      console.log(user);
    }
  }
  console.log('Saving followers');
  await setTwitterFollowers(newFollowers);
})();
