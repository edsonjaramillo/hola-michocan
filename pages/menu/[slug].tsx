import { getProduct, getProductSlugs, graphCMSClient } from '@/lib/graphcms';
import { formatPrice, ProductType } from '@/lib/graphcms';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
} from 'next';
import { BlurImage, HeadOpenGraph, ProductGridItem, ProductJSONLD } from '@/components/index';

interface ProductPageProps {
  product: ProductType;
}

const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <>
      <HeadOpenGraph
        title={product.name}
        description={product.description}
        image={product.image.url}
        alt={product.image.alt}
      />
      <ProductJSONLD {...product} />
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
            {/* <p className='product__description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, dicta? Saepe
              dolorem iste, ipsum maxime harum ullam, at quod officiis explicabo amet earum
              minima repellendus perspiciatis nobis incidunt, dolore iure.
            </p> */}
            {product.options.length > 0 && (
              <div className='product__options'>
                <h2 className='productpage__section--header'>Options</h2>
                {product.options.map((option) => (
                  <div className='product__option' key={option.id}>
                    <span className='product__optionname'>{option.name}</span>
                    <span className='product__optionprice'>{formatPrice(option.price)}</span>
                  </div>
                ))}
              </div>
            )}
          </article>
        </div>
        <div className='productpage__recommendation'>
          <h2 className='productpage__section--header'>Recommendations</h2>
          <div className='menuitem-grid__recommendation'>
            {product.recommendations.map((product) => (
              <ProductGridItem key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
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
