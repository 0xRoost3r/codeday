import { Heart, Settings2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "./types";
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col sm:flex-row gap-4 rounded-lg border bg-white p-4 sm:p-6">
      <div className="relative w-full sm:w-[300px] overflow-hidden rounded-lg">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full object-cover h-[250px]"
        />
        {product.software.version && (
          <Badge className="absolute right-2 top-2 bg-red-500 text-white">
            v{product.software.version}
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col sm:border-r sm:border-gray-200 pr-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              <a href={`/product/${product.id}`}>{product.title}</a>
            </h3>
            <p className="text-sm text-muted-foreground">
              by {product.author.name} in {product.author.category}
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div>
            <span className="text-sm">Software Version: </span>
            <span className="text-sm text-muted-foreground">{product.software.version}</span>
          </div>
          <div>
            <span className="text-sm">Software Framework: </span>
            <span className="text-sm text-muted-foreground">{product.software.framework}</span>
          </div>
        </div>

        <div className="mt-4">
          <span className="text-sm">File Types Included:</span>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.fileTypes.map((type) => (
              <Badge key={type} variant="secondary" className="bg-gray-100 text-gray-800">
                {type}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between relative sm:h-full">
        <div className="absolute top-1 lg:top-[-0.5rem] right-[-0.5rem] transform -translate-y-1 flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-col sm:justify-center sm:items-center sm:h-full">
          <div className="text-2xl font-bold sm:text-center">${product.price}</div>
          <div className="mt-2 flex items-center gap-2 sm:justify-center">
            <div className="flex items-center gap-1">
              {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews})</span>
          </div>
        </div>

        <div className="flex gap-2 mt-4 sm:mt-0">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push(`/cart/${product.id}`)}
          >
            Add to Cart
          </Button>
          <Button size="sm">
            Live Preview
          </Button>
        </div>
      </div>
    </div>
  );
}
