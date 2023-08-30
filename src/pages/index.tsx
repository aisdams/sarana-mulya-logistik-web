import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from '@/components/layouts/header';
import Track from '@/components/app/home/track';
import Why from '@/components/app/home/why';
import Trust from '@/components/app/home/trust';
import OurService from '@/components/app/home/our-service';
import Sliders from '@/components/app/home/sliders';
import Blog from '@/components/app/home/blog';
import Counter from '@/components/app/home/counter';
import Testimoni from '@/components/app/home/testimoni';
import FAQ from '@/components/app/home/faq';
import Recommendation from '@/components/app/home/recommendation';
import { GetServerSideProps } from 'next';

export const getStaticProps: GetServerSideProps = async ({ locale }) => {
  const selectedLocale = locale || 'id'; // Default to 'en' if locale is not provided
  return {
    props: {
      ...(await serverSideTranslations(selectedLocale, [
        'home/header',
        'home/track',
        'home/why',
        'home/trust',
        'home/our-services',
        'home/slider',
        'home/counter',
        'home/testimoni',
        'home/faq',
        'home/our-mission',
        'footer',
      ])),
    },
  };
};

export default function Home() {
  return (
    <div>
      <Header />
      <div className="lg:mx-28 xs:mx-0">
        <Track />
        <Why />
        <Trust />
        <OurService />
      </div>
      <div className="lg:mr-28 xs:mr-0">
        <Sliders />
      </div>
      <div className="lg:mx-28 mx-5">
        <Blog />
        <Counter />
        <Testimoni />
        <FAQ />
        <Recommendation />
      </div>
    </div>
  );
}
