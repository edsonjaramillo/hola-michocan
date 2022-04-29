import Image from 'next/image';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className='responsive-width cta'>
      <div className='cta__grid'>
        <div className='cta__header'>
          <h1 className='cta__title'>Best Mechanic in Town!!</h1>
          <span className='cta__subtitle'>Come on in an get the best service in town!</span>
          <div className='cta__buttongroup'>
            <Link href='/menu'>
              <a
                title='Link to services section'
                aria-label='Link to services section'
                className='cta__primarybutton'>
                View Menu
              </a>
            </Link>
          </div>
        </div>
        <picture className='cta__image'>
          <Image
            src='https://picsum.photos/id/350/500/500'
            layout='fill'
            alt='picture of a dog'
            priority={true}
          />
        </picture>
      </div>
    </div>
  );
};

export default CTA;
