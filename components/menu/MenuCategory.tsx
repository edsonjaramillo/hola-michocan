import { Section } from '@/components/index';
import { CategoryType, formatPrice, ProductType } from '@/lib/graphcms';
import Image from 'next/image';
import Link from 'next/link';

const MenuCategory = (category: CategoryType) => {
  return (
    <>
      <Section id={category.id} header={category.name}>
        <div className='menuitem-grid'>
          {category.products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </Section>
    </>
  );
};

const ProductItem = (product: ProductType) => (
  <Link href={`/menu/${product.slug}`}>
    <a>
      <article className='menuitem'>
        <div className='menuitem__image'>
          <Image src={product.image.url} layout='fill' objectFit='fill' alt='product image' />
        </div>
        <span>{product.name}</span>
        <span>{formatPrice(product.price)}</span>
      </article>
    </a>
  </Link>
);

export default MenuCategory;
