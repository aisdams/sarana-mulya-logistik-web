import React from 'react';
import ImageGrad from '../../../../public/img/gradient/sdm.png';
import ImageGrad2 from '../../../../public/img/gradient/culture.png';
import ImageGrad3 from '../../../../public/img/gradient/location.png';
import ImageGrad4 from '../../../../public/img/gradient/facilities.png';
import ImageGrad5 from '../../../../public/img/gradient/itsystem.png';
import ImageGrad6 from '../../../../public/img/gradient/prices.png';

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
  return <div>excess</div>;
}
