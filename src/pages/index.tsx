import React from 'react';
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

export default function Home() {
  return (
    <div>
      <Header />
      <div className="mx-28">
        <Track />
        <Why />
        <Trust />
        <OurService />
      </div>
      <div className="mr-28">
        <Sliders />
      </div>
      <div className="mx-28">
        <Blog />
        <Counter />
        <Testimoni />
        <FAQ />
        <Recommendation />
      </div>
    </div>
  );
}
