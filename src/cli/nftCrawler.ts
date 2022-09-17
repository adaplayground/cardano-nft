import fetch from 'node-fetch';
import { createDirIfNotExist, sleep } from 'cli/utils';
import fs from 'fs';

import {
  getCnftCrawlerSummaryInfo,
  getImageMetaSummaryInfo,
  saveImageMetaInfo,
  setCnftCrawlerSummaryInfo,
  setImageMetaSummaryInfo,
} from 'store/nftFireStore';

import { ImageMetaInfoType, ImageSizeType } from 'types';
import glob = require('glob');
import sha256 from 'crypto-js/sha256';
import { sanitiseString } from 'metaplex/utils/helpers';

const pageLimit = 0;
const batchSize = 5;

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

const cnftDirName = 'cnft';

const sharp = require('sharp');
const admin = require('firebase-admin');
const serviceAccount = require('../conf/solana-nft-io-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const storage = admin.storage();

const bucket = storage.bucket('solana-nft-io-thumbnails');
const probe = require('probe-image-size');
let imageIndex = 0;

const filteredList = [
  'copyright',
  'url',
  'twitter',
  'web',
  'linked',
  'id',
  'website',
  'cnftcon',
  'by ambrus, 2021, represented by suite gallery berlin',
  'art by bubblegoblin for the shark auctions',
  'thank you from yasen',
  'sponsored by',
  'novellia_json',
  'addr',
  'signatures',
  'cryp7ocr3ations',
  'mint',
  'creator',
  'link',
  'release date',
  'social',
  'possible answers',
  'policy',
  'artist',
  'remixed',
  'nsfw',
  'if you are in vr click here',
  'featured',
  '256hash',
  'arweave',
  'date',
  'signed by',
  'homepage',
  'ipfs',
  'royalties',
  'unique nft no',
  'cnft',
  'license',
  'saved by the',
  'school is out for the',
  'nft set',
  'nft version',
  'ada coins',
  'discord',
  'facebook',
  'instagram',
  'media',
  'message from the 100 origins',
  ':',
  '?',
  'e51b58efd8a2df14fc33dea74a10e6daa346e645f0785cfb129b6556',
  'hash',
  'bb424d23d4544d61c3def2ccee7ab6beede90e8216147bd09df36f89',
  'futuristicinspace',
  'b000e9f3994de3226577b4d61280994e53c07948c8839d628f4a425a',
  '/',
  'f4988f549728dc76b58d7677849443caf6e5385dc67e6c25f6aa901e',
  'twtiter',
  'signed',
  'of',
  '.',
  '-',
  'cardano',
  '[',
  'about us',
  'named by',
  'created with',
  '_',
  'ref',
  'limited edition',
  '#',
  '(',
  'sha256',
  'royalty',
  'logo',
  'gif',
  'coin',
  'original unsig',
  'special thanks to',
  'token details',
  'vendingmachine',
  'artwork without footer',
  'mp3',
  'mp4',
  'www',
  'print or wallpaper',
  'twiter',
  ',',
  'inspiration original work',
  'leafs by josh jaypegman',
  'music by',
  'made by',
  'thank you',
  'tweet',
  'about 2',
  'email',
  'count',
  'verify authenticity',
  'qty',
  'quantity',
  'project',
  'author',
  'src',
];

const getNextImageId = () => {
  imageIndex += 1;
  return imageIndex;
};

const needFilter = (key: string) => {
  if (key) {
    let ret = false;
    let firstChar = key[0].toLowerCase();
    if (!firstChar.match(/^[a-z]+$/)) {
      return true;
    }
    if (key.length == 56) return true;
    for (let i = 0; i < filteredList.length; i++) {
      if (key.toLowerCase().indexOf(filteredList[i]) >= 0) {
        ret = true;
        break;
      }
    }

    return ret;
  }
  return true;
};

const dirName = 'meta-info';
createDirIfNotExist(dirName);
const cnftFolder = '../../../nft-media';

const metaAttrsRaw = fs.readFileSync(`${cnftFolder}/metaAttrs.json`);
// @ts-ignore
let metaAttrs = JSON.parse(metaAttrsRaw);

const addAttribute = (
  imageMetaInfoType: ImageMetaInfoType,
  key: string,
  value: string | null,
) => {
  if (!needFilter(key) && value) {
    imageMetaInfoType.attributes.push({
      trait_type: key,
      value: value,
    });
  }
};

const setImageSize = (imageMetaInfoType: ImageMetaInfoType) => {
  let imageSize: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' = 'small';
  if (imageMetaInfoType.width < 256 || imageMetaInfoType.height < 256) {
    imageSize = 'small';
  } else if (imageMetaInfoType.width < 512 || imageMetaInfoType.height < 512) {
    imageSize = 'medium';
  } else if (
    imageMetaInfoType.width < 1024 ||
    imageMetaInfoType.height < 1024
  ) {
    imageSize = 'large';
  } else if (
    imageMetaInfoType.width < 4096 ||
    imageMetaInfoType.height < 4096
  ) {
    imageSize = 'xlarge';
  } else {
    imageSize = 'xxlarge';
  }
  imageMetaInfoType.size = imageSize;
};

const getImageHash = async (
  imageMetaInfo: ImageMetaInfoType,
): Promise<string> => {
  const ipfsUrl: string = imageMetaInfo.image;
  const timeDelay = Math.random() * (2 - 0.1) + 0.1;
  await sleep(1000 * timeDelay);

  try {
    console.log(`    -> Get hash for ${ipfsUrl}`);
    const response = await fetch(ipfsUrl);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    let imageBase64 = buffer.toString('base64');
    imageMetaInfo.hasThumbnail = false;
    try {
      if (imageMetaInfo.type.toLowerCase() !== 'gif') {
        const documentId = `${imageMetaInfo.assetId}.jpeg`;
        const imageFile = bucket.file(documentId);
        const newImageBuffer = await sharp(buffer)
          .resize(400, 400)
          .jpeg({ mozjpeg: true })
          .toBuffer();
        await imageFile.save(newImageBuffer, { public: true });
        imageMetaInfo.hasThumbnail = true;
        console.log(`    -> Thumbnail created for ${ipfsUrl}`);
      }
    } catch (e) {
      imageMetaInfo.hasThumbnail = false;
      console.log(`    -> Thumbnail failed for ${ipfsUrl}`);
    }

    const fileHash = sha256(imageBase64).toString();
    return fileHash;
  } catch (e) {
    console.log(`    -> error :${e}`);
  }
  return '';
};

const getImageDimension = async (imageUrl: string): Promise<ImageSizeType> => {
  const timeDelay = Math.random() * (2 - 0.1) + 0.1;
  await sleep(1000 * timeDelay);
  let ipfsUrl = imageUrl.replace('ipfs://', '').replace('ipfs/', '');
  try {
    if (imageUrl.startsWith('ipfs:')) {
      ipfsUrl = `https://ipfs.io/ipfs/${ipfsUrl}`;
      console.log(`    -> Get size for ${ipfsUrl}`);
      const dimension = await probe(ipfsUrl);
      return { ...dimension, imageUrl: ipfsUrl };
    }
  } catch (e) {
    console.log(`    -> error :${e}`);
  }
  return { width: 0, height: 0, type: 'png', imageUrl: ipfsUrl };
};

const updateSearchTerms = (
  imageMetaInfo: ImageMetaInfoType,
  searchTerms: Array<string>,
) => {
  const len = searchTerms.length;
  imageMetaInfo.searchTerm1 = '';
  imageMetaInfo.searchTerm2 = '';
  imageMetaInfo.searchTerm3 = '';
  imageMetaInfo.searchTerm4 = '';
  imageMetaInfo.searchTerm5 = '';
  if (imageMetaInfo.name) {
    imageMetaInfo.searchTerm6 = imageMetaInfo.name.toLowerCase();
  } else {
    imageMetaInfo.searchTerm6 = '';
  }
  if (imageMetaInfo.description) {
    imageMetaInfo.searchTerm7 = imageMetaInfo.description.toLowerCase();
  } else {
    imageMetaInfo.searchTerm7 = '';
  }
  if (len > 1) {
    imageMetaInfo.searchTerm1 = sanitiseString(searchTerms[1])
      .trim()
      .toLowerCase();
  }
  if (len > 2) {
    imageMetaInfo.searchTerm2 = sanitiseString(searchTerms[2])
      .trim()
      .toLowerCase();
  }
  if (len > 3) {
    imageMetaInfo.searchTerm3 = sanitiseString(searchTerms[3])
      .trim()
      .toLowerCase();
  }
  if (len > 4) {
    imageMetaInfo.searchTerm4 = sanitiseString(searchTerms[4])
      .trim()
      .toLowerCase();
  }
  if (len > 5) {
    imageMetaInfo.searchTerm5 = sanitiseString(searchTerms[5])
      .trim()
      .toLowerCase();
  }
  if (len > 6) {
    imageMetaInfo.searchTerm6 = sanitiseString(searchTerms[6])
      .trim()
      .toLowerCase();
  }
  if (len > 7) {
    imageMetaInfo.searchTerm7 = sanitiseString(searchTerms[7])
      .trim()
      .toLowerCase();
  }
};

export const writeMetaInfo = async (file, index) => {
  console.log(`${index}->${file}`);

  const metaRaw = fs.readFileSync(file);
  // @ts-ignore
  let metaFileContent = JSON.parse(metaRaw);
  let results = metaFileContent['results'];
  if (results) {
    const count = results.length;
    for (let i = 0; i < count; i++) {
      const metaContent = results[i];
      if ('asset' in metaContent) {
        const imageMetaInfo: ImageMetaInfoType = {
          name: '',
          image: '',
          description: '',
          price: 0,
          assetId: '',
          searchTerm: '',
          attributes: [],
          imageIndex: 0,
          hasThumbnail: false,
        };

        imageMetaInfo.price = metaContent['price'] || 0;

        const asset = metaContent.asset;
        imageMetaInfo.assetId = asset['assetId'] || '';

        if ('metadata' in asset) {
          const metaData = asset.metadata;
          if (metaData) {
            const keys = Object.keys(metaData);
            keys.forEach(key => {
              const keyword = key.toLowerCase().trim();
              if (keyword in metaAttrs) {
                if (Array.isArray(metaData[keyword])) {
                  metaData[keyword].forEach(a => {
                    const subKeys = Object.keys(a);
                    subKeys.forEach(subKey => {
                      if (typeof a[subKey] !== 'object') {
                        addAttribute(imageMetaInfo, subKey, a[subKey]);
                      }
                    });
                  });
                } else if (typeof metaData[keyword] === 'object') {
                  const subKeys = Object.keys(metaData[keyword]);
                  subKeys.forEach(subKey => {
                    if (typeof metaData[keyword][subKey] !== 'object') {
                      addAttribute(
                        imageMetaInfo,
                        subKey,
                        metaData[keyword][subKey],
                      );
                    }
                  });
                } else {
                  if (keyword === 'image') {
                    imageMetaInfo.image = metaData[keyword];
                  } else if (keyword === 'name') {
                    imageMetaInfo.name = metaData[keyword];
                  } else if (keyword === 'description') {
                    imageMetaInfo.description = metaData[keyword];
                  } else {
                    if (typeof metaData[keyword] !== 'object') {
                      addAttribute(imageMetaInfo, keyword, metaData[keyword]);
                    }
                  }
                }
              }
            });
          }
        }
        const searchTerm = metaContent['searchTerm'] || '';
        let searchTerms = searchTerm.split(' ') || [];
        searchTerms = searchTerms.slice(0, searchTerms.length - 2);
        const parsedSearchTerms: Array<string> = [];
        searchTerms.forEach(s => {
          const term = sanitiseString(s).trim().toLowerCase();
          if (term.length > 0) {
            parsedSearchTerms.push(term);
          }
        });
        updateSearchTerms(imageMetaInfo, parsedSearchTerms);
        imageMetaInfo.searchTerm = searchTerms.join(' ');

        if (imageMetaInfo.image) {
          const dimension = await getImageDimension(imageMetaInfo.image);

          if (dimension.width > 0 && dimension.height > 0) {
            imageMetaInfo.image = dimension.imageUrl;
            imageMetaInfo.width = dimension.width;
            imageMetaInfo.height = dimension.height;
            imageMetaInfo.type = dimension.type;
            imageMetaInfo.sha256 = await getImageHash(imageMetaInfo);
            setImageSize(imageMetaInfo);
            const newImageIndex = getNextImageId();
            imageMetaInfo.imageIndex = newImageIndex;
            await setImageMetaSummaryInfo({ count: newImageIndex });
            await saveImageMetaInfo(imageMetaInfo);
            const data = JSON.stringify(imageMetaInfo, null, 2);
            try {
              fs.writeFileSync(
                `${dirName}/${newImageIndex}-${imageMetaInfo.assetId}.json`,
                data,
              );
            } catch (e) {
              console.warn(`   --> Error write file ${e}`);
            }
          }
        }
      }
    }
  }
};
const transformCnft = async () => {
  let index = 0;
  const imageMetaSummary = await getImageMetaSummaryInfo();
  if (imageMetaSummary) {
    imageIndex = imageMetaSummary.count;
  }

  glob(`${cnftFolder}/cnft/*.json`, {}, async function (er, files) {
    if (files) {
      const total = files.length;
      let processed = 0;
      let batchFiles: Array<string> = [];
      for (const file of files) {
        try {
          processed += 1;
          if (processed < total && batchFiles.length < batchSize) {
            console.log(`process batch ${index} -> ${file}`);
            batchFiles.push(file);
          } else {
            batchFiles.map(async file => {
              await writeMetaInfo(file, index);
              fs.unlinkSync(file);
            });

            console.log(`process batch ${index} -> sleep ${180} seconds`);
            await sleep(1000 * 180);
            index += 1;
            batchFiles = [];
          }
        } catch {
          console.log('ignore error');
        }
      }
    }
  });
};

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
  const json = JSON.parse(body);
  const data = JSON.stringify(json, null, 2);
  fs.writeFileSync(`${cnftFolder}/${cnftDirName}/${page}.json`, data);
  console.log(`${page} --> Page ${page} downloaded`);
  return json && json['results'] && json['results'].length > 0;
};

(async () => {
  let startPage = 16667;
  let finalPage;
  const imageMetaCrawlerSummary = await getCnftCrawlerSummaryInfo();
  if (imageMetaCrawlerSummary) {
    startPage = imageMetaCrawlerSummary.count;
  }

  const imageMetaSummary = await getImageMetaSummaryInfo();
  if (imageMetaSummary) {
    imageIndex = imageMetaSummary.count;
  }

  const pages = [];

  for (finalPage = startPage; finalPage < startPage + pageLimit; finalPage++) {
    pages.push(finalPage);
  }
  for (const finalPage of pages) {
    const results = await downloadPage(finalPage);
    if (!results) {
      console.log(`Reach the end of page ${finalPage}`);
      break;
    }
  }

  await setCnftCrawlerSummaryInfo(finalPage);
  console.log(`Sleep ${3} seconds before processing`);
  await sleep(3000);
  await transformCnft();
})();
