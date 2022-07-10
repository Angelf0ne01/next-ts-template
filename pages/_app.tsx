import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { ThemeProvider, apiInstanceFetcher } from 'core';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SWRConfig
        value={{
          fetcher: apiInstanceFetcher,
        }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;
