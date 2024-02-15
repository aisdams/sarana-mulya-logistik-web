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
import { useRouter } from 'next/router';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Recommendation() {
  const router = useRouter();

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
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="mt-20 mb-40 lg:mx-28 mx-5"
      data-aos="fade-up"
      data-aos-delay="1300"
    >
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
  );
}
