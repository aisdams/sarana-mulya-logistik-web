import '@/styles/globals.css';
import { AppProps } from 'next/app';
import AppProvider from '@/components/providers/app-provider';
import Head from 'next/head';
import Navbar from '@/components/layouts/navbar';
import Header from '@/components/layouts/header';
import Footer from '@/components/layouts/footer';
import { ReactElement, ReactNode, useEffect, useState } from 'react';
import { NextPage } from 'next';
import { FaBars } from 'react-icons/fa';
import Sidebar from '@/components/layouts/navbar/sidebar';

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
  const [windowWidth, setWindowWidth] = useState(0); // Track window width
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

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

    // Initial check on mount
    setWindowWidth(window.innerWidth); // Track window width on mount
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
      setWindowWidth(newWindowWidth); // Update window width on resize
      handleWindowSizeChange(newWindowWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head>
        <title>SARANA MULYA LOGISTIK</title>
        <meta name="keywords" key="keywords" content="Sarana Mulya Logistik" />
        <link
          rel="shortcut icon"
          href="https://saranamulyalogisticscorp.com/assets/img/logo.png"
        />
      </Head>
      <AppProvider>
        <div className={`relative ${isScrolled ? 'bg-white shadow' : ''}`}>
          {/* Conditionally render menu icon */}
          {windowWidth < 992 && (
            <div
              className="menu-icon absolute z-20 right-10 top-10 text-white bg-base-blue p-2"
              onClick={toggleMenu}
            >
              <FaBars className="text-xl" />
            </div>
          )}

          {/* Render content based on menu icon state */}
          {isMenuOpen && (
            <>
              <Sidebar />
              {getLayout(<Component {...pageProps} />)}
              <Footer />
            </>
          )}

          {!isMenuOpen && (
            <>
              {/* Render Navbar, Component, and Footer */}
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
