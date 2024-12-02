import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConnectButton, ThirdwebProvider } from "thirdweb/react";
import { client } from "./client";
import { baseSepolia } from "thirdweb/chains";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeDay",
  description:
    "The whole coding marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider >
          <div className="sticky top-0 z-10 bg-red-600 p-4 text-center text-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
              <span className="xl:text-lg md:text-md text-xs font-medium">
                Black Friday! Up to 50% off best-selling EVM dApp and Telegram Mini App
              </span>
              <ConnectButton theme="light" client={client} chain={baseSepolia} />
            </div>
          </div>
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}

