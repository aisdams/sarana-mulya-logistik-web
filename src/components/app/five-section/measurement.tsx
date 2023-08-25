import React from 'react';
import ImageKel from '../../../../public/img/banner/newkinerja.png';
import Image from 'next/image';

const measurements = [
  {
    title: 'Pengukuran',
  },
];
export default function Measurement() {
  return (
    <div className="mx-28 mb-20 lg:p-24 mt-20">
      <Image src={ImageKel} alt="" />
    </div>
  );
}
