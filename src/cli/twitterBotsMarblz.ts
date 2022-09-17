import { TwitterApi } from 'twitter-api-v2';

import { TwitterTweetType, TwitterUserType } from 'types';
import {
  getTwitterFollowingWithName,
  getTwitterTweetsWithName,
  setTwitterFollowingWithName,
  setTwitterTweetsWithName,
} from 'store/nftFireStore';
import { sleep } from 'cli/utils';

export const twitterApiConf = {
  appKey: 'o5dqT978PvSjp2Zh0pt7tkrB4',
  appSecret: 'xUH6Ad4iyvB2CNyn3I903YPcTLytmXmZcZjOLQ8YBvCzgeC1tL',
  bearerToken:
    'AAAAAAAAAAAAAAAAAAAAAFVFWwEAAAAAQjcS3gGG9bc4cFKuctTZGv%2FMD9A%3DlqKIwjs60lP1nUEMfUZe1dy8gmuRMzKq1GxuH1EbKEv2lpFuks',
  accessToken: '1468743952903782401-WS5nIKhG9dwoQchylBc3MdLCc00tyq',
  accessSecret: '5hME6G2ytJBYspaMoCZPDFal2c0J5pwkMjvYWfqxMJUHF',
};

const name: string = 'Marblz';
const myTwitterId = '1468743952903782401';
// OAuth 1.0a (User context)
const userClient = new TwitterApi(twitterApiConf);

// OAuth2 (App-only context)
// Create a client with an already known bearer token
const appOnlyClient = new TwitterApi(twitterApiConf.bearerToken);
const maxResult = 20;
const retweetLimit = 10;

(async () => {
  const jsTweets = await appOnlyClient.v2.search(
    'Solana (nft OR  airdrop OR  blockchain OR Giveaway OR DAO OR Free)',
    {
      'media.fields': 'url',
      'tweet.fields': 'public_metrics',
      expansions: 'author_id',
      'user.fields': 'description',
    },
  );

  const following = ((await getTwitterFollowingWithName(name)) ||
    []) as Array<TwitterUserType>;
  const newFollowing: Array<TwitterUserType> = [];

  const retweets = ((await getTwitterTweetsWithName(name)) ||
    []) as Array<TwitterTweetType>;
  const newRetweets: Array<TwitterTweetType> = [];

  const tweets = await jsTweets.next(maxResult);
  const users = tweets.includes['users'] as Array<TwitterUserType>;
  if (following) {
    following.forEach(u => newFollowing.push(u));
  }

  if (retweets) {
    retweets.forEach(u => newRetweets.push(u));
  }
  for (const t of tweets) {
    const tweet = t as TwitterTweetType;
    if (tweet) {
      console.log(`checking tweet with id ${tweet.id}`);
      if (retweets.findIndex(r => r.id === tweet.id) < 0) {
        if (
          tweet.public_metrics.quote_count >= retweetLimit ||
          tweet.public_metrics.like_count >= retweetLimit ||
          tweet.public_metrics.reply_count >= retweetLimit ||
          tweet.public_metrics.retweet_count >= retweetLimit
        ) {
          const user = users.find(u => u.id === tweet.author_id);
          if (user) {
            if (following.findIndex(f => f.id === user.id) < 0) {
              newFollowing.push(user);
              const timeDelay = Math.random() * (60 - 0.1) + 0.1;
              console.log(
                `new retweet from user ${user.username} with id ${tweet.id} sleeping ${timeDelay} seconds to follow user`,
              );
              await sleep(1000 * timeDelay);
              await userClient.v2.follow(myTwitterId, user.id);
            }
          }
          newRetweets.push(tweet);
          const timeDelay = Math.random() * (120 - 0.1) + 0.1;
          console.log(
            `new retweet from user ${user.username} with id ${tweet.id} sleeping ${timeDelay} seconds to retweet`,
          );
          await sleep(1000 * timeDelay);

          await userClient.v2.like(myTwitterId, tweet.id);
          await userClient.v2.retweet(myTwitterId, tweet.id);
        }
      }
    }
  }
  console.log(`saving results`);
  await setTwitterFollowingWithName(newFollowing, name);
  await setTwitterTweetsWithName(newRetweets, name);
  console.log(`finished`);
})();
