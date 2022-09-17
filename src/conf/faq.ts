import { FaqSectionType } from 'types';

export const faqContent: Array<FaqSectionType> = [
  {
    title: 'Playground',
    items: [
      {
        title: 'What is the solana NFT playground?',
        content: `This playground is try to help to demystify blockchain , cryptocurrency and NFT, also allow you DIY your own NFT free on Devnet,
        and only pay the storage fee and transaction fee on the mainnet, usually less than **0.02 SOL** in total.
        this site is build with [Metaplex](https://www.metaplex.com/) smart contracts like candy machine and meta data smart contract.`,
        fullWidth: false,
      },
      {
        title: 'What is a Metaplex candy machine?',
        content: `The Candy Machine, or **CM** for short, is a Solana Program designed to reliably sell one NFT at a time
                  The Candy Machine program behaves like a real-world mechanical candy machine, where a person expects
                  to put a coin into the machine and get one item out of it. The usual exceptions apply,
                  for example and most significantly it won't take your coin if it's out of candy.`,
        fullWidth: false,
      },
      {
        title: 'Royalties',
        content: ` Metaplex can seamlessly create on-chain artist splits that remove the awkwardness out of collaboration.
                 Tag each collaborator, set custom percentages, and you’re off to the races. Each NFT can also be minted with
                 configurable royalty payments that are then sent automatically back to the original creators whenever an artwork
                 is resold on a Metaplex marketplace in the future.
        `,
        fullWidth: false,
      },

      {
        title: 'Token Metadata Standard',
        content: `Detail standard refer to [Token Metadata Standard](https://docs.metaplex.com/nft-standard)
        `,
        fullWidth: false,
      },
      {
        title: 'Devnet vs Mainnet',
        content: `The Solana NFT playground can operate in two mode: Devnet and Mainnet, on Devnet, there's no real money involved,
          and you can simply airdrop some SOLs from our website to your wallet and purchase some NFTs and these NFTs will be shown in your Wallet
          as collectables, if you really like some NFTs ,you can also mint these NFTs on the Mainnet with small amount (mainly storage and metaplex transaction fee)  of SOL. After that you
          can sell them in any NFT market places.
        `,
        fullWidth: true,
      },
      {
        title: 'DIY NFT',
        content: `The Solana NFT playground provides two ways to DIY your own NFT on the solana blockchain:
1. DIY with Meta , this mode you need to provide both the image and the meta file.
2. DIY with Image, this mode you just need to prepare the image and the input the requires name ,description, the system
             will generate meta data based on your input.
             Both mode support drag and drop.
            `,
        fullWidth: true,
      },
    ],
  },
  {
    title: 'Solana',
    items: [
      {
        title: 'What is Solana?',
        content: `Solana is an open source project implementing a new,
                  high-performance, permissionless blockchain. The Solana
                  Foundation is based in Geneva, Switzerland and maintains the
                  open source project.`,
        fullWidth: false,
      },
      {
        title: 'What are SOLs?',
        content: `A SOL is the name of Solana's native token, which can be
                  passed to nodes in a Solana cluster in exchange for running an
                  on-chain program or validating its output. The system may
                  perform micropayments of fractional SOLs, which are called
                  lamports. They are named in honor of Solana's biggest
                  technical influence, Leslie Lamport. A lamport has a value of
                  0.000000001 SOL.`,
        fullWidth: false,
      },
      {
        title: 'What is a Wallet?',
        content: ` A crypto wallet is a device or application that stores a
                  collection of keys and can be used to send, receive, and track
                  ownership of cryptocurrencies. Wallets can take many forms.`,
        fullWidth: false,
      },
      {
        title: 'Phantom Web Wallets',
        content:
          'Phantom is a friendly non-custodial, browser extension, Solana' +
          'wallet that makes it safe & easy for you to store, send,' +
          'receive, collect, and swap tokens.\r\n' +
          '* Use Solana dapps\r\n' +
          '* Beautiful NFT support\r\n' +
          '* Ledger hardware wallet support\r\n' +
          ' Available for Chrome, Brave, Firefox, and Edge',
        fullWidth: false,
      },
    ],
  },
  {
    title: 'NFT',
    items: [
      {
        title: 'What is an NFT,what does NFT stand for?',
        content: `Non-fungible tokens. At a very high level, most NFTs are part of the Ethereum
                  blockchain. Ethereum is a cryptocurrency, like bitcoin or
                  dogecoin, but its blockchain also supports these NFTs, which
                  store extra information that makes them work differently from,
                  say, an ETH coin. It is worth noting that other blockchains
                  can implement their own versions of NFTs.`,
        fullWidth: false,
      },

      {
        title: 'How much does it cost to Mint an NFT?',
        content: `The cost consists two parts, one part is the list price of the NFT on the site, the other part is the charge from the solana network,mainly is the minimum rent exempt fee for your NFT's meta data stored in the blockchain.
        currently is around 0.01427 SOL (2.6 US$) refer to the rent exemption fee. For example if the list price for an NFT is 0.02, the total cost is 0.03427SOL`,
        fullWidth: false,
      },
      {
        title: 'Rent and rental exemption.',
        content: `Keeping accounts alive on Solana incurs a storage cost called rent because the blockchain cluster must actively maintain the data to process any future transactions. Every NFT has related meta data stored in block chain,
        which requires accounts alive on Solana, the rent fee is similar to the account management fee charged by bank, if you keep a minimum balance in your account ,the management fee is exempted. this is the same case for Solana block chain.
        Alternatively, an account can be made entirely exempt from rent collection by depositing at least 2 years worth of rent. `,
        fullWidth: false,
      },
    ],
  },
];
