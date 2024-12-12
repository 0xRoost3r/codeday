"use client";

import { useEffect, useState } from "react";
import { FilterSidebar } from "@/components/filter-sidebar";
import { ProductCard } from "@/components/product-card";
import { useProductStore } from '../store/productStore';
import { Button } from "@/components/ui/button";
import { ChevronDown, X, ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";

export default function Marketplace() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);

  const { products, fetchProducts } = useProductStore(state => state);

  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleSortChange = (order: "asc" | "desc") => {
    setSortOrder(order);
  };

  useEffect(() => {
    fetchProducts(selectedCategories, sortOrder);
  }, [selectedCategories, sortOrder, fetchProducts]);

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
                fixed top-0 left-0 ${sidebarOpen ? 'bg-white w-[280px] h-full' : 'hidden'}
                lg:z-auto z-40 p-6 lg:p-0 lg:static lg:relative transition-transform duration-3000 lg:transform-none`}
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
              <FilterSidebar onCategoryChange={handleCategoryChange} />
            </div>

            {sidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-30"
                onClick={() => setSidebarOpen(false)}
              />
            )}

            <div className="flex flex-col gap-4">
              <div className="flex w-full justify-start lg:justify-end space-x-4 mb-2">
                <Button
                  onClick={() => handleSortChange("asc")}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ArrowUpNarrowWide className="h-4 w-4" />
                  Giá tăng dần
                </Button>
                <Button
                  onClick={() => handleSortChange("desc")}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <ArrowDownWideNarrow className="h-4 w-4" />
                  Giá giảm dần
                </Button>
              </div>

              <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
                {products.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
