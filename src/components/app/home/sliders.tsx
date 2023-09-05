'use client';
import React, { useEffect, useState } from 'react';
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
import { motion, useAnimation } from 'framer-motion';

export default function Sliders() {
  const { t } = useTranslation('home/slider');
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 2600;

      if (!isLoading) {
        if (window.scrollY > offset) {
          controls.start({ opacity: 1 });
        } else {
          controls.start({ opacity: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, controls]);

  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      variants={cardVariants}
    >
      <div className="my-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
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
                  height={300}
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
    </motion.div>
  );
}
