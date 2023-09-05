import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Recommendation1 from 'public/img/rekomendasi/1.jpg';
import Recommendation2 from 'public/img/rekomendasi/2.jpg';
import Recommendation3 from 'public/img/rekomendasi/3.jpg';
import Recommendation4 from 'public/img/rekomendasi/4.jpg';
import Recommendation5 from 'public/img/rekomendasi/5.jpg';
import Recommendation6 from 'public/img/rekomendasi/6.jpg';
import Recommendation7 from 'public/img/rekomendasi/7.jpg';
import Recommendation8 from 'public/img/rekomendasi/8.png';
import Recommendation9 from 'public/img/rekomendasi/9.png';
import Recommendation10 from 'public/img/rekomendasi/10.png';
import Recommendation11 from 'public/img/rekomendasi/11.png';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

export default function Recommendation() {
  const controls = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const Recommendations = [
    {
      image: Recommendation1,
    },
    {
      image: Recommendation2,
    },
    {
      image: Recommendation3,
    },
    {
      image: Recommendation4,
    },
    {
      image: Recommendation5,
    },
    {
      image: Recommendation6,
    },
    {
      image: Recommendation7,
    },
    {
      image: Recommendation8,
    },
    {
      image: Recommendation9,
    },
    {
      image: Recommendation10,
    },
    {
      image: Recommendation11,
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
      const offset = 4500;

      if (!isLoading) {
        if (window.scrollY > offset) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading]);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 2 } });
    } else {
      controls.start({ opacity: 0, y: -50, transition: { duration: 2 } });
    }
  }, [controls, isVisible]);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      variants={cardVariants}
    >
      <div className="mt-20 mb-40 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            '360': {
              slidesPerView: 1,
            },
            '576': {
              slidesPerView: 1,
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
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Recommendations.map((rec, idx) => (
            <SwiperSlide key={idx}>
              <Image src={rec.image} alt="" className="w-[180px] mx-auto " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
