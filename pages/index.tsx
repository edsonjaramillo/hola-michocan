import { GetServerSideProps } from 'next';
import { CTA, RestaurantJSONLD, AboutUs, FeaturedProducts } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getFeaturedProducts, getProductsJSONLD } from '@/lib/graphcms/queries';
import { ProductType } from '@/lib/graphcms/types';

interface HomepageProps {
  menuProducts: ProductType[];
  featuredProducts: ProductType[];
}

const Home = ({ menuProducts, featuredProducts }: HomepageProps) => (
  <>
    <RestaurantJSONLD products={menuProducts} />
    <CTA src='https://picsum.photos/id/1060/1920/1080' alt='coffee being brewed' />
    <AboutUs src='https://picsum.photos/id/513/1920/1080' alt='coffee being brewed' />
    <FeaturedProducts products={featuredProducts} />
  </>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const { products: menuProducts } = await graphCMSClient.request(getProductsJSONLD);
  const { products: featuredProducts } = await graphCMSClient.request(getFeaturedProducts);

  return {
    props: { menuProducts, featuredProducts },
  };
};

// export const getStaticProps: GetStaticProps = async () => {
// const { products: menuProducts } = await graphCMSClient.request(getProductsJSONLD);

//   return {
// props: { menuProducts },
//   };
// };

export default Home;
