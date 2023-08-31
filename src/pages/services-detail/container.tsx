import React from 'react';
import ProductIm from 'public/img/service/container1.png';
import ProductIm2 from 'public/img/service/container2.png';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['services-detail/container'])),
    },
  };
};

export default function Container() {
  const { t } = useTranslation('services-detail/container');
  const products = [
    {
      children: [
        {
          title: t('children.title'),
          desc: t('children.desc'),
          image: ProductIm,
        },
        {
          title: t('children.title2'),
          desc: t('children.desc2'),
          image: ProductIm2,
        },
      ],
      childrenTwo: [
        {
          title:
            'Leadtime layanan container sangat bervariatif sesuai destinasi tujuan, dan PT. Sarana Mulya Logistik fokus memberikan lead time yang terbaik dengan harga yang kompetitif.',
        },
        {
          title:
            'Layanan container yang PT. Sarana Mulya Logistik berikan include bukti serah terima barang atau POD (Proof of delivery) kembali dengan waktu standar pengembalian POD antar 7 s/d 14 hari (kecuali ada request khusus untuk percepatan).',
        },
        {
          title:
            'Dalam layanan ini PT. Sarana Mulya Logistik juga menyediakan layanan pengurusan dokumen DO/SJ (Surat Jalan) pelanggan dan FTZ (Free Trade Zone).',
        },
        {
          title:
            'Sekaligus melayani FTL (Full Container Load) dan FCL (Less Container Load).',
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold text-5xl">Container</h1>
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
                  <Image src={childPro.image} alt="" className="my-5" />
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
