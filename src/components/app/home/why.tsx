import Image from 'next/image';
import React from 'react';
import LayananProduk from 'public/img/why/layanan-produk.png';
import PriceTag from 'public/img/why/price.png';
import Permission from 'public/img/why/permission.png';
import Tracking from 'public/img/why/tracking.png';
import UpdatedInformation from 'public/img/why/updated-information.png';
import Guaranteed from 'public/img/why/guaranteed.png';
import { useTranslation } from 'next-i18next';

export default function Why() {
  const { t } = useTranslation('home/why');

  const whys = [
    {
      image: LayananProduk,
      heading: t('card.title'),
      paragraf: t('card.desc'),
    },
    {
      image: PriceTag,
      heading: t('card.title2'),
      paragraf: t('card.desc2'),
    },
    {
      image: Permission,
      heading: t('card.title3'),
      paragraf: t('card.desc3'),
    },
    {
      image: Tracking,
      heading: t('card.title4'),
      paragraf: t('card.desc4'),
    },
    {
      image: UpdatedInformation,
      heading: t('card.title5'),
      paragraf: t('card.desc5'),
    },
    {
      image: Guaranteed,
      heading: t('card.title6'),
      paragraf: t('card.desc6'),
    },
  ];

  return (
    <div className="my-24">
      <div className="text-center mb-14 block items-center">
        <h3 className="text-base-blue text-xl font-medium mb-3">
          {t('heading.title')}
        </h3>
        <h1 className="font-bold text-4xl text-secondary-text mb-20">
          Sarana Mulya Logistik
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        {whys.map((Why, idx) => (
          <div className="flex gap-5" key={idx}>
            <div className="transform rotate-45 border border-base-blue rounded-md h-max p-3 hover:bg-base-blue group transition-all duration-300">
              <Image
                src={Why.image}
                alt=""
                className="h-full lg:w-[300px] w-48 rounded-md !transform !rotate-[-45deg] group-hover:brightness-[100]"
              />
            </div>

            <div className="">
              <h1 className="w-full text-xl mb-3 font-semibold lg:w-[80%]">
                {Why.heading}
              </h1>
              <p className="font-normal text-sm text-gray-600 w-[80%]">
                {Why.paragraf}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
