import marvelCharacters from 'assets/marvel-characters.json';
import * as fs from 'fs';
import { createDirIfNotExist, sanitiseString } from 'cli/utils';

createDirIfNotExist('./marvel');
let metaDataTemplate = {
  name: '',
  symbol: 'MARVEL',
  image: 'image.png',

  properties: {
    files: [
      {
        uri: 'image.png',
        type: 'image/png',
      },
    ],
    category: 'image',
    creators: [
      {
        address: 'DYbrSmqCzPSBgcCp3rSL2kBUvXVCCPRBdfqKxoWGNE4B',
        share: 100,
      },
    ],
  },
  description: '',
  seller_fee_basis_points: 500,
  attributes: [],
  collection: {
    name: 'Marvel Characters',
    family: 'Marvel',
  },
};

marvelCharacters.forEach(character => {
  const fileName = `./marvel/${character.Id}_fantastic.json`;
  let meta = JSON.parse(JSON.stringify(metaDataTemplate));
  meta.name = sanitiseString(character.Name).substring(0, 25);
  meta.description = sanitiseString(character.Description);
  let price;
  price = (character.Comics + character.Series + character.Stories) / 1000.0;
  if (price < 0.01) {
    price = 0.01;
  }
  meta.price = price;
  meta.attributes.push({
    trait_type: 'Comics',
    value: character.Comics,
  });
  meta.attributes.push({
    trait_type: 'Series',
    value: character.Series,
  });
  meta.attributes.push({
    trait_type: 'Stories',
    value: character.Stories,
  });
  meta.attributes.push({
    trait_type: 'Id',
    value: character.Id,
  });
  meta.attributes.push({
    trait_type: 'Modified',
    value: character.Modified,
  });
  fs.writeFileSync(fileName, JSON.stringify(meta, null, 4));
  console.log(character);
});
