import { OptionType } from '@/lib/graphcms/types';
import { formatPrice } from '@/lib/graphcms/helper';

interface OptionsProps {
  options: OptionType[];
}

const Options = ({ options }: OptionsProps) => (
  <div className='product__options'>
    <h2 className='productpage__section--header'>Options</h2>
    {options.map((option) => (
      <div className='product__option' key={option.id}>
        <span className='product__optionname'>{option.name}</span>
        <span className='product__optionprice'>{formatPrice(option.price)}</span>
      </div>
    ))}
  </div>
);

export default Options;
