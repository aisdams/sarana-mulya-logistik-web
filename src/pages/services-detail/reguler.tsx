import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['services-detail/reguler'])),
    },
  };
};

export default function Reguler() {
  const { t } = useTranslation('services-detail/reguler');
  const products = [
    {
      children: [
        {
          title: 'Reguler Standard',
          desc: t('children.desc'),
        },
        {
          title: t('children.title2'),
          desc: t('children.desc2'),
        },
      ],
      childrenTwo: [
        {
          title: t('childrenTwo.title'),
        },
        {
          title: t('childrenTwo.title2'),
        },
        {
          title: t('childrenTwo.title3'),
        },
        {
          title: t('childrenTwo.title4'),
        },
        {
          title: t('childrenTwo.title5'),
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold text-5xl">Reguler</h1>
        </div>
      </div>

      <div className="mx-28 text-[#666666]">
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
