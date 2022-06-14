import { gql } from 'graphql-request';

export const getHomepageProps = gql`
  query getHomepageProps {
    callToAction(where: { id: "cl4a7gtg2h9g80bivzerzr2ap" }) {
      header
      subheader
      image {
        url
      }
    }
    aboutUs(where: { id: "cl4a7lxobhajq0bivr9s64x08" }) {
      header
      description
      image {
        url
      }
    }
    category(where: { id: "cl31icmwngwlq0bk1u4822fc2" }) {
      name
      products(orderBy: price_ASC) {
        id
        name
        slug
        price
        image {
          id
          url
        }
      }
    }
  }
`;

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
