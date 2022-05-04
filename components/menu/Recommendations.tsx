import { ProductType } from '@/lib/graphcms/types';
import { MenuItem } from '@/components/index';

interface RecommendationsProps {
  recommendations: ProductType[];
}

const Recommendations = ({ recommendations }: RecommendationsProps) => (
  <div className='productpage__recommendation'>
    <h2 className='productpage__section--header'>Recommendations</h2>
    <div className='menuitem-grid__recommendation'>
      {recommendations.map((product) => (
        <MenuItem key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default Recommendations;
