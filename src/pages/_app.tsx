import { AppProps } from 'next/app';

import GloablStyle from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GloablStyle />
    </>
  );
}

export default MyApp;
