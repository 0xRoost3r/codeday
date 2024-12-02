import { sampleProducts } from "@/components/constant"
import ProductDetail from "@/components/product-detail"

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const slug = (await params).id
    const product = sampleProducts.find(item => item.id === slug);
    if (product !== undefined) {
        return (
            <ProductDetail product={product} />
        )
    } else {
        return ( <div>Not found</div> );
    }
    
}