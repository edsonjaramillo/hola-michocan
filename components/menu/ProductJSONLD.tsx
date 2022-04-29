import { formatPrice, ProductType } from '@/lib/graphcms';
import Head from 'next/head';
const ProductJSONLD = (product: ProductType) => {
  const JSONLD = `
    {
        "@context": "http://schema.org",
        "@type": "Product",
        "name": "${product.name}",
        "image": "${product.image.url}",
        "description": "${product.description}",
        "offers": {
            "@type": "Offer",
            "priceCurrency": "USD",
            "price": "${formatPrice(product.price)}",
            "itemCondition": "http://schema.org/NewCondition",
            "availability": "http://schema.org/InStock"
        }
    }
    `;

  return (
    <Head>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSONLD }} />
    </Head>
  );
};

export default ProductJSONLD;
