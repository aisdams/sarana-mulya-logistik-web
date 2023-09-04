'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import required modules
import { Autoplay } from 'swiper/modules';
import Client1 from 'public/img/client/medquest.png';
import Client2 from 'public/img/client/sinergi.png';
import Client3 from 'public/img/client/zoepelita.png';
import Client4 from 'public/img/client/genecraft.png';
import Client5 from 'public/img/client/merapiutama.png';
import Client6 from 'public/img/client/human.png';
import Client7 from 'public/img/client/cobra.png';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

export default function Trust() {
  const { t } = useTranslation('home/trust');

  const Clients = [
    {
      Image: Client1,
    },
    {
      Image: Client2,
    },
    {
      Image: Client3,
    },
    {
      Image: Client4,
    },
    {
      Image: Client5,
    },
    {
      Image: Client6,
    },
    {
      Image: Client7,
    },
  ];
  return (
    <motion.div>
      <div className="my-20">
        <h1 className="text-secondary-text text-3xl font-bold">
          <span className="text-base-blue">{t('heading.title')}</span>{' '}
          {t('heading.title2')}
        </h1>
        <hr className="w-[3rem] bg-base-blue h-1 my-3" />

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            '360': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '576': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            '1024': {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          className="mySwiper"
        >
          {Clients.map((client, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={client.Image}
                alt=""
                className="w-40 hover:opacity-70 transition-all duration-300 lg:mx-0 mx-auto grid"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
