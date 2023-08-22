import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/layouts/Navbar';
import Header from '@/components/layouts/Header';
import Track from '@/app/home/Track';
import Why from '@/app/home/Why';
import Trust from '@/app/home/Trust';
import OurService from '@/app/home/OurService';
import Sliders from '@/app/home/Sliders';
import Blog from '@/app/home/Blog';
import Counter from '@/app/home/Counter';
import Testimoni from '@/app/home/Testimoni';
import FAQ from '@/app/home/FAQ';
import Recommendation from '@/app/home/Recommendation';
import OurMission from '@/app/home/OurMission';
import Footer from '@/components/layouts/Footer';

export default function Home() {
  return (
    <div className="relative">
      <div className="w-full absolute top-0 z-10">
        <Navbar />
      </div>
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
      <OurMission />
      <Footer />
    </div>
  );
}
