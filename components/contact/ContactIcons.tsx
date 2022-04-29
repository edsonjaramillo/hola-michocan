interface ContainerIconProps {
  name: string;
  href: string;
  message: string;
  children: any;
}

const ContactIconWrapper = ({ name, href, children, message }: ContainerIconProps) => (
  <a
    rel='noopener nofollow noreferrer external'
    target='_blank'
    href={href}
    title={`Link to ${name}`}
    aria-label={name}
    className='contact__iconcontainer'>
    {children}
    <span className='contact__buttoninfo'>{message}</span>
  </a>
);

export const LocationIcon = () => (
  <ContactIconWrapper
    name='map directions'
    href='https://www.google.com/maps/place/Hola+Michoac%C3%A1n+ice+cream+and+coffee+shop/@34.3210944,-86.312755,17z/data=!3m1!4b1!4m5!3m4!1s0x8889f919acd21945:0xb5a3288ef5ab0a37!8m2!3d34.32109!4d-86.310561'
    message='Visit'>
    <svg
      className='contact__icon'
      role='img'
      aria-label='map marker icon'
      xmlns='http://www.w3.org/2000/svg'
      height='100%'
      viewBox='0 0 24 24'
      width='100%'>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
    </svg>
  </ContactIconWrapper>
);

export const PhoneIcon = () => (
  <ContactIconWrapper name='phone number' href='tel:2564220128' message='Call'>
    <svg
      className='contact__icon'
      aria-label='phone icon'
      xmlns='http://www.w3.org/2000/svg'
      height='100%'
      viewBox='0 0 24 24'
      width='100%'>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z' />
    </svg>
  </ContactIconWrapper>
);

export const MailIcon = () => (
  <ContactIconWrapper
    name='email'
    href='mailto:mayrangel@holamichoacanicecream.com'
    message='Email'>
    <svg
      className='contact__icon'
      aria-label='email icon'
      xmlns='http://www.w3.org/2000/svg'
      height='100%'
      viewBox='0 0 24 24'
      width='100%'>
      <path d='M0 0h24v24H0z' fill='none' />
      <path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
    </svg>
  </ContactIconWrapper>
);
