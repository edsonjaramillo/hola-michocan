import Image from 'next/image';

interface AboutUsProps {
  src: string;
  alt: string;
}

const AboutUs = ({ src, alt }: AboutUsProps) => (
  <div className='aboutus'>
    <div className='aboutus__image'>
      <Image src={src} alt={alt} layout='fill' objectFit='cover' priority />
    </div>
    <div className='aboutus__information'>
      <h2 className='aboutus__header'>Who are we?</h2>
      <p className='aboutus__subtext'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, soluta magni adipisci
        sequi saepe pariatur nam qui voluptatem beatae, quo deserunt culpa optio sint debitis
        error commodi at laborum perferendis.
      </p>
      <a
        href='https://www.google.com/maps/place/Hola+Michoac%C3%A1n+ice+cream+and+coffee+shop/@34.3210944,-86.312755,17z/data=!3m1!4b1!4m5!3m4!1s0x8889f919acd21945:0xb5a3288ef5ab0a37!8m2!3d34.32109!4d-86.310561'
        className='aboutus__link'>
        Come Visit Us!
      </a>
    </div>
  </div>
);
export default AboutUs;
