import { CategoryType } from '@/lib/graphcms/types';
import { Section, MenuItem } from '@/components/index';

const FeaturedProducts = ({ products }: CategoryType) => (
  <Section textcolor='section--text--secondary-400' header='Our Amazing Ice Cream Selection'>
    <div className='menuitem-grid'>
      {products.map((product) => (
        <MenuItem key={product.id} {...product} />
      ))}
    </div>
  </Section>
);

export default FeaturedProducts;
