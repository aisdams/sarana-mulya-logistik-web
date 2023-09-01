import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'services-detail/linkex',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};

export default function Linkex() {
  const { t } = useTranslation('services-detail/linkex');
  const products = [
    {
      children: [
        {
          title: 'LinkShop',
          desc: t('children.desc'),
        },
        {
          title: 'LinkBiz',
          desc: t('children.desc2'),
        },
        {
          title: 'LinkTravel',
          desc: t('children.desc3'),
        },
        {
          title: 'LinkHajj',
          desc: t('children.desc4'),
        },
      ],
      childrenTwo: [
        {
          bold: t('children2.bold'),
          title: t('children2.text'),
        },
        {
          bold: t('children2.bold2'),
          title: t('chidlren2.text2'),
        },
        {
          bold: t('children2.bold3'),
          title: t('chidlren2.text3'),
        },
        {
          bold: t('children2.bold4'),
          title: t('chidlren2.text4'),
        },
        {
          bold: t('children2.bold5'),
          title: t('chidlren2.text5'),
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold text-5xl">LinkExpress</h1>
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
                <li>
                  <span className="font-bold">{childTwoPro.bold}</span>{' '}
                  {childTwoPro.title}
                </li>
              </ul>
            ))}
          </>
        ))}
      </div>
    </>
  );
}
