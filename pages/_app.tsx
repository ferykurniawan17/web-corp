import { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/slider-global.css';
import Layout from '../src/core/Layout/Layout';
// import '@fortawesome/fontawesome-svg-core/styles.css';

import AppContextProvider from 'src/shared/contexts/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </Layout>
  );
};

export default MyApp
