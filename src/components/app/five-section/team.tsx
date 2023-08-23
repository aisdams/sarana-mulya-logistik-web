import React from 'react';

const teams = [
  {
    title: 'Tim',
    children: [
      {
        title: 'Tim Marketing',
        desc: 'Tim penjualan kami selalu siap membantu klien menemukan layanan dan produk yang tepat untuk meningkatkan kualitas pekerjaan mereka dan meningkatkan efisiensi alur kerja.',
      },
      {
        title: 'Tim Customer Service',
        desc: 'Tim customer service kami memastikan pengiriman dilakukan secara efisien dan aman. Selain itu, kami hadir untuk membantu pelanggan dalam memahami fitur dan fungsi layanan yang dibutuhkan.',
      },
      {
        title: 'Tim Kami',
        desc: 'Tim kami akan membantu Anda untuk lebih memahami layanan, produk, dan sistem kami. Penting bagi kami bahwa klien kami dapat memastikan bahwa semua layanan yang kami tawarkan bernilai tambah untuk bisnis mereka.',
      },
    ],
  },
];
export default function Team() {
  return <div>team</div>;
}
