import fetch from 'node-fetch';
import { createDirIfNotExist, sleep } from 'cli/utils';
import fs from 'fs';

const searchRequest = page => {
  return {
    search: '',
    types: ['listing', 'auction', 'offer'],

    page: page,
    verified: true,
    nsfw: false,
    sold: false,
  };
};

const dirName = 'cnft';
createDirIfNotExist(dirName);

const downloadPage = async page => {
  const timeDelay = Math.random() * (2 - 0.1) + 0.1;
  console.log(`${page} --> Download page ${page} sleep ${timeDelay} seconds`);
  await sleep(1000 * timeDelay);
  const bodyContent = searchRequest(page);
  const response = await fetch('https://api.cnft.io/market/listings', {
    method: 'POST',
    body: JSON.stringify(bodyContent),
    headers: { 'Content-Type': 'application/json' },
  });
  const body = await response.text();
  const data = JSON.stringify(JSON.parse(body), null, 2);
  fs.writeFileSync(`${dirName}/${page}.json`, data);
  console.log(`${page} --> Page ${page} downloaded`);
};

(async () => {
  for (let i = 16667; i < 17200; i++) {
    await downloadPage(i);
  }
})();
