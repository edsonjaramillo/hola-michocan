import Head from 'next/head';
import { useRouter } from 'next/router';

type RobotTagTypes = 'index, follow' | 'noindex, nofollow';
type OpenGraphTypes = 'article' | 'website' | 'profile' | 'book';

interface HeadOpenGraphProps {
  title: string;
  description: string;
  image: string;
  alt: string;
  ogType?: OpenGraphTypes;
  robots?: RobotTagTypes;
  children?: any;
}

const HeadOpenGraph = ({
  title,
  description,
  image,
  alt,
  ogType = 'website',
  robots = 'index, follow',
  children,
}: HeadOpenGraphProps) => {
  const { asPath } = useRouter();
  const url = 'https://holamichoacanicecream.com';

  return (
    <Head>
      <title>{`${title} | Hola Michoacan`}</title>
      <meta name='description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:alt' content={alt} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content={url} />
      <meta property='twitter:url' content={url} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:image:alt' content={alt} />
      <link rel='canonical' href={url + asPath} />
      <meta name='theme-color' content='#0067bb' />
      <meta name='robots' content={robots} />
      {children}
    </Head>
  );
};

export default HeadOpenGraph;
