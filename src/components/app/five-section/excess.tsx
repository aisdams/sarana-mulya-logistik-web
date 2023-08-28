import React from 'react';
import ImageGrad from 'public/img/gradient/sdm.png';
import ImageGrad2 from 'public/img/gradient/culture.png';
import ImageGrad3 from 'public/img/gradient/location.png';
import ImageGrad4 from 'public/img/gradient/facilities.png';
import ImageGrad5 from 'public/img/gradient/itsystem.png';
import ImageGrad6 from 'public/img/gradient/prices.png';
import Image from 'next/image';

const Kelebihan = [
  {
    title: 'Kelebihan',
    children: [
      {
        title: 'SDM',
        icon: ImageGrad,
        desc: 'Memiliki sumber daya manusia tingkat manajerial dan operasional yang berpengalaman dan komitmen yang tinggi serta sangat memahami bisnis logistik dan kargo sehingga dapat memberikan solusi terbaik atas kebutuhan pelanggan.',
      },
      {
        title: 'Budaya Perusahaan',
        icon: ImageGrad2,
        desc: 'Budaya perusahaan yang kuat, terutama dalam service culture dan customer focus dengan nilai utama "Customer Come First".',
      },
      {
        title: 'Operasional Area',
        icon: ImageGrad3,
        desc: 'Memiliki 34 cabang yang berada di seluruh provinsi di Indonesia dengan coverage area 514 kabupaten/kota baik dalam layanan ekspres maupun reguler.',
      },
      {
        title: 'Fasilitas Layanan',
        icon: ImageGrad4,
        desc: 'Penyediaan fasilitas Proof of Delivery (POD), asuransi, packing dan wrapping, pengurusan dokumen Free Trade Zone (FTZ) sampai pada keperluan forklift dan crane untuk memenuhi kebutuhan pelanggan.',
      },
      {
        title: 'Sistem IT',
        icon: ImageGrad5,
        desc: 'Menggunakan sistem yang berbasis IT untuk mendukung layanan yang prima bagi pelanggan yang terus dikembangkan baik di pusat maupun di cabang.',
      },
      {
        title: 'Harga',
        icon: ImageGrad6,
        desc: 'Harga yang kompetitif dengan standar layanan dan solusi layanan terbaik bagi semua pelanggan.',
      },
    ],
  },
];

export default function Excess() {
  return (
    <div className="mx-24 my-20">
      {Kelebihan.map((kel, idx) => (
        <div className="grid lg:grid-cols-3 gap-8" key={idx}>
          {kel.children.map((kelChil, kelIdx) => (
            <div className="flex gap-10" key={kelIdx}>
              <Image src={kelChil.icon} alt="" className="w-14 h-14" />
              <div className="pb-20">
                <h1 className="text-[#485664] font-semibold text-2xl">
                  {kelChil.title}
                </h1>
                <p className="text-gray-secondary text-base mt-3 w-[80%]">
                  {kelChil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
