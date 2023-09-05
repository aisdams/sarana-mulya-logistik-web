'use client';
import { GetServerSideProps } from 'next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import HeaderOne from 'public/img/1.png';
import HeaderTwo from 'public/img/2.png';
import HeaderThree from 'public/img/3.png';
import { BsPlayFill } from 'react-icons/bs';
import SpeedDial from '@/pages/speed-dial';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Header() {
  const { t } = useTranslation('home/header');

  const slides = [
    {
      image: HeaderOne,
      title: 'SARANA MULYA LOGISTIK',
      subtitle: 'YOUR DELIVERY PARTNERT',
      description: t('childOne.title'),
    },
    {
      image: HeaderTwo,
      title: 'SARANA MULYA LOGISTIK',
      subtitle: 'YOUR TRUST OUR MISSION',
      description: t('childOne.titleTwo'),
    },
    {
      image: HeaderThree,
      title: 'SARANA MULYA LOGISTIK',
      subtitle: 'HEALTHCARE DELIVERY',
      description: t('childOne.titleThree'),
    },
  ];
  return (
    <div>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        effect={'fade'}
        modules={[EffectFade, Autoplay]}
        className="relative"
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
                <h1 className="text-3xl mb-5 font-bold">{slide.title}</h1>
                <h1
                  className="lg:text-5xl mb-6 font-bold leading-6 xs:text-4xl"
                  style={{ textShadow: '2px 2px 10px #131313' }}
                >
                  {slide.subtitle}
                </h1>
                <h3 className="text-base !font-normal mb-5">
                  {slide.description}
                </h3>
                <Link href="https://www.youtube.com/watch?v=0wybm4HFvd4">
                  <button className="bg-blue-500 max-w-max items-center mx-auto px-3 py-3 rounded-full flex gap-3">
                    <div className="bg-white text-base-blue rounded-full max-w-max text-2xl">
                      <BsPlayFill />
                    </div>
                    {t('button.title')}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="lg:absolute lg:translate-y-1/2 lg:right-40 z-[2] top-0 mt-5 lg:mt-0 grid mx-auto items-center justify-center">
        <SpeedDial />
      </div>
    </div>
  );
}
