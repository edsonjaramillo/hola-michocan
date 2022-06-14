import { ProductType } from '@/lib/graphcms/types';
import { formatPrice } from '@/lib/graphcms/helper';
import Head from 'next/head';

interface ProductJSONLDProps {
  product: ProductType;
}

const ProductJSONLD = ({ product }: ProductJSONLDProps) => {
  const json = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.image.url,
    description: product.description,
    offers: {
      '@type': 'Offer',
      url: `https://holamichoacanicecream.com/menu/${product.slug}`,
      priceCurrency: 'USD',
      price: formatPrice(product.price),
    },
    itemCondition: 'http://schema.org/NewCondition',
    availability: 'http://schema.org/InStock',
  };

  return (
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    </Head>
  );
};

export default ProductJSONLD;
