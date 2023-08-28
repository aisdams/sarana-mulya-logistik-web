'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import HeaderOne from '../../../../public/img/1.png';
import HeaderTwo from '../../../../public/img/2.png';
import HeaderThree from '../../../../public/img/3.png';
import { BsPlayFill } from 'react-icons/bs';
import SpeedDial from '@/pages/speed-dial';

// Gambar dan konten teks untuk setiap slide
const slides = [
  {
    image: HeaderOne,
    title: 'SARANA MULYA LOGISTIK',
    subtitle: 'YOUR DELIVERY PARTNERT',
    description:
      'JAGONYA REMOTE AREA - MENJANGKAU 514 KOTA/KABUPATEN DI INDONESIA',
  },
  {
    image: HeaderTwo,
    title: 'SARANA MULYA LOGISTIK',
    subtitle: 'YOUR TRUST OUR MISSION',
    description:
      'TELAH BEKERJA SAMA DENGAN 200+ PERUSAHAAN DAN MELAKUKAN 20000+ PENGIRIMAN',
  },
  {
    image: HeaderThree,
    title: 'SARANA MULYA LOGISTIK',
    subtitle: 'HEALTHCARE DELIVERY',
    description: 'RAJANYA PENGIRIMAN ALAT KESEHATAN FARMASI DAN KOSMETIK',
  },
];

export default function Header() {
  return (
    <div className="relative">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-full relative flex items-center justify-center h-screen">
              <Image
                src={slide.image}
                alt=""
                width={2000}
                className="h-screen"
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute text-white text-center">
                <h1
                  className="text-3xl mb-5 font-bold"
                  style={{ textShadow: '2px 2px #707371' }}
                >
                  {slide.title}
                </h1>
                <h1
                  className="text-4xl mb-6 font-bold"
                  style={{ textShadow: '2px 2px #707371' }}
                >
                  {slide.subtitle}
                </h1>
                <h3
                  className="text-[14px] !font-normal mb-5"
                  style={{ textShadow: '2px 2px #707371' }}
                >
                  {slide.description}
                </h3>
                <div className="bg-blue-500 max-w-max items-center mx-auto px-3 py-3 rounded-full flex gap-3 cursor-pointer">
                  <div className="bg-white text-base-blue rounded-full max-w-max text-2xl">
                    <BsPlayFill />
                  </div>
                  Tonton Profile Perusahaan
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute right-24 top-[12rem] z-10 hidden lg:grid">
        <SpeedDial />
      </div>
    </div>
  );
}
