import '@/styles/main.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer, AgreementToast, HeadOpenGraph } from '@/components/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Navbar />
      <main id='main-content'>
        <Component {...pageProps} />
      </main>
      <Footer />
      <ToastContainer theme='colored' closeOnClick pauseOnHover draggable={false} />
      <AgreementToast />
    </>
  );
};

export default MyApp;
