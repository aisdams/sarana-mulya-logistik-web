import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'services-detail/exim',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};

export default function Exiom() {
  const { t } = useTranslation('services-detail/exim');
  const products = [
    {
      children: [
        {
          title: 'Ekspor',
          desc: t('children.desc2'),
        },
        {
          title: 'Impor',
          desc: t('children.desc2'),
        },
      ],
      childrenTwo: [
        {
          title: t('chidlren2.title'),
        },
        {
          title: t('chidlren2.title2'),
        },
        {
          title: t('chidlren2.title3'),
        },
        {
          title: t('chidlren2.title4'),
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold text-5xl">Exim</h1>
        </div>
      </div>

      <div className="lg:mx-28 mx-5 text-[#666666]">
        <h3 className="mb-5">
          <span className="font-bold">{t('bold.text')} </span>
          {t('bold.text2')}
        </h3>
        {products.map((product, idx) => (
          <>
            <div className="" key={idx}>
              {product.children?.map((childPro, childIdx) => (
                <ul key={childIdx} className="!list-disc pl-8">
                  <li>{childPro.title}</li>
                  <p>{childPro.desc}</p>
                </ul>
              ))}
            </div>

            <h3 className="mt-5">
              {t('bold.text3')}{' '}
              <span className="font-bold">{t('bold.text4')} </span>
              {t('bold.text5')}
            </h3>
            {product.childrenTwo?.map((childTwoPro, childTwoIdx) => (
              <ul key={childTwoIdx} className="!list-disc pl-8">
                <li>{childTwoPro.title}</li>
              </ul>
            ))}
          </>
        ))}
      </div>
    </>
  );
}
