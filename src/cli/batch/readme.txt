this folder is used for batch mint,
each mint has one pair of files, one is the image, one is the meta
both has the same file name, but with different suffix
image is always png format
meta has following mandatory fields:


{
  "name": "2",
  "price": 1.0,
  "description": "",
  "attributes": [
    {
      "trait_type": "background",
      "value": "blue"
    },
    {
      "trait_type": "eyes",
      "value": "star-eyes"
    },
    {
      "trait_type": "mouth",
      "value": "triangle-mouth"
    },
    {
      "trait_type": "face",
      "value": "teal-face"
    }
  ]
}


--------

the creator and collection fields will be added,
some extra attributes will be added too, like sha256 and date.


{
  "name": "2",
  "symbol": "",
  "image": "image.png",
  "price": 1.0,
  "properties": {
    "files": [
      {
        "uri": "image.png",
        "type": "image/png"
      }
    ],
    "category": "image",
    "creators": [
      {
        "address": "3b1Bz7UX3cG9MDH9jjMbMmdqwpS5dqUFfsTXJN1kgjdX",
        "share": 100
      }
    ]
  },
  "description": "",
  "seller_fee_basis_points": 500,
  "attributes": [
    {
      "trait_type": "background",
      "value": "blue"
    },
    {
      "trait_type": "eyes",
      "value": "star-eyes"
    },
    {
      "trait_type": "mouth",
      "value": "triangle-mouth"
    },
    {
      "trait_type": "face",
      "value": "teal-face"
    }
  ],
  "collection": {
    "name": "Solana Test Numbers",
    "family": "Numbers"
  }
}
