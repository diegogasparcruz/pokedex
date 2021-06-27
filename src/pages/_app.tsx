import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import GloablStyle from 'styles/global';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GloablStyle />
    </ThemeProvider>
  );
}

export default MyApp;
