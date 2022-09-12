import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avancado boilerplate</title>
        <meta
          name="description"
          content="A simple project started to work with ts, next, react and next"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
