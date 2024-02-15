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
import { useState } from 'react';

export default function Header() {
  const { t } = useTranslation('home/header');

  const [isOpen, setIsOpen] = useState(false);
  const videoUrl = 'https://www.youtube.com/embed/0wybm4HFvd4';
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
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
          delay: 3500,
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
                <button
                  className="bg-blue-500 max-w-max items-center mx-auto px-3 py-3 rounded-full flex gap-3"
                  onClick={togglePopup}
                >
                  <div className="bg-white text-base-blue rounded-full max-w-max text-2xl">
                    <BsPlayFill />
                  </div>
                  {t('button.title')}
                </button>

                <div className="lg:absolute -right-44 z-[2] -top-10 mt-5 lg:mt-0 grid mx-auto items-center justify-center">
                  <SpeedDial />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ overflow: 'hidden' }}
        >
          <div
            className="absolute inset-0 bg-black opacity-75"
            onClick={togglePopup}
          ></div>
          <div className="z-10 bg-white p-4 rounded-lg shadow-lg w-2/3 relative">
            <button
              onClick={togglePopup}
              className="absolute -top-9 right-0 text-white"
            >
              <h1 className="text-xl">X</h1>
            </button>
            <iframe
              src={videoUrl}
              style={{ width: '100%' }}
              height="500"
              frameBorder="0"
              allowFullScreen
              title="YouTube Video"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
