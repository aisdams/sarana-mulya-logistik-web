'use client';

import React, { useState } from 'react';
import { BsQuote } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import Indec from '../../../../public/img/client/indec.png';

const Testimonies = [
  {
    icon: <BsQuote />,
    title:
      'Best service! Cara tim marketing menyampaikan apa yang belum dipahami customer baik dan sabar, sampai saat ini belum ada komplain dari client. Big Thanks pokoknya, Langganan SML ini pasti.',
    user: <BiUser />,
    pt: 'PT. Mitra Jaya Relasi',
  },
  {
    icon: <BsQuote />,
    title:
      'Baguss, masih sesuai prediksi dan dokumen foto sekaligus resi lengkap 👍',
    user: <BiUser />,
    pt: 'PT SCB, CV BMM, PT. Langgeng Lestari',
  },
  {
    icon: <BsQuote />,
    title:
      'Alhamdulillah PT. Sarana Mulya Logistik solusi terbaik. Bisa pick up paket, sekaligus nambah packing kayu dan packing ekstra. Barang aman terjaga, terpercaya, dan selamat sampai tujuan 🥰 tenag banget rasanya kirim mesin senilai 1,2M.',
    user: <BiUser />,
    pt: 'PT Kita Cinta Kecantikan',
  },
  {
    icon: <BsQuote />,
    title:
      'Terima kasih PT. Sarana Mulya Logistik telah memberikan layanan yang baik. Pick up dan proses pengiriman lancar dan tepat waktu. Baik barang besar maupun kecil semua terlayani dengan baik.',
    user: <BiUser />,
    pt: 'Pelita Santoso Jaya',
  },
  {
    icon: <BsQuote />,
    title:
      'Alhamdulillah, dapet ekspedisi yang amanah menjaga barang kami sampai tujuan, bisa nego ongkir, mudah nge klaimnya, pastinya aman kirim barang alkes pakai PT. Sarana Mulya Logistik.. Sukses teruss.. ✊💪',
    user: <BiUser />,
    pt: 'PT. Bintang Sarana Medika',
  },
  {
    icon: <BsQuote />,
    title:
      'Pengiriman lancar, barang tiba sesuai estimasi, harga terjangkau, pelayanannya ramah dan responsif. Terima kasih kerjasamanya semoga dilain waktu bisa menggunakan SML lagi.',
    user: <BiUser />,
    pt: 'Merie Estu Indonesia',
  },
  {
    icon: <BsQuote />,
    title:
      'Pertama saya ingin ucapkan banyak terima kasih kepada PT. Sarana Mulya Logistik atas kerjasama yang selama ini terjalin, mudah-mudahan terus berlanjut seterusnya. Alhamdulillah berkat adanya PT. Sarana Mulya Logistik pengiriman barang baik lewat udara, darat, maupun laut sangat begitu cepat dan aman terkendali, untuk trackng barang begitu cepat dan langsung direspon dengan sangat baik.',
    user: <BiUser />,
    pt: 'Salipolapa',
  },
  {
    icon: <BsQuote />,
    title:
      'Alhamdulillah sangat suka dengan kinerja PT. Sarana Mulya Logistik dan pelaynannya bagus banget.',
    user: <BiUser />,
    pt: 'PT Innovation',
  },
  {
    icon: <BsQuote />,
    title:
      'Komunikasi ke customer OK Armada cukup OK Ketepatan waktu pick up OK Ketepatan waktu sampai ke tujuan cukup OK Attitude OK Cost Kompetitif',
    user: <BiUser />,
    pt: 'Biomedika',
  },
  {
    icon: <BsQuote />,
    title:
      'Terima kasih saya puas dengan kinerja PT. Sarana Mulya Logistik. Barang terkordinasi dengan baik. Semoga PT. Sarana Mulya Logisik semakin maju kedepannya.',
    user: <BiUser />,
    pt: 'PT. Tecom',
  },
  {
    icon: <BsQuote />,
    title:
      'Selama 3 tahun bekerja sama dengan Sarana Mulya Logistik tidak ada kendala apapun, dalam artian pengiriman yang cepat dan tepat sasaran.',
    user: <BiUser />,
    pt: 'PT. Indec Diagnostics',
  },
];

export default function Testimoni() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div className="my-20 mx-auto text-center">
      <h1 className="text-base-blue">Testimoni</h1>
      <h1 className="text-secondary-text font-bold text-2xl">
        Kata Klien Kami!
      </h1>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
