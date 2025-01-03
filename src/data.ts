import { Crypto, Task, User } from "./types";
import profileAvatar from "./assets/avatars/Avatar-1.png";

export const user: User = {
  id: "12345",
  username: "Kyle",
  fullName: "Kyle Markson",
  email: "kylemarkson@gmail.com",
  phoneNumber: "+2348012345678",
  profilePictureUrl: profileAvatar,
  preferredCurrency: "NGN",
  verificationLevel: 2,
  darkMode: true,
  referralCode: "REF1234",
  balance: 502513,
  wallet: { address: "UOEN451APd5D52dhs51dhwk5D555IKsHshnvteNVS", network: "TON" },
  isVerified: true,
  bank: {
    accountName: "Kyle Markson",
    accountNumber: "0521463587",
    bankName: "OPay",
  },
  referredFriends: [
    {
      username: "Jane",
      status: "completed",
      date: "2024-12-01",
      rewardEarned: 1250,
    },
    {
      username: "Mike",
      status: "pending",
      date: "2024-12-02",
      rewardEarned: 0,
    },
    {
      username: "Lisa",
      status: "completed",
      date: "2024-11-30",
      rewardEarned: 1250,
    },
    {
      username: "David",
      status: "completed",
      date: "2024-11-29",
      rewardEarned: 1250,
    },
    {
      username: "Sophia",
      status: "pending",
      date: "2024-11-28",
      rewardEarned: 0,
    },
    {
      username: "Chris",
      status: "completed",
      date: "2024-11-27",
      rewardEarned: 1250,
    },
    {
      username: "Emma",
      status: "pending",
      date: "2024-11-26",
      rewardEarned: 0,
    },
    {
      username: "Olivia",
      status: "completed",
      date: "2024-11-25",
      rewardEarned: 1250,
    },
    {
      username: "Ethan",
      status: "completed",
      date: "2024-11-24",
      rewardEarned: 1250,
    },
    {
      username: "Ava",
      status: "pending",
      date: "2024-11-23",
      rewardEarned: 0,
    },
    {
      username: "Daniel",
      status: "completed",
      date: "2024-11-22",
      rewardEarned: 1250,
    },
    {
      username: "Mia",
      status: "pending",
      date: "2024-11-21",
      rewardEarned: 0,
    },
    {
      username: "James",
      status: "completed",
      date: "2024-11-20",
      rewardEarned: 1250,
    },
    {
      username: "Charlotte",
      status: "completed",
      date: "2024-11-19",
      rewardEarned: 1250,
    },
    {
      username: "Michael",
      status: "pending",
      date: "2024-11-18",
      rewardEarned: 0,
    },
    {
      username: "Ella",
      status: "completed",
      date: "2024-11-17",
      rewardEarned: 1250,
    },
    {
      username: "Benjamin",
      status: "pending",
      date: "2024-11-16",
      rewardEarned: 0,
    },
    {
      username: "Amelia",
      status: "completed",
      date: "2024-11-15",
      rewardEarned: 1250,
    },
    {
      username: "Lucas",
      status: "completed",
      date: "2024-11-14",
      rewardEarned: 1250,
    },
    {
      username: "Isabella",
      status: "pending",
      date: "2024-11-13",
      rewardEarned: 0,
    },
  ],
  // balance: {
  //   BTC: 0.015,
  //   ETH: 2.5,
  //   USDT: 50,
  // },
  transactionHistory: [
    {
      id: "tx4888575848515001",
      type: "convert",
      status: "completed",
      cryptoSymbol: "BTC",
      price: 0.005,
      qty: 0.1,
      rate: 1700,
      walletAddress: "UOEN451APd5D52dhs51dhwk5D555IKsHshnvteNVS",
      transactionFee: 200,
      total: 175000, // Total in NGN
      timestamp: new Date("2024-12-01T10:00:00Z"),
    },
    {
      id: "tx08845846455102",
      type: "convert",
      status: "completed",
      cryptoSymbol: "ETH",
      price: 1.0,
      rate: 1700,
      walletAddress: "UOEN451APd5D52dhs51dhwk5D555IKsHshnvteNVS",
      transactionFee: 200,
      qty: 2,
      total: 350000,
      timestamp: new Date("2024-12-02T15:30:00Z"),
    },

    {
      id: "tx00444156448441153",
      type: "convert",
      status: "cancelled",
      cryptoSymbol: "ETH",
      price: 3500.0,
      rate: 1700,
      walletAddress: "UOEN451APd5D52dhs51dhwk5D555IKsHshnvteNVS",
      transactionFee: 200,
      qty: 3,
      total: 550000,
      timestamp: new Date("2024-12-02T15:30:00Z"),
    },

    {
      id: "tx5505284812016445004",
      type: "convert",
      status: "pending",
      cryptoSymbol: "ETH",
      price: 1.0,
      rate: 1700,
      walletAddress: "UOEN451APd5D52dhs51dhwk5D555IKsHshnvteNVS",
      transactionFee: 200,
      qty: 350000,
      total: 350000,
      timestamp: new Date("2024-12-02T15:30:00Z"),
    },
  ],
  // "tasksSummary": {
  //     "totalTasks": 15,
  //     "completedTasks": 8,
  //     "pendingTasks": 5,
  //     "overdueTasks": 2
  //   }
  // // createdAt: new Date("2024-11-15T08:00:00Z"),
  // updatedAt: new Date("2024-12-03T10:00:00Z"),
};

export const tasks: Task[] = [
  {
    id: "task008",
    title: "Daily Check-in",
    description: "Log in daily to claim your reward.",
    dueDate: null,
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://example.com/daily-checkin",
    reward: 150,
    status: "active",
  },
  {
    id: "task001",
    title: "Join Telegram Channel",
    description: "Join our official Telegram channel to stay updated.",
    dueDate: null,
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://t.me/official_channel",
    reward: 200,
    status: "active",
  },
  {
    id: "task002",
    title: "Invite a Friend",
    description: "Invite one friend to join the app via your referral link.",
    dueDate: null,
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://fiatswap.com/invite",
    reward: 200,
    status: "active",
  },
  {
    id: "task003",
    title: "View an Advertisement",
    description: "Watch a 30-second advertisement to earn rewards.",
    dueDate: null,
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://fiatswap.com/ad-view",
    reward: 150,
    status: "active",
  },
  {
    id: "task004",
    title: "Follow Us on Twitter",
    description: "Follow our Twitter account for updates and news.",
    dueDate: null,
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://x.com/",
    reward: 150,
    status: "active",
  },
  {
    id: "task005",
    title: "Complete a Survey",
    description: "Answer a short survey about your preferences.",
    dueDate: "2024-12-20T00:00:00.000Z",
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://upscale.com/",
    reward: 500,
    status: "active",
  },
  {
    id: "task006",
    title: "Share on Facebook",
    description: "Share our app on Facebook to earn rewards.",
    dueDate: null,
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://facebook.com/",
    reward: 200,
    status: "active",
  },
  {
    id: "task007",
    title: "React to a Post",
    description: "React to our latest post on Instagram.",
    dueDate: null,
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://instagram.com/",
    reward: 150,
    status: "active",
  },

  {
    id: "task009",
    title: "Watch a Tutorial",
    description: "Watch a tutorial video to learn how to use the app.",
    dueDate: null,
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://youtube.com/",
    reward: 280,
    status: "active",
  },
  {
    id: "task010",
    title: "Rate Our App",
    description: "Leave a review for our app on the Play Store.",
    dueDate: null,
    createdAt: "2024-12-11T00:00:00.000Z",
    link: "https://play.google.com/store/apps/",
    reward: 300,
    status: "active",
  },
];

export const crypto: Crypto[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    iconUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
    price: 102772.4,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    iconUrl: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    price: 3908.05,
  },
  {
    id: "tether",
    name: "Tether",
    symbol: "USDT",
    iconUrl: "https://cryptologos.cc/logos/tether-usdt-logo.png",
    price: 1.0,
  },
  {
    id: "binance-coin",
    name: "Binance Coin",
    symbol: "BNB",
    iconUrl: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    price: 731.86,
  },
  {
    id: "ripple",
    name: "Ripple",
    symbol: "XRP",
    iconUrl: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
    price: 2.43,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    iconUrl: "https://cryptologos.cc/logos/cardano-ada-logo.png",
    price: 1.22,
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    iconUrl: "https://cryptologos.cc/logos/solana-sol-logo.png",
    price: 235,
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    iconUrl: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
    price: 10.73,
  },
  {
    id: "dogecoin",
    name: "Dogecoin",
    symbol: "DOGE",
    iconUrl: "https://cryptologos.cc/logos/dogecoin-doge-logo.png",
    price: 0.4374,
  },
  {
    id: "shiba-inu",
    name: "Shiba Inu",
    symbol: "SHIB",
    iconUrl: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
    price: 0.00003141,
  },
  {
    id: "tron",
    name: "TRON",
    symbol: "TRX",
    iconUrl: "https://cryptologos.cc/logos/tron-trx-logo.png",
    price: 0.3299,
  },
  {
    id: "avalanche",
    name: "Avalanche",
    symbol: "AVAX",
    iconUrl: "https://cryptologos.cc/logos/avalanche-avax-logo.png",
    price: 52.2,
  },
  {
    id: "sui",
    name: "Sui",
    symbol: "SUI",
    iconUrl: "https://cryptologos.cc/logos/sui-sui-logo.png",
    price: 1.62,
  },
  {
    id: "ton",
    name: "Toncoin",
    symbol: "TON",
    iconUrl: "https://cryptologos.cc/logos/toncoin-ton-logo.png",
    price: 6.91,
  },
  {
    id: "polygon",
    name: "Polygon",
    symbol: "MATIC",
    iconUrl: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    price: 3.81,
  },
  {
    id: "notcoin",
    name: "Notcoin",
    symbol: "NOT",
    iconUrl: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
    price: 180.75,
  },
  {
    id: "chainlink",
    name: "Chainlink",
    symbol: "LINK",
    iconUrl: "https://cryptologos.cc/logos/chainlink-link-logo.png",
    price: 24.18,
  },
  {
    id: "stellar",
    name: "Stellar",
    symbol: "XLM",
    iconUrl: "https://cryptologos.cc/logos/stellar-xlm-logo.png",
    price: 0.34,
  },
  {
    id: "monero",
    name: "Monero",
    symbol: "XMR",
    iconUrl: "https://cryptologos.cc/logos/monero-xmr-logo.png",
    price: 245.55,
  },
  {
    id: "cosmos",
    name: "Cosmos",
    symbol: "ATOM",
    iconUrl: "https://cryptologos.cc/logos/cosmos-atom-logo.png",
    price: 30.23,
  },
  {
    id: "algorand",
    name: "Algorand",
    symbol: "ALGO",
    iconUrl: "https://cryptologos.cc/logos/algorand-algo-logo.png",
    price: 1.84,
  },
  {
    id: "vechain",
    name: "VeChain",
    symbol: "VET",
    iconUrl: "https://cryptologos.cc/logos/vechain-vet-logo.png",
    price: 0.14,
  },
];

export const rate: number = 1710;

export const network: string = "TON";

export const banks: { name: string; code: string }[] = [
  { name: "9Payment Service Bank", code: "120001" },
  { name: "Access Bank", code: "044" },
  { name: "Citibank", code: "023" },
  { name: "Diamond Bank", code: "063" },
  { name: "Ecobank Nigeria", code: "050" },
  { name: "Fidelity Bank ", code: "070" },
  { name: "First Bank", code: "011" },
  { name: "First City Monument Bank", code: "214" },
  { name: "Guaranty Trust Bank", code: "058" },
  { name: "Heritage Bank ", code: "030" },
  { name: "Jaiz Bank", code: "301" },
  { name: "Keystone Bank ", code: "082" },
  { name: "Kuda Bank", code: "50211" },
  { name: "OPay", code: "999992" },
  { name: "PalmPay", code: "999991" },
  { name: "Providus Bank ", code: "101" },
  { name: "Polaris Bank", code: "076" },
  { name: "Stanbic IBTC Bank", code: "221" },
  { name: "Standard Chartered Bank", code: "068" },
  { name: "Sterling Bank", code: "232" },
  { name: "United Bank for Africa", code: "033" },
  { name: "Unity Bank Plc", code: "215" },
  { name: "Wema Bank", code: "035" },
  { name: "Zenith Bank", code: "057" },
];
