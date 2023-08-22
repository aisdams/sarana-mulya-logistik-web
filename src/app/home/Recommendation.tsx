import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Recommendation1 from '../../../public/img/rekomendasi/1.jpg';
import Recommendation2 from '../../../public/img/rekomendasi/2.jpg';
import Recommendation3 from '../../../public/img/rekomendasi/3.jpg';
import Recommendation4 from '../../../public/img/rekomendasi/4.jpg';
import Recommendation5 from '../../../public/img/rekomendasi/5.jpg';
import Recommendation6 from '../../../public/img/rekomendasi/6.jpg';
import Recommendation7 from '../../../public/img/rekomendasi/7.jpg';
import Recommendation8 from '../../../public/img/rekomendasi/8.png';
import Recommendation9 from '../../../public/img/rekomendasi/9.png';
import Recommendation10 from '../../../public/img/rekomendasi/10.png';
import Recommendation11 from '../../../public/img/rekomendasi/11.png';
import Image from 'next/image';

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

export default function Recommendation() {
  return (
    <div className="my-20 mx-3">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {Recommendations.map((rec, idx) => (
          <SwiperSlide key={idx}>
            <Image src={rec.image} alt="" className="w-[180px]" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
