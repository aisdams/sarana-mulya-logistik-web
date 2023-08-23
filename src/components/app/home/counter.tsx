import React from 'react';
import { FaHeadphones, FaGlobe, FaUsers, FaTruck } from 'react-icons/fa';
import { PiGarage } from 'react-icons/pi';

const Counters = [
  {
    icon: <FaGlobe />,
    title: '514 +',
    paragraf: 'Area Tercover',
  },
  {
    icon: <PiGarage />,
    title: '36',
    paragraf: 'Cabang',
  },
  {
    icon: <FaUsers />,
    title: '600 +',
    paragraf: 'Pelanggan',
  },
  {
    icon: <FaTruck />,
    title: '20000 +',
    paragraf: 'Pengiriman',
  },
];

export default function Counter() {
  return (
    <div className="my-20">
      <h5 className="text-base-blue">Fakta</h5>
      <div className="grid grid-cols-2">
        <div>
          <h1 className="font-bold text-3xl my-5 text-secondary-text">
            Jasa Pengiriman Alat Kesehatan & Farmasi Terbaik di Indonesia
          </h1>
          <p className="text-secondary-text text-sm">
            Sarana Mulya Logistik telah melakukan ribuan pengiriman ke seluruh
            wilayah di Indonesia terutama pada pengiriman alat kesehatan dan
            farmasi, sekaligus ingin berkontribusi pada pemerataan alat
            kesehatan dan farmasi di Indonesia.
          </p>

          <div className="flex gap-5 items-center">
            <div className="bg-white p-3 shadow-[2px_10px_10px_0px_rgba(0,0,0,0.2)]">
              <FaHeadphones className="text-3xl text-base-blue" />
            </div>
            <div className="mt-10">
              <h3 className="font-bold text-sm mb-5">
                Hubungi kami jika ada pertanyaan!
              </h3>
              <div className="text-base-blue text-[14px]">
                <h3>Phone : 021 - 2281 - 5019</h3>
                <h3>WhatsApp : 0858 - 1055 - 8522</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 px-10">
          {Counters.map((counter, idx) => (
            <div className="text-base-blue" key={idx}>
              <div className="text-3xl"> {counter.icon}</div>
              <h1 className="font-bold text-[2rem] mt-3">{counter.title}</h1>
              <p>{counter.paragraf}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
