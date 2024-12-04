// Comment for testing PR to Root Repo
import { Heart, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "./types"
import { useRouter } from 'next/navigation'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  return (
    <Card className="group relative">
      <CardHeader className="p-0">
        <div className="relative aspect-[1.5] overflow-hidden rounded-t-lg">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-cover transition-transform group-hover:scale-105"
          />
          {product.sales > 100 && (
            <Badge className="absolute left-2 top-2 bg-yellow-500">Popular</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <div className="flex items-start justify-between gap-2">
          <a href={"product/" + product.id}><h3 className="line-clamp-2 font-semibold">{product.title}</h3> </a>
          <Button size="icon" variant="ghost">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>by {product.author.name}</span>
          <span>in {product.author.category}</span>
        </div>
        <div className="flex items-center gap-1">
          {"★".repeat(Math.floor(product.rating))}
          {"☆".repeat(5 - Math.floor(product.rating))}
          <span className="text-sm text-muted-foreground">
            ({product.reviews})
          </span>
        </div>
        <div className="grid gap-1">
          <div className="text-sm font-medium">Software Version: {product.software.version}</div>
          <div className="text-sm font-medium">Framework: {product.software.framework}</div>
        </div>
        <div className="flex flex-wrap gap-1">
          {product.fileTypes.map((type) => (
            <Badge key={type} variant="secondary">
              {type}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <div className="text-lg font-bold">${product.price}</div>
        <div className="flex gap-2">
          <Button onClick={() => router.push('/product/' + product.id)} size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Buy Now
          </Button>
          <Button size="sm" variant="outline">
            Live Preview
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

