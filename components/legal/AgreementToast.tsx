import { AnimatePresence, motion, Variants } from 'framer-motion';
import Cookie from 'js-cookie';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const animation: Variants = {
  initial: {
    y: 70,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
  animate: {
    y: -25,
    transition: {
      type: 'spring',
      duration: 1,
    },
  },
};

const AgreementToast = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const ExitIcon = () => (
    <button
      type='button'
      aria-label='close agreement'
      className='agreement__exit'
      onClick={() => setIsOpen((prev) => !prev)}>
      <svg xmlns='http://www.w3.org/2000/svg' height='100%' viewBox='0 0 24 24' width='100%'>
        <path d='M0 0h24v24H0V0z' fill='none' />
        <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z' />
      </svg>
    </button>
  );

  useEffect(() => {
    const cookie = Cookie.get('agreement-consent');
    if (cookie) {
      return;
    }
    setIsOpen(true);
    Cookie.set('agreement-consent', 'true', { expires: 365 });
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className='agreement__wrapper'>
          <motion.section
            variants={animation}
            initial='initial'
            animate='animate'
            exit='initial'
            className='agreement'>
            <span className='agreement__text'>
              By using our site you agree to our&nbsp;
              <Link href='/privacy'>
                <a className='agreement__link'>Privacy Policy</a>
              </Link>
              &nbsp;and&nbsp;
              <Link href='/terms'>
                <a className='agreement__link'>Terms and Conditions</a>
              </Link>
              .
            </span>
            <ExitIcon />
          </motion.section>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AgreementToast;
