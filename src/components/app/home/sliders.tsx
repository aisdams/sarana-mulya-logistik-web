'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import ImageAnn from 'public/img/ann/322.jpg';
import ImageAnn2 from 'public/img/ann/311.jpg';
import ImageAnn3 from 'public/img/ann/300.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Sliders() {
  const { t } = useTranslation('home/slider');

  const Anns = [
    {
      Image: ImageAnn,
      title: t('slider.title'),
      link: 'https://www.youtube.com/watch?v=p9-HgzQ76gw',
    },
    {
      Image: ImageAnn2,
      title: t('slider.title2'),
      link: 'https://www.youtube.com/watch?v=9cET48zjfbQ',
    },
    {
      Image: ImageAnn3,
      title: t('slider.title3'),
      link: 'https://www.youtube.com/watch?v=wMRxu9xMlXY',
    },
  ];

  return (
    <div className="my-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {Anns.map((ann, idx) => (
          <SwiperSlide key={idx}>
            <div className="lg:flex grid">
              <Image
                src={ann.Image}
                alt=""
                width={700}
                height={400}
                className="w-full"
              />
              <div className="py-[7rem] px-[3.5rem]">
                <h3 className="text-secondary-text text-[14px] leading-relaxed mb-3">
                  {ann.title}
                </h3>
                <Link href={ann.link} passHref legacyBehavior>
                  <a
                    className="bg-base-blue text-white text-sm rounded-md px-2 py-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('button.title')}
                  </a>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
