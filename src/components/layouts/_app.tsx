import '@/styles/globals.css';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import AppProvider from '@/components/providers/app-provider';
import ProgressBarProvider from '../providers/progress-bar-provider';
import Head from 'next/head';
import Navbar from '@/components/layouts/navbar';
import Footer from '@/components/layouts/footer';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { FaBars } from 'react-icons/fa';
import Sidebar from '@/components/layouts/sidebar';
import { useRouter } from 'next/router';
import ImageSML from '../../public/img/icon2.png';
import Image from 'next/image';
import Script from 'next/script';

export type NextPageCustomLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  theme?: string;
};
function App({
  Component,
  pageProps,
}: AppProps & {
  Component: NextPageCustomLayout;
}) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const preventRightClick = (e: MouseEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('contextmenu', preventRightClick);

    setWindowWidth(window.innerWidth);
    handleWindowSizeChange(window.innerWidth);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('contextmenu', preventRightClick);
    };
  }, []);

  const handleWindowSizeChange = (width: number) => {
    if (width >= 992) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      handleWindowSizeChange(newWindowWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsMenuOpen(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>SARANA MULYA LOGISTIK</title>
        <meta name="keywords" key="keywords" content="Sarana Mulya Logistik" />
        <link
          rel="shortcut icon"
          href="https://saranamulyalogisticscorp.com/assets/img/logo.png"
        />
        {/* <script
          src="https://embed.tawk.to/64ec3a37a91e863a5c102bcb/1h8tc6qjl"
          async
        /> */}
      </Head>

      <Script
        src="https://embed.tawk.to/64ec3a37a91e863a5c102bcb/1h8tc6qjl"
        async
      />
      <AppProvider>
        <div className={`relative ${isScrolled ? 'bg-white shadow' : ''}`}>
          {windowWidth < 992 && (
            <div className="flex items-center">
              <Image
                src={ImageSML}
                alt=""
                className="w-32 absolute top-10 z-20 brightness-[100] left-3"
              />
              <div
                className="menu-icon absolute z-20 right-10 top-10 text-white bg-base-blue p-2"
                onClick={toggleMenu}
              >
                <FaBars className="text-xl" />
              </div>
            </div>
          )}

          {isMenuOpen && (
            <>
              <Sidebar />
              {getLayout(<Component {...pageProps} />)}
              <Footer />
            </>
          )}

          {!isMenuOpen && (
            <>
              <Navbar isScrolled={isScrolled} />
              {getLayout(<Component {...pageProps} />)}
              <Footer />
            </>
          )}
        </div>
      </AppProvider>
    </>
  );
}

export default appWithTranslation(App);
