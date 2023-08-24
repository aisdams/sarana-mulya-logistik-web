import React from 'react';
import Image from 'next/image';
import VisiIm from '../../../../public/img/svg_icon/visi_svg.svg';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const VisiMisis = [
  {
    title: 'Visi & Misi',
    titleTwo: 'Visi',
    titleThere: 'Misi',
    visiContent:
      'Visi kami adalah menjadi salah satu perusahaan jasa pengiriman domestik terbaik yang berkomitmen terhadap pengembangan sumber daya manusia, kuantitas jaringan dan sistem operasional yang andal.',
    children: [
      {
        misiOne:
          'Berkomitmen untuk memberikan pelayanan terbaik terhadap pelanggan.',
        misiTwo: 'B Meningkatkan performa perusahaan secara berkesinambungan.',
        misiThree:
          'Menjadi solusi atas kebutuhan jasa pengiriman domestik area.',
        misiFour:
          'Berperan aktif dalam meningkatkan pengetahuan dan keterampilan logistik.',
      },
    ],
  },
];
export default function VisiMisi() {
  return (
    <>
      <div className="flex mx-28 my-20">
        {VisiMisis.map((visimisi, idx) => (
          <>
            <div key={idx}>
              <h1 className="text-4xl text-secondary-text font-semibold my-3">
                {visimisi.titleTwo}
              </h1>
              <p className="text-brown-gray">{visimisi.visiContent}</p>

              <h1 className="text-4xl text-secondary-text font-semibold mt-7">
                {visimisi.titleThere}
              </h1>
              <div className="flex items-center my-6">
                <BsFillCheckCircleFill className="mr-2 text-base-blue text-[22px]" />
                <p>{visimisi.children[0].misiOne}</p>
              </div>
              <div className="flex items-center mb-5">
                <BsFillCheckCircleFill className="mr-2 text-base-blue text-[22px]" />
                <p>{visimisi.children[0].misiTwo}</p>
              </div>
              <div className="flex items-center mb-5">
                <BsFillCheckCircleFill className="mr-2 text-base-blue text-[22px]" />
                <p>{visimisi.children[0].misiThree}</p>
              </div>
              <div className="flex items-center mb-5">
                <BsFillCheckCircleFill className="mr-2 text-base-blue text-[22px]" />
                <p>{visimisi.children[0].misiFour}</p>
              </div>
            </div>

            <div className="">
              <Image src={VisiIm} alt="" />
            </div>
          </>
        ))}
      </div>
    </>
  );
}
