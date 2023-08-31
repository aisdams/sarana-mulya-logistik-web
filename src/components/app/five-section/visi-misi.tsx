import React from 'react';
import Image from 'next/image';
import VisiIm from 'public/img/svg_icon/visi_svg.svg';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { useTranslation } from 'next-i18next';

export default function VisiMisi() {
  const { t } = useTranslation('fivesec/visi');
  const VisiMisis = [
    {
      title: t('text.title'),
      titleTwo: t('text.titleTwo'),
      titleThree: t('text.titleThree'),
      visiContent: t('text.visionContent'),
      children: [
        {
          misiOne: t('children.missionOne'),
          misiTwo: t('children.missionTwo'),
          misiThree: t('children.missionThree'),
          misiFour: t('children.missionFour'),
        },
      ],
    },
  ];
  return (
    <>
      <div className="lg:flex mx-28 my-20">
        {VisiMisis.map((visimisi, idx) => (
          <>
            <div key={idx}>
              <h1 className="text-4xl text-secondary-text font-semibold my-3">
                {visimisi.titleTwo}
              </h1>
              <p className="text-brown-gray">{visimisi.visiContent}</p>

              <h1 className="text-4xl text-secondary-text font-semibold mt-7">
                {visimisi.titleThree}
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
