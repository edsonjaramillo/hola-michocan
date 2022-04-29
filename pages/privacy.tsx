import { HeadOpenGraph, PrivacyPolicy } from '@/components/index';
import { NextPage } from 'next';

const PrivacyPage: NextPage = () => {
  return (
    <>
      <HeadOpenGraph
        title='Privacy Policy'
        description='fbjhsdbfjbsdgfdgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdfgdf'
        image='https://via.placeholder.com/1200x630'
        alt='Alt'
        robots='noindex, nofollow'
      />
      <PrivacyPolicy
        name='Hola Michoacan'
        email='contact@holamichoacanicecream.com'
        phone='(256) 422-0128'
        website='https://holamichoacanicecream.com/'
      />
    </>
  );
};

export default PrivacyPage;
