import fs from 'fs';
import glob = require('glob');

const cnftFolder = './cnft-1';

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
];

const hasAttributes = meta =>
  meta['attributes'] || meta['tags'] || meta['features'] || meta['traits'];

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

(async () => {
  let index = 0;
  const attributes = {};
  const metaAttributes = {};
  const arrayAttributes = {};
  //const noAttributes:Array<string> =[];
  glob(`${cnftFolder}/*.json`, {}, function (er, files) {
    if (files) {
      files.forEach(async file => {
        index += 1;
        // console.log(`${index}:processing file ${file}`)
        const metaRaw = fs.readFileSync(file);
        // @ts-ignore
        let metaFileContent = JSON.parse(metaRaw);
        let results = metaFileContent['results'];
        results.forEach(r => {
          const metaContent = r;
          if ('asset' in metaContent) {
            const asset = metaContent.asset;
            const keys = Object.keys(asset);
            keys.forEach(key => {
              if (!(key in attributes)) {
                attributes[key] = file;
                console.log(attributes);
              }
            });

            if ('metadata' in asset) {
              const metaData = asset.metadata;
              if (metaData) {
                const keys = Object.keys(metaData);
                keys.forEach(key => {
                  const keyword = key.toLowerCase().trim();
                  if (!needFilter(keyword)) {
                    if (!(keyword in metaAttributes)) {
                      metaAttributes[keyword] = file;

                      const data = JSON.stringify(metaAttributes, null, 2);
                      fs.writeFileSync(`metaAttrs.json`, data);

                      if (Array.isArray(metaData[keyword])) {
                        if (!(keyword in arrayAttributes)) {
                          arrayAttributes[keyword] = file;
                          const data = JSON.stringify(arrayAttributes, null, 2);
                          fs.writeFileSync(`arrayAttrs.json`, data);
                        }
                      }
                    }
                  }
                });

                // if(!hasAttributes(metaData)){
                //   if(!noAttributes.includes(file)){
                //     noAttributes.push(file);
                //     const data = JSON.stringify(noAttributes, null, 2);
                //     fs.writeFileSync(`noAttributes.json`, data);
                //   }
                // }
              }
            }
          }
        });
      });
    }
  });
})();
