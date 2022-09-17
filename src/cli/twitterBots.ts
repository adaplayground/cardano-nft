import { TwitterApi } from 'twitter-api-v2';
import { twitterApiConf } from 'conf/twitter';
import { ImageMetaInfoType, TwitterTweetType, TwitterUserType } from 'types';
import {
  getImageMetaInfos,
  getImageMetaSummaryInfo,
  getTwitterFollowing,
  getTwitterTweets,
  setTwitterFollowing,
  setTwitterTweets,
} from 'store/nftFireStore';
import { sleep } from 'cli/utils';

const fetch = require('node-fetch');
const fs = require('fs');

const myTwitterId = '1476746335403462657';
// OAuth 1.0a (User context)
const userClient = new TwitterApi(twitterApiConf);

// OAuth2 (App-only context)
// Create a client with an already known bearer token
const appOnlyClient = new TwitterApi(twitterApiConf.bearerToken);
const maxResult = 20;
const retweetLimit = 50;

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

  // const imageMetaSummary = await getImageMetaSummaryInfo();
  // if (imageMetaSummary) {
  //   const total = imageMetaSummary.count;
  //   const imageIndex = Math.round(Math.random() * (total - 5));
  //   const selectedImages: Array<ImageMetaInfoType> = await getImageMetaInfos(imageIndex, 2);
  //   let twitterImage: ImageMetaInfoType | null = null;
  //   if (selectedImages.length > 0) {
  //     twitterImage = selectedImages[0];
  //
  //
  //     const imageUrl = twitterImage.image;
  //     const res = await fetch(imageUrl);
  //     const arrayBuffer = await res.arrayBuffer();
  //     const buffer = Buffer.from(arrayBuffer);
  //     fs.writeFileSync(`./twitter-images/${twitterImage.assetId}.${twitterImage.type}`, buffer);
  //
  //     const mediaId = await appOnlyClient.v1.uploadMedia(`./twitter-images/${twitterImage.assetId}.${twitterImage.type}`);
  //     const text = `${twitterImage.name}
  //     ${twitterImage.description}
  //      #SolanaNFT #SolanaNFTPlayground  #NFT
  //     `;
  //
  //     await userClient.v2.tweet(text, {
  //       text: 'Solana NFT Playground allow DIY Mint NFT ,look at this :',
  //       media: { media_ids: [mediaId] },
  //     });
  //
  //   }
  // }

  const following = ((await getTwitterFollowing()) ||
    []) as Array<TwitterUserType>;
  const newFollowing: Array<TwitterUserType> = [];

  const retweets = ((await getTwitterTweets()) ||
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
  await setTwitterFollowing(newFollowing);
  await setTwitterTweets(newRetweets);
  console.log(`finished`);
})();
