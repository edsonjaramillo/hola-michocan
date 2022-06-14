import { graphCMSClient } from '@/lib/graphcms/client';
import { getCategories } from '@/lib/graphcms/queries';
import { CategoryType } from '@/lib/graphcms/types';
import { GetServerSideProps } from 'next';
import { HeadOpenGraph, MenuItem, Section } from '@/components/index';

interface MenuPageProps {
  categories: CategoryType[];
}

const MenuPage = ({ categories }: MenuPageProps) => {
  return (
    <>
      <HeadOpenGraph
        title='Our Menu'
        description='Hola Michoacan Ice Cream Menu page that features all our amazing homemade products'
        image='https://media.graphassets.com/5Ggwcd9ORgGCtQc3vXa4'
        alt='Hola Michoacan Ice Cream Logo'
      />
      {categories.map((category) => (
        <Section
          textcolor='section--text--secondary-400'
          key={category.id}
          id={category.id}
          header={category.name}>
          <div className='menuitem-grid'>
            {category.products.map((product) => (
              <MenuItem key={product.id} {...product} />
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
