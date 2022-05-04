import { ProductType } from '@/lib/graphcms/types';
import { formatPrice } from '@/lib/graphcms/helper';
import Head from 'next/head';

interface ProductJSONLDProps {
  products: ProductType[];
}

interface MenuItemProps {
  name: string;
  description: string;
  price: number;
  slug: string;
  categorySlug: string;
  lastItem: boolean;
}

const MenuItem = (item: MenuItemProps) => {
  return `
      {
          "@type": "MenuItem",
          "name": "${item.name}",
          "description": "${item.description}",
          "url": "https://holamichoacanicecream.com/${item.categorySlug}/${item.slug}",
          "offers": {
              "@type": "Offer",
              "price": "${formatPrice(item.price)}",
              "priceCurrency": "USD"
          }
      }${item.lastItem ? '' : ','}`;
};

const getMenuItems = (products: ProductType[]) => {
  let menuItems: string = '';
  const numberOfProducts = products.length;
  products.forEach(({ name, description, price, category, slug }, index) => {
    const lastItem = index === numberOfProducts - 1;
    const menuItem: MenuItemProps = {
      name,
      description,
      price,
      categorySlug: category.slug,
      slug,
      lastItem,
    };
    menuItems += MenuItem(menuItem);
  });
  return menuItems;
};

const RestaurantJSONLD = ({ products }: ProductJSONLDProps) => {
  const FinishedMenu = `
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "url": "https://holamichoacanicecream.com",
      "name": "Hola Michoacan",
      "image": "http://www.example.com/image-of-some-restaurant.jpg",
      "description": "This is an example restaurant that serves American cuisine.",
      "priceRange": "$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14220 US-431",
        "addressLocality": "Guntersville",
        "addressRegion": "AL",
        "postalCode": "35976",
        "addressCountry": "US"
      },
      "telephone": "2564863601",
      "servesCuisine": ["Ice Cream"],
      "hasMenu": {
          "@type": "Menu",
          "name": "Dine-In Menu",
          "description": "Menu for in-restaurant dining only.",
          "hasMenuSection": [${getMenuItems(products)}]
      }
    }`;

  return (
    <Head>
      <script type='application/ld+json'>{FinishedMenu}</script>
    </Head>
  );
};

export default RestaurantJSONLD;
