import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import '@fontsource/bai-jamjuree';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

const theme = extendTheme({
  fonts: {
    heading: '"Bai Jamjuree", sans-serif',
    body: '"Bai Jamjuree", sans-serif',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  // prettier-ignore
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/showcase/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/showcase/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/showcase/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/showcase/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/showcase/favicon/safari-pinned-tab.svg" color="##5bbad5" />
        <link rel="shortcut icon" href="/showcase/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="##5bbad5" />
        <meta name="msapplication-config" content="/showcase/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
