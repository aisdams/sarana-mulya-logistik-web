import React from 'react';
import Recommendation1 from 'public/img/cta-bg.png';
import { useTranslation } from 'next-i18next';

export default function OurMission() {
  const { t } = useTranslation('home/our-mission');
  return (
    <div className="w-full h-full relative">
      <div
        className="h-[360px] bg-cover bg-fixed"
        style={{ backgroundImage: `url(${Recommendation1.src})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>{' '}
        {/* Dark overlay */}
        <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-white text-center grid lg:flex lg:px-28 items-center gap-5">
          <div>
            <h1 className="font-bold text-2xl mb-4">
              Your Trust Is Our Mission
            </h1>
            <p className="mb-4">{t('text.header')}</p>
          </div>
          <button className="text-center grid mx-auto bg-base-blue text-white rounded-full px-5 py-2 w-[12rem] lg:w-[30rem] h-max m-0">
            +62 21 22815019
          </button>
        </div>
      </div>
    </div>
  );
}
