import { create } from 'zustand';
import { Product } from '../components/types';

interface ProductState {
   products: Product[];
   fetchProducts: (categories: string[], sort: 'asc' | 'desc' | null) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
   products: [],
   fetchProducts: async (categories, sort) => {
      let query = '';

      if (categories.length > 0) {
         const categoryQuery = categories.map(cat => `category=${encodeURIComponent(cat)}`).join('&');
         query += `?${categoryQuery}`;
      }

      if (sort) {
         query += `${categories.length > 0 ? '&' : '?'}sort=${sort}`;
      }

      try {
         const response = await fetch(`/api/product${query}`);
         if (!response.ok) {
            throw new Error('Failed to fetch products');
         }
         const data: Product[] = await response.json();
         set({ products: data });
      } catch (error) {
         console.error(error);
         set({ products: [] });
      }
   },
}));
