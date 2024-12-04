"use client";

import { useState } from "react";
import { FilterSidebar } from "@/components/filter-sidebar";
import { ProductCard } from "@/components/product-card";
import { sampleProducts } from './constant';
import { Button } from "@/components/ui/button";
import { ChevronDown, X } from "lucide-react";

export default function Marketplace() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto py-6">
        <div className="max-w-screen-xl mx-auto px-4 lg:px-0">

          <div className="lg:hidden mb-4">
            <Button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <ChevronDown className={`h-4 w-4 transform ${sidebarOpen ? 'rotate-180' : ''}`} />
              Filter
            </Button>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-6 relative">
            <div
              className={`lg:block ${sidebarOpen ? 'block' : 'hidden'} 
                fixed top-0 left-0 z-40 p-6 lg:p-0 lg:static lg:relative transition-transform duration-3000 lg:static lg:transform-none
                ${sidebarOpen ? "bg-white w-[280px] h-full" : "hidden"}`
              }
            >
              <div className="lg:hidden flex justify-between mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <FilterSidebar />
            </div>

            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
              {sampleProducts.map((item, idx) => {
                return <ProductCard key={idx} product={item} />
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
