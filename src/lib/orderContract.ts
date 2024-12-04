// https://base-sepolia.blockscout.com/address/0x58cD7aab2f2E4E022A39AbeB0bF6E13695F5bDFA?tab=contract
// Store orderId, eth/bnb value to Supabase Databse
// Then check tx confirmed send product source to customer via Telegram

interface contractInferface {
    [key: string]: string; // Flexible keys with string values
  }

export const PaymentForwarderAddressContract : contractInferface = {
   "97" :"0xF171360aa56747eB1247d8990c81E163ef5b2bB4",
   "84532" :"0x58cD7aab2f2E4E022A39AbeB0bF6E13695F5bDFA"
    
};