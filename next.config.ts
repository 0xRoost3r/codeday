import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // fixes wallet connect dependency issue https://docs.walletconnect.com/web3modal/nextjs/about#extra-configuration
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  }
};

export default nextConfig;