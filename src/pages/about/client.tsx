import React from 'react';
import Image from 'next/image';
import ClientData from '@/data/ClientData';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { motion } from 'framer-motion';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'about/our-client',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};

export default function Client() {
  const { t } = useTranslation('about/our-client');
  return (
    <>
      <motion.div>
        <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
          <div className="absolute top-1/2 left-0 right-0 text-white">
            <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
            <h1 className="font-bold text-5xl">{t('hero.subtitle')}</h1>
          </div>
        </div>

        <div className="lg:mx-28 mb-20 mx-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 mx-auto">
            {ClientData.map((client, idx) => (
              <div
                className="border border-secondary-text/20 text-center py-5"
                key={idx}
              >
                <Image
                  src={client.image}
                  alt=""
                  className="w-[120px] text-center mx-auto grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}
