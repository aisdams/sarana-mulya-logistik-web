import React, { useState } from 'react';
import Image from 'next/image';
import ImageSide from '../../../public/img/feature-bg.png';
import VisiMisi from '@/components/app/five-section/visi-misi';
import Value from '@/components/app/five-section/value';
import Team from '@/components/app/five-section/team';
import Excess from '@/components/app/five-section/excess';
import Measurement from '@/components/app/five-section/measurement';
import { IoDiamondOutline } from 'react-icons/io5';
import { ImUsers } from 'react-icons/im';
import { BsHandThumbsUpFill, BsRulers } from 'react-icons/bs';
import Counter from '@/components/app/home/counter';
import Recommendation from '@/components/app/home/recommendation';

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
        <div className="bg-base-blue w-full h-auto mt-24 text-white">
          <div className="md:flex justify-between mx-20 py-14">
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

      <div className="my-20 lg:ml-28 mx-28">
        <h1 className="font-bold text-secondary-text text-4xl mb-10 lg-mb-10">
          PT. Sarana Mulya Logistik
        </h1>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-justify">
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

          <div className="hidden lg:block">
            <Image src={ImageSide} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center">
            <div
              className="bg-transparent p-6 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-40 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('VisiMisi')}
            >
              <div className="rounded-full border-2 border-purple-600 w-10 h-10 mx-auto grid text-center items-center mb-3">
                <div className="rounded-full border-2 border-purple-600 w-7 h-7 mx-auto grid justify-center place-content-center items-center">
                  <div className="rounded-full border-2 border-purple-600 w-4 h-4 mx-auto grid justify-center place-content-center items-center"></div>
                </div>
              </div>
              <h2 className="text-lg font-semibold">Visi & Misi</h2>
            </div>
            <div
              className="bg-transparent p-1 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-40 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('Value')}
            >
              <IoDiamondOutline className="text-[#20c9a4] mt-6 text-[2.5rem] items-center justify-center grid mx-auto mb-2" />
              <h2 className="text-lg font-semibold mb-4">Value</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center">
            <div
              className="bg-transparent p-1 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-40 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('Team')}
            >
              <ImUsers className="text-[#df1529] mt-6 text-[2.5rem] items-center justify-center grid mx-auto mb-2" />
              <h2 className="text-lg font-semibold mb-4">Team</h2>
            </div>
            <div
              className="bg-transparent p-1 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-40 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('Excess')}
            >
              <BsHandThumbsUpFill className="text-[#0d6efd] mt-6 text-[2.5rem] items-center justify-center grid mx-auto mb-2" />
              <h2 className="text-lg font-semibold mb-4">Kelebihan</h2>
            </div>
            <div
              className="bg-transparent p-1 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-40 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('Measurement')}
            >
              <BsRulers className="text-[#fd7e14] mt-6 text-[2.5rem] items-center justify-center grid mx-auto mb-2" />
              <h2 className="text-lg font-semibold mb-4">Pengukuran</h2>
            </div>
          </div>
        </div>
      </div>
      <div>{renderSelectedComponent()}</div>

      <div className="mx-28">
        <Counter />
        <div className="!my-32">
          <Recommendation />
        </div>
      </div>
    </>
  );
}
