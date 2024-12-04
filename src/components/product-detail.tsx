'use client'

import { useState } from 'react'
import { Star, Check, Info } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Product } from "@/components/types";
import { TransactionButton, useActiveWalletChain } from 'thirdweb/react'
import { prepareTransaction, toWei } from 'thirdweb'
import { client } from '@/app/client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { defaultChain } from '@/lib/utils'

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [extendSupport, setExtendSupport] = useState(false)
  const activeChain = useActiveWalletChain() ?? defaultChain;
  const extendedSupportPrice = 27.75
  const notify = () => toast("Wow so easy!");

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1024px]"> {/* Set max-width to 1024px */}
      <div className="container mx-auto px-4 py-8 max-w-[1024px]">
        <div className='mb-4'>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              {[1, 2, 3].map((i) => (
                <Star key={i} className="w-5 h-5 fill-primary" />
              ))}
              <Star key="4" className="w-5 h-5 fill-primary opacity-30" />
              <Star key="5" className="w-5 h-5 fill-primary opacity-30" />
              <span className="ml-2 text-sm text-muted-foreground">3.29</span>
            </div>
            <Badge variant="secondary">{product.sales} sales</Badge>
            <Badge variant="outline" className="bg-green-50">Recently Updated</Badge>
          </div>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt="ViserTube Platform Preview"
                  className="w-full object-cover"
                />
              </Card>

              <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Key Features</h2>
                <ul className="space-y-3">
                  {[
                    "Video Content Management",
                    "Video Subscription System",
                    "Video Advertising System",
                    "Monetization & Payout System",
                    "Subtitle and Resolution Control via FFMPEG",
                    "Short-Form Video Reels System",
                    "30+ Automated Payment Gateways"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">Regular License</h3>
                  <div className="text-3xl font-bold">${product.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Quality checked by Envato</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Future updates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="flex items-center gap-2">
                      6 months support from ViserLab
                      <Info className="w-4 h-4 text-muted-foreground" />
                    </span>
                  </li>
                </ul>

                <div className="flex items-start gap-2 mb-6">
                  <Checkbox
                    id="extended-support"
                    checked={extendSupport}
                    onCheckedChange={(checked) => setExtendSupport(checked as boolean)}
                  />
                  <div>
                    <label
                      htmlFor="extended-support"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Extend support to 12 months
                    </label>
                    <p className="text-sm text-muted-foreground">
                      ${extendedSupportPrice}
                    </p>
                  </div>
                </div>

                <TransactionButton
                  theme="light"
                  transaction={() => {
                    const transaction = prepareTransaction({
                      to: "0x1Acae1b16655bEB267f8FbD95198B1BF9A6970ad",
                      chain: activeChain,
                      client: client,
                      value: toWei("0.000" + product.id),
                    });
                    return transaction;
                  }}
                  onTransactionSent={(tx) => notify()}
                >
                  Shut off & Take my money!
                </TransactionButton>

                <p className="text-sm text-muted-foreground text-center mt-4">
                  Price is in US dollars and excludes tax and handling fees
                </p>
              </div>

              <div className="pt-6 border-t">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="bg-green-50">Power Elite Author</Badge>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="font-semibold">ViserLab</h4>
                    <p className="text-sm text-muted-foreground">Elite Author</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <ToastContainer />
      </div>
      )
}
