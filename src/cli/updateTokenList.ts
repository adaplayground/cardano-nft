import { setTokenList } from 'store/nftFireStore';
import { appCategory } from 'conf/firebase';

const tokenList = {
  solanaCluster: 'mainnet-beta',
  mintAddresses: [
    '5LyMpbZ2kmVrahkmCDzM48dfZ4oKCwP38Pr1PpKNuT2Q',
    '9k4R2sdjWTrkYQVxqgXwpawQh9G8Hf1uuvaVcAAc4hdf',
    'ArJHdXusW7deNffv1ffvC2TAqTg2fXSrpuYVBkUd8kBQ',
    'y57aV4gL1hUrKN5ahnngaRRHRCwwiQkGddy8QeS8UgR',
    '5DnHp8bJBtpRhTuXsHym3Nzd5FzAx3AjMGoRV5rNXaG9',
    '65MG4UiupExdC8jioqfX84tXY1sUJ3NN78p2BZhbY5L2',
    '7ouSGk4PvjczBVKqXaV5TCuYpZgw8KhcJovvUfyUdsSv',
    '7WoC7rQ1VpNxiX2RXXaF2dDfhhva1PM5UEQtAx4FZqZH',
    'EHjRU18UHWAxaN1uN1DravWRNQQy34VbNpaypy3WFmYA',
    '2UXiUStuMkKEAwWEySP2PdBinuqiEWcrhRsCWkPmewZb',
    'BZpSNYtp825MUepnpdcd96DuSzf4XF4zwhQ8vhq5264x',
    '6hX8bY11GtkvNmgF3trwpHbbCPuVQG6yJdPj8eYoLBbE',
    '1vFyKxh9GGAHRoJGj5oXRjrhoJVHNzsd1wuCa9KX4ja',
    'BRyCtA9JFih8t9Xu657c56syrrZph1Kp2eXjQ5QwaHff',
    'Ho6AL1J4XvX4vJTHEQGamJwaxG2Df1FGnCuR7PxjJCMZ',
    'DAsjWAamME9jUev6b56waqrQ2uNeACqs4TZuaPn5yQwc',
    'BAgzUrtcw9qYDUg27A83qNb2TSnA9jxaxgNvbyk6zZRn',
    '5xa9XnQscj8W6yQxdULvXbHcbZtriJoFtxWqCDLeXoF5',
    '3DJUWpeg4DW74jZ63zV98hL1zHvYoruDtGKY2nWSiUpV',
    'AKMZrJxNJZaPrC6YnMrZ8SV7HGT2zqLTu72n325JBzYh',
    'CdH89RPZJrHzUzGMSjgX9UQkLc1DjrQbP7SWfJdfcE4h',
    'CTAu3TSXzuiFEXMUCuzhxC6NnuFcGMjMWU7wdhTLZJXG',
    '5sQQDNt92r49Bq98HUZTwaEg3G99Bi2nKsQCjnNMgaoo',
    'AtnZGsRbX9ESfhgAwNFyxuWpTFgqokoDLXNo2GjpddvQ',
    'EabVfeZuE9GLmSbAzejPdLoaY4bEPkm4nKYeStLnCapV',
    'EE7snd8Jr5vsnvL8cH6Kj8VyJGUMjpFxghPoe8oYJdKD',
    '3DQzfyt58Dv1qe6bhSBdbqWhyZGS3shjDqkggXvsVAoS',
    'F1jy4cRYv6CQPrNXUSvpmCY5YAE2eZDFvzeWRKsDed96',
    '7s1SVhpDsG9sxQs3RXNUGj5WwhHvAEeKbQ1MbiAQm4WD',
    'DLdbUysBB5rmUpx8bmdqPDv3vF3FZnrRYD7hyeCjcsfN',
    'CHKrEiMWHhGUnoKB2eeARXhbxKwTeL3pvKaDev2xPnQC',
    '99Y4HPBoV7pB3exJrfnZeutoUczDrDsZiMPJa9ZhiFiU',
    'G614h4SH3fYqVmm1VwJ7TNkEN5C6gYV32F8CDYMuvBpL',
    'FN7e7gc14kRDuFNSPZVkX2Atrpfa9ymhemuH2Z2u1du3',
    'GK4so7g267sqWn5owbjdfqYCcc85Dyi82GPLFWyELZEz',
    'DRs9y58uUBBPPBz1u6ied7tiKvAZNGztvwDi9pzvokNP',
    'JHzKmFv2FSfawb5E6mKGF9VQeTYCw3Bq3StEMYqgY3R',
    'CtsAV1BswGhLLgWwnXwyU1BECEHWYZY1h6jzXGzpKogT',
    '3Jhruk5sB1RzjvYQpGUJqrx8fpcJy5M38f9eqQYb8Rxs',
    'DM9JijZUEqLrNeVdEBKP9kD3CvA5MdhFEvNKRW6E37wU',
    '5TqKQmgDieD88XZtBzFqwLuyPqzP3oau1XogvruxAHVN',
    'GrkuJmEkQfrnFkN9qUyMUiY8dCy19ah2UWgHCnaDBtvy',
    'nwyp9UXbBaz4YPF88m9DmUN8dAcnH6ynEf1onKKF9Z2',
    'How2UzRq62KZwbEv5Xfkm4sniEGdprjsR4ok8ViPvGrS',
    'Ce5aEkJi7L1baiFWaUaYG8HyCgqh988a6bKtmxfXZnba',
    'Ewvo2wVRUuWns58EnHW2yTpxKpmTcPwRf4K6wmvnqgBP',
    'Dav8Kz1MzrHXWHreURJr6m4UmoKnhSMz373bvbeNYa5k',
    'A5S27awMsAhfetwpR7378DcZq4VcKWqq9XZvraZQ6C67',
    'A5JXPReYHbyBSCKvnGzmzP9DBNS5FuJHqnfD5uWnWXCq',
    'D3zVAcuHKQQvh2dKdjiq7qLP3W9QUHqQSSsNLzxfaMLT',
    'BvQwSNRnE9fHpH6v8v45QzAMuJJ6M5xV4qurJu9cydSE',
    '7r4b7z13TZBSMxMmXYxKkffbJtjhmqQ7kpiDwMhrtxaF',
    'EEwKraBa8UoGPpvAvXT5CXVdjNqkeE3PGPqQNsWKFQ84',
    '4pbThA2Swkctq3VKkrxRvQmFAqwPVzhEvgHhXV9TN81H',
    'BNNSdBHkLjic4vjFMZfkm9v55jFCdDqsrSbvd7SmofZ7',
    'HnDnBAjapkNjYiAiSUA8dijFTBWjrvvEXgiNb5m8dz3B',
    'HZW5ALxBxPsgrzxVynfxHECMNh63iSnhh4jcKrt2VLYz',
    'Hn6qcnrZh5xPbRGhX7GkSvr8U4iewid1qBMsfEQB9eji',
    '8w3eim3U3njyg1P7MqRbK1yeXaP48J92P428NC3jXYx5',
    'CYuq1cmcocZXRCyinJ66vwNZoH1UwzPqWpZ8ofQsVdwm',
    'CmGki53Sd7w8yzCevJYCkBwmkMQiGWu5qKEJ7vYGZ2VB',
    '5jGyAsijsWubPabuQCqr89UX77E1CBAPxBqUj2PhdARP',
    'CPqV1svR9G9ycif2nizWpoHJw8wL6gw199rjFtED3j5M',
    'BezMXy3WKb3gDCW5Mkg1AdPjEJ5VyqWx3ZXjvrLfHsh4',
    '9jh54m5GWHdFkPuiuqMSaCGGyixu6ZfxcgN5y9gvbmZ6',
    '53Au2M2WRcurW1cCRMEbWZLFLX6dkzZ9fMWTys3hxh89',
    '8XNopYomZT5XBLYz1CyoujMnGW2igx2K27j3H4bneeJH',
    '4FW6Q1tXYzm9T3XLcVJTLZhvoELwhmDjkCWP2k1kJRb9',
    'Bu8tbdbLwMfZAepMuYG1C2YgjkdBEcS9jMpTZyNHLHmL',
    'FCnqUF1BtvHEHuBjws8AEaotnZ1yiMBFz6ogAr6UcCfS',
    'ADdSXSWQB7AeZskC8eb8szKci3ZqJR6NjKXruNR7xd3C',
    'FpERzEtBocmz6ogy8VZ2ELXj1U61hvw2ix1pnCaXBbAc',
    '6mqatb8NKCCUo8WooQJ5fh2aC7rxfKBTMXTdujeAxVna',
    '8s962Q6t7fSwicjGrfsVNimfps8eV1szHToj25hGWGH1',
    'BPvjq62cTCR2uEPcrZpxximTfB8zGjmCzPg7CURgjGUU',
    'Cafx5biGfdw9j8u8WyjnBzy6gbyPNRagwnC5T925T7Yq',
    'CknLXXRWnmzzgcakus6ApqNhn1tmKwHZjpJJUVK8BZ16',
    '5oD1xe3C8RSaVLCFt9D8yXLEJghV83sQv97NjGd5Eus8',
    'FHABnXqsEMdy9ZRJTxx6xzCYSQ8nYtCJzipywhUMxLsY',
    'BkZsk44BiLdqhqhKJwfzcfLmsfCizTnQ4mW9Uj13ZtzV',
    'HcrKH9dwFaQumMBMD9EM6KbTwiMb6hbJ4Kds45p9qDJx',
    '7mgfZF6scVH7aZYrqnSud6QSr4dSEK57jpKV8fTbMJ7j',
    'Ea1ocf8BE7SwfL57VGXimpriqNZAy3PSBSKmGRgftuaB',
    '5ZfuZYuSftXt45f5DJ17GBPMjb1M6c2A9w6oB7CvjHko',
    '7jU9Q22sR1penaU3ZYMwQgGm8uuWZaZCjLXfFJnH1HhM',
    '9vJP8TGkqVoC5gT9g6iw2cTvd5Ur57CPxzLLhS79mvfd',
    'HXB2xDDJqj4M8htfz3ep5uo6fwEiWEaLMDXQxBvryyTK',
    'BHyZuj9K1LBmVimJ9iEwj2pqWvZaF3Ke21bbyG1p7Twv',
    '9LtKu49TfkkEfvbdSJLkJsTH8siYxz9pVdeUGxWwY2SF',
    '3JvB72UvD1E9iRcDK8quUGLmYzip5ss4FVMyQgKNVw6X',
    'HUqNQhjvqKeZeguByDhaEPdumMhupcWBY5Gf9KMTb5Af',
    'GitfoUUtDV1jRQAZoVnF6L2d53cZx5bpCrvWuRotxWre',
    '2oYY2eehDpQdr6KDfZj25tC8mjTESMenEHpgcPLvb5St',
    'Atwn3tXuqVfDzNJvJrufnUvhMFQqb11WwG8XpENfAu1Z',
    '2pJWGYizomCREHYKo7nCcN2rwMPx73bL6WFCYfiBr585',
    'FYrYCpUUusWpJpm2tKQ7HGvvRMN9QVRtuVRbngNWNQiT',
    'FMULmHMwUN7zsNv4ihymduvsrFxTVAPJZokc8yRixWN2',
    '2E2NLZrjFxb5yURaCjiRJ8Ziys8QCdargHEpyYMwz8nQ',
    '2V4zqYKk1xewxcPRbgoTSZnCjPbJXXtiTtXnEdKsmGge',
    'HMPqbSi6oVcWLTkhhKq6ZVUF58FVo8gi5aMofS63mZyf',
    'D8rvuQbAMXzCj4LuSmmMKBJ4Fbi6C7xKeLph9AKLBrWK',
    '5fkfxaxC4RCGdpRgHVuWDNFkdiGu3hVztiBZK5RixFmp',
    '35gF3YdHzyuYQJ2PGwpinFEDY9935SdZUZyaHCcM7Day',
    '46eCP9FtTK2FLUESAj9KLmbHjSGEucV2374c7judZpdw',
    'BZzvbq1wZ7aYpcza71TkrhHpz261XbDD4Jt6ercSZHEV',
    '8dLhQE7GSuhH4gRcp2gUx1mENevZTsmkMk4BWGt2Bd1R',
    '2JfgkdYoEWWWZYshZMxGpJpm8GbLJzxJT4UQJFWPhKUy',
    'Ce5aEkJi7L1baiFWaUaYG8HyCgqh988a6bKtmxfXZnba',
    'BvQwSNRnE9fHpH6v8v45QzAMuJJ6M5xV4qurJu9cydSE',
    'Cafx5biGfdw9j8u8WyjnBzy6gbyPNRagwnC5T925T7Yq',
  ],
};

(async () => {
  await setTokenList(tokenList.solanaCluster, appCategory, tokenList);
})();
