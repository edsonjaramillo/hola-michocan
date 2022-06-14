import { ProductType } from '@/lib/graphcms/types';
import { formatPrice } from '@/lib/graphcms/helper';
import Head from 'next/head';

interface ProductJSONLDProps {
  products: ProductType[];
  description: string;
}
const RestaurantJSONLD = ({ products, description }: ProductJSONLDProps) => {
  const menuItems = products.map((product) => ({
    name: product.name,
    description: product.description,
    image: product.image.url,
    url: `https://www.holamichocanicecream.com/menu/${product.slug}`,
    offers: {
      price: formatPrice(product.price),
      priceCurrency: 'USD',
    },
  }));

  const restaurantJSON = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    url: 'https://holamichoacanicecream.com',
    name: 'Hola Michoacan',
    image: 'https://media.graphassets.com/5Ggwcd9ORgGCtQc3vXa4',
    description: description,
    priceRange: '$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '14220 US-431',
      addressLocality: 'Guntersville',
      addressRegion: 'AL',
      postalCode: '35976',
      addressCountry: 'US',
    },
    telephone: '2564863601',
    servesCuisine: ['Ice Cream'],
    hasMenu: {
      '@type': 'Menu',
      name: 'Dine-In Menu',
      description: 'Menu for in-restaurant dining only.',
      hasMenuItem: menuItems,
    },
  };

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJSON) }}
      />
    </Head>
  );
};

export default RestaurantJSONLD;
