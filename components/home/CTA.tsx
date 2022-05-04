import Image from 'next/image';
import Link from 'next/link';

interface CTAProps {
  src: string;
  alt: string;
}

const CTA = ({ src, alt }: CTAProps) => (
  <header className='cta'>
    <div className='cta__content'>
      <div className='cta__contentgrid responsive-width-cta'>
        <h1 className='cta__header'>Your favorite neighborhood homemade ice cream shop!</h1>
        <span className='cta__subheader'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ipsa!
        </span>
        <div className='cta__buttongrid'>
          <Link href='/menu'>
            <a className='cta__button cta--primary'>View Menu</a>
          </Link>
          <a
            rel='noopener nofollow noreferrer external'
            target='_blank'
            href='https://www.google.com/maps/place/Hola+Michoac%C3%A1n+ice+cream+and+coffee+shop/@34.3210944,-86.312755,17z/data=!3m1!4b1!4m5!3m4!1s0x8889f919acd21945:0xb5a3288ef5ab0a37!8m2!3d34.32109!4d-86.310561'
            className='cta__button cta--secondary'>
            Visit Us
          </a>
        </div>
      </div>
    </div>
    <div className='cta__image'>
      <Image src={src} layout='fill' objectFit='cover' alt={alt} quality={35} priority />
    </div>
  </header>
);

export default CTA;
