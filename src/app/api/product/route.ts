import { NextRequest, NextResponse } from 'next/server';
import { sampleProducts } from '../../../components/constant';

export async function GET(request: NextRequest) {
   const { searchParams } = new URL(request.url);

   const categories = searchParams.getAll('category');
   const sort = searchParams.get('sort');

   let products = [...sampleProducts];

   if (categories.length > 0) {
      products = products.filter(product => categories.includes(product.author.category));
   }

   if (sort === 'asc') {
      products.sort((a, b) => a.price - b.price);
   } else if (sort === 'desc') {
      products.sort((a, b) => b.price - a.price);
   }

   return NextResponse.json(products);
}
