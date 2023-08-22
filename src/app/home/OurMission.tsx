import React from 'react';
import Recommendation1 from '../../../public/img/cta-bg.png';
import Image from 'next/image';

export default function OurMission() {
  return (
    <div className="w=full h-full mt-20">
      <div className="relative">
        <Image
          src={Recommendation1}
          alt=""
          className="h-[460px] bg-cover bg-fixed opacity-80"
        />
        <div className="absolute top-1/2 text-white grid grid-cols-[4fr_1fr] mx-20 gap-5 text-center items-center">
          <div>
            <h1 className="font-bold text-2xl">Your trust Is Our Mission</h1>
            <p>
              Bagian dari kesuksesan kami berasal dari moto kami Your Trust is
              Our Mission. Motto ini telah menjadi DNA dalam kehidupan kita
              sehari-hari dimana kami selalu berusaha untuk memberikan pelayanan
              yang terbaik dan bertanggung jawab kepada semua pelanggan kami.
            </p>
          </div>
          <div>
            <button className="bg-base-blue text-white rounded-full px-5 py-2">
              +62 21 22815019
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
