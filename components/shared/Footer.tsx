import Link from 'next/link';
import { navbarLinks } from '@/components/shared/Navbar';

interface FooterProps {
  header: string;
  children: any;
}

interface FooterSocialIconProps {
  href: string;
  name: string;
  children: any;
}

interface FooterLinkProps {
  slug: string;
  name: string;
}

const FooterSection = ({ header, children }: FooterProps) => (
  <div className='footer__section'>
    <span className='footer__header'>{header}</span>
    {children}
  </div>
);

const FooterLink = ({ slug, name }: FooterLinkProps) => (
  <Link href={slug}>
    <a className='footer__link'>{name}</a>
  </Link>
);
const FooterLinkExternal = ({ slug, name }: FooterLinkProps) => (
  <a
    className='footer__link'
    href={slug}
    rel='noopener nofollow noreferrer external'
    target='_blank'>
    {name}
  </a>
);

const Footer = () => (
  <footer className='footer'>
    <div className='footer__grid'>
      <div className='footer__linksgrid responsive-width-footer'>
        <FooterSection header='Navigation'>
          {navbarLinks.map((link) => (
            <FooterLink key={link.name} slug={link.slug} name={link.name} />
          ))}
        </FooterSection>
        <FooterSection header='Information'>
          <FooterLink slug='/privacy' name='Privacy Policy' />
          <FooterLink slug='/terms' name='Terms and Conditions' />
          <FooterLink slug='/sitemap' name='Sitemap' />
        </FooterSection>
        <FooterSection header='Information'>
          <FooterLinkExternal slug='https://google.com' name='Write a Review' />
        </FooterSection>
      </div>
      <div className='footer__socialgrid'>
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <small className='footer__copyright'>
        &copy;{copyrightYear()}, Hola Michoacan. All Rights Reserved.
      </small>
    </div>
  </footer>
);

const InstagramIcon = () => (
  <FooterSocialIcon href='https://instagram.com' name='Instagram'>
    <svg height='100%' viewBox='0 0 512 512' width='100%' xmlns='http://www.w3.org/2000/svg'>
      <path d='M256,0c-69.526,0 -78.244,0.295 -105.549,1.541c-27.248,1.243 -45.858,5.57 -62.142,11.899c-16.834,6.542 -31.111,15.296 -45.342,29.528c-14.232,14.231 -22.986,28.508 -29.528,45.342c-6.329,16.283 -10.656,34.893 -11.899,62.141c-1.246,27.305 -1.54,36.023 -1.54,105.549c0,69.524 0.294,78.242 1.54,105.547c1.243,27.248 5.57,45.858 11.899,62.141c6.542,16.834 15.296,31.111 29.528,45.344c14.231,14.231 28.508,22.985 45.342,29.527c16.284,6.328 34.894,10.656 62.142,11.899c27.305,1.245 36.023,1.54 105.549,1.54c69.524,0 78.242,-0.295 105.547,-1.54c27.248,-1.243 45.858,-5.571 62.141,-11.899c16.834,-6.542 31.111,-15.296 45.344,-29.527c14.231,-14.233 22.985,-28.51 29.527,-45.344c6.328,-16.283 10.656,-34.893 11.899,-62.141c1.245,-27.305 1.54,-36.023 1.54,-105.547c0,-69.526 -0.295,-78.244 -1.54,-105.549c-1.243,-27.248 -5.571,-45.858 -11.899,-62.141c-6.542,-16.834 -15.296,-31.111 -29.527,-45.342c-14.233,-14.232 -28.51,-22.986 -45.344,-29.528c-16.283,-6.329 -34.893,-10.656 -62.141,-11.899c-27.305,-1.246 -36.023,-1.541 -105.547,-1.541Zm0,46.127c68.354,0 76.451,0.26 103.445,1.492c24.959,1.139 38.514,5.309 47.535,8.814c11.949,4.644 20.477,10.192 29.435,19.15c8.959,8.958 14.506,17.487 19.15,29.435c3.506,9.021 7.676,22.576 8.815,47.535c1.231,26.995 1.492,35.092 1.492,103.447c0,68.354 -0.261,76.451 -1.492,103.445c-1.139,24.959 -5.309,38.514 -8.815,47.535c-4.644,11.949 -10.191,20.477 -19.15,29.435c-8.958,8.959 -17.486,14.506 -29.435,19.15c-9.021,3.506 -22.576,7.676 -47.535,8.814c-26.99,1.232 -35.086,1.493 -103.445,1.493c-68.361,0 -76.455,-0.261 -103.447,-1.493c-24.959,-1.138 -38.514,-5.308 -47.535,-8.814c-11.949,-4.644 -20.477,-10.191 -29.436,-19.15c-8.958,-8.958 -14.506,-17.486 -19.149,-29.435c-3.506,-9.021 -7.676,-22.576 -8.815,-47.535c-1.232,-26.994 -1.492,-35.091 -1.492,-103.445c0,-68.355 0.26,-76.452 1.492,-103.447c1.139,-24.959 5.309,-38.514 8.815,-47.535c4.643,-11.948 10.191,-20.477 19.149,-29.435c8.959,-8.958 17.487,-14.506 29.436,-19.15c9.021,-3.505 22.576,-7.675 47.535,-8.814c26.995,-1.232 35.092,-1.492 103.447,-1.492Z' />
      <path d='M256,341.332c-47.129,0 -85.334,-38.205 -85.334,-85.332c0,-47.129 38.205,-85.334 85.334,-85.334c47.127,0 85.332,38.205 85.332,85.334c0,47.127 -38.205,85.332 -85.332,85.332Zm0,-216.792c-72.604,0 -131.46,58.856 -131.46,131.46c0,72.602 58.856,131.458 131.46,131.458c72.602,0 131.458,-58.856 131.458,-131.458c0,-72.604 -58.856,-131.46 -131.458,-131.46Z' />
      <path d='M423.372,119.346c0,16.967 -13.754,30.72 -30.72,30.72c-16.966,0 -30.72,-13.753 -30.72,-30.72c0,-16.966 13.754,-30.719 30.72,-30.719c16.966,0 30.72,13.753 30.72,30.719Z' />
    </svg>
  </FooterSocialIcon>
);

const FacebookIcon = () => (
  <FooterSocialIcon href='https://facebook.com' name='Facebook'>
    <svg height='100%' viewBox='0 0 512 512' width='100%' xmlns='http://www.w3.org/2000/svg'>
      <path d='M374.245,285.825l14.104,-91.961l-88.233,0l0,-59.677c0,-25.159 12.325,-49.682 51.845,-49.682l40.117,0l0,-78.291c0,0 -36.408,-6.214 -71.214,-6.214c-72.67,0 -120.165,44.042 -120.165,123.775l0,70.089l-80.777,0l0,91.961l80.777,0l0,222.31c16.197,2.542 32.798,3.865 49.709,3.865c16.911,0 33.512,-1.323 49.708,-3.865l0,-222.31l74.129,0Z' />
    </svg>
  </FooterSocialIcon>
);

const FooterSocialIcon = ({ href, name, children }: FooterSocialIconProps) => (
  <a
    href={href}
    className='footer__socialicon'
    target='_blank'
    rel='noreferrer noopener external nofollow'
    aria-label={`Link to ${name} profile`}
    title={`Link to ${name} profile`}>
    {children}
  </a>
);

/**
 * @summary Get the current year for copyright footer
 * @return {number} The current year
 */
const copyrightYear = (): number => {
  return new Date().getFullYear();
};

export default Footer;
