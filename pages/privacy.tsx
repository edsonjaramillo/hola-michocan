import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';

const PrivacyPage = () => (
  <>
    <HeadOpenGraph
      title='Privacy Policy'
      description='Hola Michoacan Ice Cream Privacy Policy'
      image='https://media.graphassets.com/5Ggwcd9ORgGCtQc3vXa4'
      alt='Hola Michoacan Ice Cream Logo'
    />
    <PrivacyPolicy
      name='Hola Michoacan'
      email='contact@holamichoacanicecream.com'
      phone='(256) 422-0128'
      website='https://holamichoacanicecream.com/'
    />
  </>
);

export default PrivacyPage;
