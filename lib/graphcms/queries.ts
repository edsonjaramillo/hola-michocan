import { gql } from 'graphql-request';

export const getCategories = gql`
  query getCategories {
    categories(orderBy: name_ASC) {
      id
      name
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

export const getFeaturedProducts = gql`
  query getFeaturedProducts {
    products(where: { featured: true }) {
      id
      name
      description
      slug
      price
      image {
        id
        url
        alt
      }
    }
  }
`;

export const getProductsJSONLD = gql`
  query getProductsJSONLD {
    products {
      id
      name
      image {
        url
      }
      description
      slug
      price
    }
  }
`;

export const getProduct = gql`
  query getProduct($slug: String!) {
    product(where: { slug: $slug }) {
      id
      category {
        id
        slug
      }
      slug
      name
      description
      price
      image {
        id
        url
        alt
      }
      options {
        id
        name
        price
      }
      recommendations(first: 4, orderBy: price_ASC) {
        id
        name
        category {
          id
          slug
        }
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
