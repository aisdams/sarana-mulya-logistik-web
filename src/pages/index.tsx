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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'navbar',
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
        'layouts/footer',
      ])),
    },
  };
};

export default function Home() {
  return (
    <div>
      <Header />
      <Track />
      <Why />
      <Trust />
      <OurService />
      <Sliders />
      <Blog />
      <Counter />
      <Testimoni />
      <FAQ />
      <Recommendation />
    </div>
  );
}
