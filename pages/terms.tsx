import { Terms, HeadOpenGraph } from '@/components/index';
import { NextPage } from 'next';

const TermsPage: NextPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Terms and Conditions'
        description='fbjhsdbfjbsdgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
        robots='noindex, nofollow'
      />
      <Terms
        name='Hola Michoacan'
        email='contact@holamichoacanicecream.com'
        phone='(256) 422-0128'
        website='https://holamichoacanicecream.com/'
      />
    </>
  );
};

export default TermsPage;
