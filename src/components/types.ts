export interface Product {
    id: string
    title: string
    author: {
      name: string
      category: string
    }
    price: number
    rating: number
    reviews: number
    sales: number
    lastUpdated: string
    software: {
      version: string
      framework: string
    }
    fileTypes: string[]
    thumbnail: string
  }