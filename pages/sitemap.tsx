import { navbarLinks } from '@/components/shared/Navbar';
import { graphCMSClient } from '@/lib/graphcms/client';
import { getCategoriesSitemap } from '@/lib/graphcms/queries';
import { CategoryType } from '@/lib/graphcms/types';
import { GetStaticProps } from 'next';
import Link from 'next/link';

interface SitemapPageProps {
  categories: CategoryType[];
}

const Sitemap = ({ categories }: SitemapPageProps) => (
  <div className='sitemap responsive-width-sitemap'>
    <h1 className='sitemap__header'>Sitemap</h1>
    <hr />
    <div className='sitemap__grid'>
      <SitemapSection header='Main'>
        <SitemapLink slug='/' name='Homepage' />
        {navbarLinks.map((link) => (
          <SitemapLink key={link.name} slug={link.slug} name={link.name} />
        ))}
      </SitemapSection>
      <SitemapSection header='Legal'>
        <SitemapLink slug='/policy' name='Privacy Policy' />
        <SitemapLink slug='/terms' name='Terms and Conditions' />
      </SitemapSection>
      {categories.map((category) => (
        <SitemapSection key={category.id} header={category.name}>
          {category.products.map((product) => (
            <SitemapLink key={product.id} slug={`/product/${product.slug}`} name={product.name} />
          ))}
        </SitemapSection>
      ))}
    </div>
  </div>
);

interface SitemapSectionProps {
  header: string;
  children: any;
}

interface SitemapLinkProps {
  slug: string;
  name: string;
}

const SitemapSection = ({ header, children }: SitemapSectionProps) => (
  <section className='sitemap__section'>
    <h2 className='sitemap__section--title'>{header}</h2>
    {children}
  </section>
);

const SitemapLink = ({ slug, name }: SitemapLinkProps) => (
  <Link href={slug}>
    <a className='sitemap__link'>{name}</a>
  </Link>
);

export const getStaticProps: GetStaticProps = async () => {
  const { categories } = await graphCMSClient.request(getCategoriesSitemap);

  return {
    props: { categories },
  };
};

export default Sitemap;
