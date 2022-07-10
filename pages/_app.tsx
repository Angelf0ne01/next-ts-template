import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { apiInstanceFetcher } from 'core/clients';
import { SnackProvider } from 'core/helpers';
import { ThemeProvider } from 'core/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <SnackProvider>
        <SWRConfig
          value={{
            fetcher: apiInstanceFetcher,
          }}>
          <Component {...pageProps} />
        </SWRConfig>
      </SnackProvider>
    </ThemeProvider>
  );
}

export default MyApp;
