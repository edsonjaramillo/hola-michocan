import { ProductType } from '@/lib/graphcms/types';
import { Section, MenuItem } from '@/components/index';

interface FeaturedProductsProps {
  products: ProductType[];
}

const FeaturedProducts = ({ products }: FeaturedProductsProps) => (
  <Section header='Featured Items'>
    <div className='menuitem-grid'>
      {products.map((product) => (
        <MenuItem key={product.id} {...product} />
      ))}
    </div>
  </Section>
);

export default FeaturedProducts;
