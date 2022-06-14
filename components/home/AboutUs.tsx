import { AboutUsType } from '@/lib/graphcms/types';
import Image from 'next/image';

const AboutUs = ({ header, description, image }: AboutUsType) => (
  <div id='about' className='aboutus'>
    <div className='aboutus__image'>
      <Image src={image.url} alt='Hola Michocan Ice Cream Shop' layout='fill' objectFit='cover' priority />
    </div>
    <div className='aboutus__information'>
      <h2 className='aboutus__header'>{header}</h2>
      <p className='aboutus__subtext'>{description}</p>
    </div>
  </div>
);
export default AboutUs;
