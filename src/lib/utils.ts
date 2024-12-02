import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { bscTestnet } from "thirdweb/chains";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const defaultChain = bscTestnet; // BNB Smart Chain Testnet

interface TxScanList {
  [key: string]: string; // Flexible keys with string values
}
export const txScanList : TxScanList = {
  "0x61" : "https://testnet.bscscan.com/tx/",
  "0x14a34" : "https://sepolia.basescan.org/tx/",
}
