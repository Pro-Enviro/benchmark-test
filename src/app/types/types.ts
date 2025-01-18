export interface ProductType {
  title: string;
  images: string[];
  id: number;
  category: string;
  description: string;
  stock: number;
  brand?: string;
  price?: number;
  rating?: number;
  reviews?: any[];
  tags?: string[];
}
