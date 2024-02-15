'use client';

import React, { useEffect, useState } from 'react';
import { BsQuote } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Indec from '../../../../public/img/client/indec.png';
import { useTranslation } from 'next-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimoni() {
  const { t } = useTranslation('home/testimoni');
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  const Testimonies = [
    {
      icon: <BsQuote />,
      title: t('card.desc'),
      user: <BiUser />,
      pt: 'PT. Mitra Jaya Relasi',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc2'),
      user: <BiUser />,
      pt: 'PT SCB, CV BMM, PT. Langgeng Lestari',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc3'),
      user: <BiUser />,
      pt: 'PT Kita Cinta Kecantikan',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc4'),
      user: <BiUser />,
      pt: 'Pelita Santoso Jaya',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc5'),
      user: <BiUser />,
      pt: 'PT. Bintang Sarana Medika',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc6'),
      user: <BiUser />,
      pt: 'Merie Estu Indonesia',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc7'),
      user: <BiUser />,
      pt: 'Salipolapa',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc8'),
      user: <BiUser />,
      pt: 'PT Innovation',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc9'),
      user: <BiUser />,
      pt: 'Biomedika',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc10'),
      user: <BiUser />,
      pt: 'PT. Tecom',
    },
    {
      icon: <BsQuote />,
      title: t('card.desc11'),
      user: <BiUser />,
      pt: 'PT. Indec Diagnostics',
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="my-20 text-center lg:mx-28 mx-auto"
      data-aos="fade-up"
      data-aos-delay="900"
    >
      <h1 className="text-base-blue">{t('heading.title')}</h1>
      <h1 className="text-secondary-text font-bold text-2xl">
        {t('heading.title2')}
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '360': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '576': {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          '992': {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={onSlideChange}
        centeredSlides={true}
      >
        {Testimonies.map((testimoni, idx) => (
          <SwiperSlide key={idx}>
            <div className={`box mt-5 ${idx === activeIndex ? 'center' : ''}`}>
              <div
                className={`rounded-lg pb-5 ${
                  idx === activeIndex ? 'bg-gray-500' : ''
                }`}
              >
                <hr className="bg-base-blue w-full h-1 relative" />
                <div className="mx-5">
                  <div
                    className={`absolute top-0 rounded-full bg-base-blue text-white p-3 max-w-max z-10 ${
                      idx === activeIndex ? 'center' : ''
                    }`}
                  >
                    {testimoni.icon}
                  </div>

                  <h1
                    className={`text-${
                      idx === activeIndex ? 'white' : 'black'
                    } text-justify text-sm mt-8`}
                  >
                    {testimoni.title}
                  </h1>

                  <div className="flex mt-5 gap-2 items-center">
                    <div
                      className={`bg-base-blue text-${
                        idx === activeIndex ? 'white' : 'black'
                      } rounded-full p-2 text-3xl`}
                    >
                      {testimoni.user}
                    </div>
                    <h1
                      className={`text-${
                        idx === activeIndex ? 'white' : 'black'
                      } text-sm text-left`}
                    >
                      {testimoni.pt}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
