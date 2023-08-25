'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import ImageAnn from '../../../../public/img/ann/322.jpg';
import ImageAnn2 from '../../../../public/img/ann/311.jpg';
import ImageAnn3 from '../../../../public/img/ann/300.jpg';
import Image from 'next/image';

const Anns = [
  {
    Image: ImageAnn,
    title: `“Hai Saraners ! Yuk kita bermain pantun dengan karyawan sarana mulya logistik, semoga terhibur.”`,
  },
  {
    Image: ImageAnn2,
    title: `“Berikut tipe - tipe customer & solusi layanannya, simak videonya sampai habis, semoga bermanfaat. ”`,
  },
  {
    Image: ImageAnn3,
    title: `“Berikut prosedur pengiriman barang jalur udara, simak videonya sampai habis, semoga bermanfaat.”`,
  },
];

export default function Sliders() {
  return (
    <div className="my-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
              <Image src={ann.Image} alt="" width={600} className="w-full" />
              <div className="py-[7rem] px-[3.5rem]">
                <h3 className="text-secondary-text text-[14px] leading-relaxed">
                  {ann.title}
                </h3>
                <button className="bg-base-blue text-white text-sm px-2 py-1 mt-5 rounded-md">
                  Klik Disini
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
