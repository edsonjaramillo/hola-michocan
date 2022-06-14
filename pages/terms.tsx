import { Terms, HeadOpenGraph } from '@/components/index';

const TermsPage = () => (
  <>
    <HeadOpenGraph
      title='Terms and Conditions'
      description='Hola Michoacan Ice Cream Terms and Conditions'
      image='https://media.graphassets.com/5Ggwcd9ORgGCtQc3vXa4'
      alt='Hola Michoacan Ice Cream Logo'
    />
    <Terms
      name='Hola Michoacan'
      email='contact@holamichoacanicecream.com'
      phone='(256) 422-0128'
      website='https://holamichoacanicecream.com/'
    />
  </>
);

export default TermsPage;
