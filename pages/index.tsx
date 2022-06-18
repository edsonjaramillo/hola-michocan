import { GetStaticProps } from 'next';
import { CTA, RestaurantJSONLD, AboutUs, FeaturedProducts } from '@/components/index';
import { HeadOpenGraph } from '@/components/index';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getHomepageProps, getProductsJSONLD } from '@/lib/graphcms/queries';
import { AboutUsType, CallToActionType, CategoryType, ProductType } from '@/lib/graphcms/types';

interface HomepageProps {
  menuProducts: ProductType[];
  callToAction: CallToActionType;
  aboutUs: AboutUsType;
  iceCreamItems: CategoryType;
}

const Home = ({ menuProducts, callToAction, aboutUs, iceCreamItems }: HomepageProps) => (
  <>
    <HeadOpenGraph
      title={callToAction.header}
      description={aboutUs.description}
      image='https://media.graphassets.com/5Ggwcd9ORgGCtQc3vXa4'
      alt='Homepage'
    />
    <RestaurantJSONLD description={aboutUs.description} products={menuProducts} />
    <CTA {...callToAction} />
    <AboutUs {...aboutUs} />
    <FeaturedProducts {...iceCreamItems} />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { products: menuProducts } = await graphCMSClient.request(getProductsJSONLD);
  const {
    callToAction,
    aboutUs,
    category: iceCreamItems,
  } = await graphCMSClient.request(getHomepageProps);

  return {
    props: { menuProducts, callToAction, aboutUs, iceCreamItems },
  };
};

export default Home;
