import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Fav from '../../public/img/logo.png';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sarana Mulya Logistik</title>
        <meta name="keywords" key="keywords" content="Sarana Mulya Logistik" />
        <link rel="shortcut icon" href="$(`Fav`)" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
