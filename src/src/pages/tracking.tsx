import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'home/our-mission',
        'tracking',
        'layouts/footer',
      ])),
    },
  };
};

export default function Tracking() {
  const { t } = useTranslation('tracking');
  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold lg:text-5xl text-3xl">{t('hero.header')}</h1>
        </div>
      </div>

      <div className="my-20 lg:mx-28 mx-2">
        <div className="grid lg:grid-cols-2 text-[#97667f] gap-5">
          <div className="grid border border-[#97667f]/30 px-4 py-2">
            <h1 className="text-center text-lg text-base-blue font-bold">
              Lacak Pesanan
            </h1>
            <label htmlFor="Nomor Resi" className="py-3">
              Nomor Resi
            </label>
            <input
              type="text"
              placeholder="Masukan nomer resi anda"
              className="border border-[#97667f]/50 p-2"
            />

            <label htmlFor="Tanggal (Opsional)" className="py-3">
              Tanggal (Opsional)
            </label>
            <input type="date" className="border border-[#97667f]/50 p-2" />

            <button
              type="submit"
              className=" px-2 py-2 bg-base-blue text-white w-max text-xs mt-2"
            >
              LACAK
            </button>
          </div>
          <div className="grid border border-[#97667f]/30 px-4 py-2">
            <h1 className="text-center text-lg text-base-blue font-bold">
              Lacak Status POD
            </h1>
            <label htmlFor="Nomor Resi" className="py-3">
              Nomor Resi
            </label>
            <input
              type="text"
              placeholder="Masukan nomer resi anda"
              className="border border-[#97667f]/50 p-2"
            />

            <label htmlFor="Tanggal (Opsional)" className="py-3">
              Tanggal (Opsional)
            </label>
            <input type="date" className="border border-[#97667f]/50 p-2" />

            <button
              type="submit"
              className=" px-2 py-2 bg-base-blue text-white w-max text-xs mt-2"
            >
              LACAK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}