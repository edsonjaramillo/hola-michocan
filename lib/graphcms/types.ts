export interface ProductType {
  id: string;
  name: string;
  slug: string;
  category: CategoryType;
  description: string;
  price: number;
  featured: boolean;
  image: ImageType;
  options: OptionType[];
  recommendations: ProductType[];
}

export interface CategoryType {
  id: string;
  slug: string;
  name: string;
  products: ProductType[];
}

interface ImageType {
  id: string;
  url: string;
  alt: string;
}

export interface OptionType {
  id: string;
  name: string;
  price: number;
}
