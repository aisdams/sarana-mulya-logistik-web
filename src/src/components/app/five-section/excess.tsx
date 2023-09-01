import React from 'react';
import ImageGrad from 'public/img/gradient/sdm.png';
import ImageGrad2 from 'public/img/gradient/culture.png';
import ImageGrad3 from 'public/img/gradient/location.png';
import ImageGrad4 from 'public/img/gradient/facilities.png';
import ImageGrad5 from 'public/img/gradient/itsystem.png';
import ImageGrad6 from 'public/img/gradient/prices.png';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Excess() {
  const { t } = useTranslation('fivesec/excess');
  const Kelebihan = [
    {
      title: 'Kelebihan',
      children: [
        {
          title: t('children.title'),
          icon: ImageGrad,
          desc: t('children.desc'),
        },
        {
          title: t('children.title2'),
          icon: ImageGrad2,
          desc: t('children.desc2'),
        },
        {
          title: t('children.title3'),
          icon: ImageGrad3,
          desc: t('children.desc3'),
        },
        {
          title: t('children.title4'),
          icon: ImageGrad4,
          desc: t('children.desc4'),
        },
        {
          title: t('children.title5'),
          icon: ImageGrad5,
          desc: t('children.desc5'),
        },
        {
          title: t('children.title6'),
          icon: ImageGrad6,
          desc: t('children.desc6'),
        },
      ],
    },
  ];

  return (
    <div className="lg:mx-24 mx-3 my-20">
      {Kelebihan.map((kel, idx) => (
        <div className="grid lg:grid-cols-3 gap-8" key={idx}>
          {kel.children.map((kelChil, kelIdx) => (
            <div className="lg:flex grid gap-10" key={kelIdx}>
              <Image
                src={kelChil.icon}
                alt=""
                className="w-14 h-14 mx-auto grid"
              />
              <div className="pb-20 text-center">
                <h1 className="text-[#485664] font-semibold text-2xl">
                  {kelChil.title}
                </h1>
                <p className="text-gray-secondary text-base mt-3 lg:w-[80%]">
                  {kelChil.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
