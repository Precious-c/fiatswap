import { Wallet } from "lucide-react";

export interface User {
  id: string; // Telegram user ID
  username: string;
  fullName: string;
  email: string;
  phoneNumber?: string;
  wallet: Wallet;
  preferredCurrency: "NGN" | "USD";
  profilePictureUrl?: string;
  darkMode?: boolean;
  balance: number;
  referralCode: string;
  referredBy?: string;
  referredFriends?: Friends[];
  transactionHistory: Transaction[];
  isVerified: boolean;
  bank: BankDetails;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string | null;
  createdAt: string;
  link: string;
  reward: number;
  status: "active" | "inactive";
}

export interface Friends {
  username: string;
  status: "completed" | "pending";
  date: string;
  rewardEarned: number;
}

export interface BankDetails {
  accountNumber: string;
  bankName: string;
  accountName: string;
  bvn?: string;
}

export interface Wallet {
  address: string;
  network: string;
}

export interface Transaction {
  id: string;
  type: "buy" | "sell" | "convert";
  status: "completed" | "pending" | "cancelled";
  cryptoSymbol: string;
  qty: number;
  transactionFee: number;
  walletAddress: string;
  price: number; //per unit of the coin in naira
  rate: number; //current rate of usd to naira
  total: number; // Total value in naira
  timestamp: Date;
}

// export interface Task {
//   id: string;
//   title: string;
//   description: string;
//   isCompleted: boolean;
//   reward: number;
// }

export interface TaskCompletion {
  userId: string;
  taskId: string;
  completionDate: string;
}

export interface Crypto {
  id: string;
  name: string; // e.g., 'Bitcoin'
  symbol: string; // e.g., 'BTC'
  iconUrl?: string; //coin icon
  price: number;
}
