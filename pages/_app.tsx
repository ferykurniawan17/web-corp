import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/slider-global.css';
import Layout from '../src/core/Layout/Layout';
// import '@fortawesome/fontawesome-svg-core/styles.css';

import AppContextProvider from 'src/shared/contexts/AppContext';
import LocalizationContextProvider from '@/src/shared/contexts/LocalizationContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <LocalizationContextProvider>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </LocalizationContextProvider>
    </Layout>
  );
};

export default MyApp
