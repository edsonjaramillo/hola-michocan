import { ProductType } from '@/lib/graphcms/types';
import { formatPrice } from '@/lib/graphcms/helper';
import Link from 'next/link';
import { BlurImage } from '@/components/index';

const MenuItem = ({ name, description, price, slug, image }: ProductType) => (
  <Link href={`/menu/${slug}`}>
    <a title={name}>
      <article className='menuitem'>
        <div className='menuitem__image'>
          <BlurImage
            src={image.url}
            layout='fill'
            objectFit='fill'
            alt={image.alt ? image.alt : `${name} ${description}`}
          />
        </div>
        <h3 className='menuitem__name'>{name}</h3>
        <span className='menuitem__price'>{formatPrice(price)}</span>
      </article>
    </a>
  </Link>
);

export default MenuItem;
