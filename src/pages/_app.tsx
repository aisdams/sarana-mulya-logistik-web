import '@/styles/globals.css';
import { AppProps } from 'next/app';
import AppProvider from '@/components/providers/app-provider';
import Head from 'next/head';
import Navbar from '@/components/layouts/navbar';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { NextPage } from 'next';

export type NextPageCustomLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  theme?: string;
};

export default function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageCustomLayout;
}) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Sarana Mulya Logistik</title>
        <meta name="keywords" key="keywords" content="Sarana Mulya Logistik" />
        <link
          rel="shortcut icon"
          href="https://saranamulyalogisticscorp.com/assets/img/logo.png"
        />
      </Head>
      <AppProvider>
        <div className={`relative ${isScrolled ? 'bg-white shadow' : ''}`}>
          <Navbar isScrolled={isScrolled} />
          {getLayout(<Component {...pageProps} />)}
          <Footer />
        </div>
      </AppProvider>
    </>
  );
}
