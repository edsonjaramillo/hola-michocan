import { GraphQLClient, gql } from 'graphql-request';

// Client Object
export const graphCMSClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT as string
);

// Queries
export const getPost = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      coverUrl
      coverWidth
      coverHeight
      coverDescription
      article {
        raw
      }
      writer {
        id
        name
        slug
        twitter
      }
    }
  }
`;

export const getCategories = gql`
  query getCategories {
    categories(orderBy: name_ASC) {
      id
      name
      slug
      products(orderBy: price_ASC) {
        id
        name
        slug
        price
        image {
          id
          url
          alt
        }
      }
    }
  }
`;

export const getCategoriesSitemap = gql`
  query getCategoriesSitemap {
    categories(orderBy: name_ASC) {
      id
      name
      products(orderBy: name_ASC) {
        id
        name
        slug
      }
    }
  }
`;

export const getProductSlugs = gql`
  query getProductSlugs {
    products {
      id
      slug
    }
  }
`;

export const getProduct = gql`
  query getProduct($slug: String!) {
    product(where: { slug: $slug }) {
      id
      slug
      name
      description
      price
      image {
        id
        url
        alt
      }
      options(orderBy: price_ASC) {
        id
        name
        price
      }
      recommendations(first: 4, orderBy: price_ASC) {
        id
        name
        slug
        price
        image {
          id
          url
          alt
        }
      }
    }
  }
`;

// Helper Functions
/**
 *
 */
export const formatPrice = (price: number) => {
  return (price / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
};

// Types
export interface ProductType {
  id: string;
  name: string;
  slug: string;
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

interface OptionType {
  id: string;
  name: string;
  price: number;
}
