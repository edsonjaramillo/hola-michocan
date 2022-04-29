import { getCategories, graphCMSClient, CategoryType } from '@/lib/graphcms';
import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps } from 'next';
import { ProductGridItem, Section } from '@/components/index';

interface MenuPageProps {
  categories: CategoryType[];
}

const MenuPage = ({ categories }: MenuPageProps) => {
  return (
    <>
      {categories.map((category) => (
        <Section key={category.id} id={category.id} header={category.name}>
          <div className='menuitem-grid'>
            {category.products.map((product) => (
              <ProductGridItem key={product.id} {...product} />
            ))}
          </div>
        </Section>
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { categories } = await graphCMSClient.request(getCategories);
  return {
    props: { categories },
  };
};

// export const getStaticProps: GetStaticProps = async () => {
//   const { categories }: { categories: CategoryType[] } = await graphCMSClient.request(
//     getCategories
//   );

//   return {
//     props: { categories },
//   };
// };

export default MenuPage;
