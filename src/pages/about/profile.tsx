import React, { useState } from 'react';
import Image from 'next/image';
import ImageSide from '../../../public/img/feature-bg.png';
import VisiMisi from '@/components/app/five-section/visi-misi';
import Value from '@/components/app/five-section/value';
import Team from '@/components/app/five-section/team';
import Excess from '@/components/app/five-section/excess';
import Measurement from '@/components/app/five-section/measurement';

export default function Profile() {
  const [selectedComponent, setSelectedComponent] = useState('');

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'VisiMisi':
        return <VisiMisi />;
      case 'Value':
        return <Value />;
      case 'Team':
        return <Team />;
      case 'Excess':
        return <Excess />;
      case 'Measurement':
        return <Measurement />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">INFORMASI SEPUTAR PERUSAHAAN</h3>
          <h1 className="font-bold text-5xl">Tentang Kami</h1>
        </div>
      </div>

      <div className="mt-20 mx-28">
        <div className="bg-base-blue w-full h-[190px] mt-24 text-white">
          <div className="flex justify-between mx-20 py-14">
            <div className="">
              <h3 className="text-sm">DAPATKAN RESPON CEPAT DARI TIM KAMI</h3>
              <h1 className="text-3xl font-semibold mt-2">
                JANGAN RAGU MENGHUBUNGI KAMI
              </h1>
            </div>

            <div className="button">
              <button className="text-base-blue bg-white px-8 py-5">
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 ml-28">
        <h1 className="font-bold text-secondary-text text-4xl -mb-10">
          PT. Sarana Mulya Logistik
        </h1>
        <div className="grid grid-cols-2 gap-10 relative items-center">
          <div className=" text-justify">
            <h3>
              Didirikan pada tahun 2018, PT. SARANA MULYA LOGISTIK merupakan
              perusahaan jasa pengiriman yang menyediakan jasa express (Sameday,
              ONS, Express Standard, Port to Port), regular (Reguler standart
              dan Kubikasi), container (20ft maupun 40ft), trucking (Blind Van,
              CDE, CDD, Fuso Tronton, Cold Chain, WingBox) dan exim. Mulai dari
              niat yang sederhana, Pt. Sarana Mulya Logistik ingin berkontribusi
              pada Supply Chain di Indonesia. Dan pada saat ini PT. Sarana Mulya
              Logistik juga ingin berkontribusi pada pemerataan pelayanan
              kesehatan di Indonesia. Maka dari itu PT. Sarana Mulya Logistik
              adalah jasa pengiriman yang berfokus pada pengiriman alat
              kesehatan, farmasi, dan kosmetik.
            </h3>
            <h3 className="mt-3">
              Bagian dari kesuksesan kami berasal dari moto kami You Trust Is
              Our Mission. Moto ini telah menjadi DNA dalam kehidupan
              sehari-hari untuk memberikan pelayanan yang terbaik dan
              bertanggung jawab kepada semua pelanggan. Kepuasan pelanggan
              sangat penting bagi kami, oleh karena itu kami berkomitmen untuk
              selalu memberikan standar pelayanan terbaik dan memberikan solusi
              yang tepat untuk kebutuhan pelanggan.
            </h3>
            <h3 className="mt-3">
              Melalui operasi logistik yang efisien, kami telah melayani klien
              dari berbagai industri di seluruh wilayah utama Indonesia. Salah
              satu pertumbuhan strategis utama kami adalah membuka lebih banyak
              kantor perwakilan di bagian lain Indonesia.
            </h3>
          </div>

          <div className="">
            <Image src={ImageSide} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center">
            <div
              className="bg-white p-6 rounded shadow w-40 h-40 m-2"
              onClick={() => setSelectedComponent('VisiMisi')}
            >
              <h2 className="text-lg font-semibold mb-4">Visi & Misi</h2>
              <p className="text-gray-700">
                Tuliskan visi dan misi Anda di sini.
              </p>
            </div>
            <div
              className="bg-white p-6 rounded shadow w-40 h-40 m-2"
              onClick={() => setSelectedComponent('Value')}
            >
              <h2 className="text-lg font-semibold mb-4">Value</h2>
              <p className="text-gray-700">
                Tuliskan nilai-nilai Anda di sini.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center">
            <div
              className="bg-white p-6 rounded shadow w-40 h-40 m-2"
              onClick={() => setSelectedComponent('Team')}
            >
              <h2 className="text-lg font-semibold mb-4">Team</h2>
              <p className="text-gray-700">
                Tuliskan informasi tentang tim Anda di sini.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow w-40 h-40 m-2">
              <h2 className="text-lg font-semibold mb-4">Kelebihan</h2>
              <p className="text-gray-700">
                Tuliskan keunggulan-keunggulan yang dimiliki di sini.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow w-40 h-40 m-2">
              <h2 className="text-lg font-semibold mb-4">Pengukuran</h2>
              <p className="text-gray-700">
                Tuliskan metrik pengukuran di sini.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>{renderSelectedComponent()}</div>
    </>
  );
}
