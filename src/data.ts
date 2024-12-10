import { Crypto, User } from "./types";
import profileAvatar from "./assets/avatars/Avatar-1.png";

export const user: User = {
  id: "12345",
  username: "Kyle",
  fullName: "Kyle Markson",
  email: "kylemarkson@gmail.com",
  phoneNumber: "+2348012345678",
  profilePictureUrl: profileAvatar,
  preferredCurrency: "NGN",
  darkMode: true,
  referralCode: "REF1234",
  balance: 502513,
  wallet: { address: "UOEN451APd5D52dhs51dhwk5D555IKsHshnvteNVS", network: "TON" },
  isVerified: true,
  bank: {
    accountName: "Kyle Markson",
    accountNumber: "0521463587",
    bankName: "Opay",
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
  // createdAt: new Date("2024-11-15T08:00:00Z"),
  // updatedAt: new Date("2024-12-03T10:00:00Z"),
};

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
