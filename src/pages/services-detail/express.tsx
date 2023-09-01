import React from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'services-detail/express',
        'home/our-mission',
      ])),
    },
  };
};

export default function Express() {
  const { t } = useTranslation('services-detail/express');
  const products = [
    {
      children: [
        {
          title: 'Sameday',
          desc: t('children.desc'),
        },
        {
          title: 'One Night Service (ONS)',
          desc: t('children.desc2'),
        },
        {
          title: 'Express Standard',
          desc: t('children.desc3'),
        },
        {
          title: 'Port to Port',
          desc: t('children.desc4'),
        },
      ],

      childrenTwo: [
        {
          title: t('childrenTwo.title'),
        },
        {
          title:
            'Dalam layanan ini PT. Sarana Mulya Logistik juga menyediakan layanan pengurusan dokumen DO/SJ (Surat Jalan) pelanggan dan FTZ (Free Trade Zone).',
        },
        {
          title:
            'Khusus Shipment DG (Dangerous Goods) maka dikenakan 300% surcharge dari biaya kirim dan untuk barang yang beratnya diatas 70 kg dikenakan surcharge 100% dari biaya kirim (sesuai dengan peraturan airline).',
        },
        {
          title:
            'PT. Sarana Mulya Logistik juga melayani pengiriman vaksin atau media lain yang suhunya 2 s/d 8 derajat.',
        },
        {
          title:
            'Untuk pengiriman melalui udara, ukuran pintu pesawat diambil secara umum adalah 300 cm x 90 cm x 85 cm (P x L x T).',
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold text-5xl">Express</h1>
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
