import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/globals.css';
import '../assets/css/slider-global.css';
import Layout from '../src/core/Layout/Layout';
import { SSRProvider } from 'react-bootstrap';

import AppContextProvider from 'src/shared/contexts/AppContext';
import LocalizationContextProvider from '@/src/shared/contexts/LocalizationContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Layout>
        <LocalizationContextProvider>
          <AppContextProvider>
            <Component {...pageProps} />
          </AppContextProvider>
        </LocalizationContextProvider>
      </Layout>
    </SSRProvider>
  );
};

export default MyApp
