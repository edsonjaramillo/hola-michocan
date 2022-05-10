import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { BlurImage, HeadOpenGraph, ProductJSONLD } from '@/components/index';
import { Options, Recommendations } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getProduct } from '@/lib/graphcms/queries';
import { ProductType } from '@/lib/graphcms/types';
import { formatPrice } from '@/lib/graphcms/helper';

interface ProductPageProps {
  product: ProductType;
}

const ProductPage = ({ product }: ProductPageProps) => (
  <>
    <HeadOpenGraph
      title={product.name}
      description={product.description}
      image={product.image.url}
      alt={product.image.alt}
    />
    <ProductJSONLD product={product} />
    <div className='productpage responsive-width-product'>
      <div className='productpage__grid'>
        <div className='product__image'>
          <BlurImage
            src={product.image.url}
            alt={product.image.alt}
            layout='fill'
            objectFit='fill'
          />
        </div>
        <article className='product'>
          <h1 className='product__name'>{product.name}</h1>
          <span className='product__price'>{formatPrice(product.price)}</span>
          <p className='product__description'>{product.description}</p>
          {product.options.length > 0 && <Options options={product.options} />}
        </article>
      </div>
      {product.recommendations.length > 0 && (
        <Recommendations recommendations={product.recommendations} />
      )}
    </div>
  </>
);

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { slug } = ctx.params as { slug: string };

  const { product } = await graphCMSClient.request(getProduct, { slug });

  return {
    props: { product },
  };
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { products } = await graphCMSClient.request(getProductSlugs);

//   const paths = products.map((product: ProductType) => ({
//     params: { slug: product.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps: GetStaticProps = async (ctx) => {
//   const { slug } = ctx.params as { slug: string };

//   const { product } = await graphCMSClient.request(getProduct, { slug });

//   return {
//     props: { product },
//   };
// };

export default ProductPage;
