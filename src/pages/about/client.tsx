import React from 'react';
import Image from 'next/image';
import ClientData from '@/data/ClientData';

export default function Client() {
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center">
        <div className="z-10  transform translate-y-1/2 text-white">
          <h3 className="tracking-[6px] mb-3">PELANGGAN KAMI</h3>
          <h1 className="font-bold text-5xl">Pelanggan</h1>
        </div>
      </div>

      <div className="mx-28">
        <div className="grid grid-cols-4 mx-auto">
          {ClientData.map((client, idx) => (
            <div
              className="border border-secondary-text/20 text-center py-5"
              key={idx}
            >
              <Image
                src={client.image}
                alt=""
                className="w-[120px] text-center mx-auto grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
