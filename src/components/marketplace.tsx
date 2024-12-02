"use client";

import { GridIcon, ListIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FilterSidebar } from "@/components/filter-sidebar"
import { ProductCard } from "@/components/product-card"
import { sampleProducts } from './constant';

export default function Marketplace() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 bg-purple-600 p-4 text-center text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-lg font-medium">
            Cyber Sale! Up to 50% off best-selling WordPress plugins, PHP scripts & more
          </span>
          <Button variant="secondary" className="bg-green-400 text-black hover:bg-green-500">
            Save up to 50%
          </Button>
        </div>
      </div>
      
      <main className="mx-auto max-w-7xl p-6">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <GridIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ListIcon className="h-4 w-4" />
            </Button>
            <Select defaultValue="bestsellers">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bestsellers">Best sellers</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="bestrated">Best rated</SelectItem>
                <SelectItem value="trending">Trending</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <span className="text-sm text-muted-foreground">
            Price is in US dollars and excludes tax and handling fees
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-[240px_1fr]">
          <FilterSidebar />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleProducts.map((item,idx) => {
              return <ProductCard key={idx} product={item} />
            })}
          </div>
        </div>
      </main>
    </div>
  )
}

