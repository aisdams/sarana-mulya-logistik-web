import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import ImageSide from 'public/img/feature-bg.png';
import VisiMisi from '@/components/app/five-section/visi-misi';
import Value from '@/components/app/five-section/value';
import Team from '@/components/app/five-section/team';
import Excess from '@/components/app/five-section/excess';
import Measurement from '@/components/app/five-section/measurement';
import { IoDiamondOutline } from 'react-icons/io5';
import { ImUsers } from 'react-icons/im';
import { BsHandThumbsUpFill, BsRulers } from 'react-icons/bs';
import Counter from '@/components/app/home/counter';
import Recommendation from '@/components/app/home/recommendation';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'navbar',
        'about/profile',
        'fivesec/visi',
        'fivesec/value',
        'fivesec/team',
        'fivesec/excess',
        'home/counter',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};

export default function Profile() {
  const { t } = useTranslation('about/profile');
  const [selectedComponent, setSelectedComponent] = useState('');

  const renderSelectedComponent = () => {
    switch (selectedComponent) {
      case 'VisiMisi':
        return <VisiMisi />;
      case 'Value':
        return <Value />;
      case 'Team':
        return <Team />;
      case 'Excess':
        return <Excess />;
      case 'Measurement':
        return <Measurement />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="relative bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center">
        <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.heading')}</h3>
          <h1 className="font-bold  lg:text-5xl text-4xl">
            {t('hero.headingTwo')}
          </h1>
        </div>
      </div>

      <div className="mt-20 lg:mx-28 mx-0">
        <div className="bg-base-blue w-full h-auto mt-24 text-white">
          <div className="md:flex justify-between lg:mx-20 py-14 mx-5">
            <div className="mb-3">
              <h3 className="text-sm">{t('card.title')}</h3>
              <h1 className="lg:text-3xl font-semibold mt-2 text-2xl">
                {t('card.heading')}
              </h1>
            </div>

            <div className="button">
              <button className="text-base-blue bg-white px-8 py-4 grid mx-auto items-center">
                {t('card.button')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 lg:ml-28 md:mx-28 mx-5">
        <h1 className="font-bold text-[#666666]-text text-4xl mb-16 lg-mb-10">
          {t('sectionTwo.name')}
        </h1>
        <div className="grid lg:grid-cols-2 gap-10 items-center relative -top-14">
          <div className="text-justify">
            <h3>{t('sectionTwo.desc')}</h3>
            <h3 className="mt-3">{t('sectionTwo.descTwo')}</h3>
            <h3 className="mt-3"> {t('sectionTwo.descThree')}</h3>
          </div>

          <div className="hidden lg:block">
            <Image src={ImageSide} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center">
            <div
              className="bg-transparent p-6 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-52 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('VisiMisi')}
            >
              <div className="rounded-full border-2 border-purple-600 w-10 h-10 mx-auto grid text-center items-center mb-3">
                <div className="rounded-full border-2 border-purple-600 w-7 h-7 mx-auto grid justify-center place-content-center items-center">
                  <div className="rounded-full border-2 border-purple-600 w-4 h-4 mx-auto grid justify-center place-content-center items-center"></div>
                </div>
              </div>
              <h2 className="text-lg font-semibold">{t('fiveSec.title')}</h2>
            </div>
            <div
              className="bg-transparent p-1 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-40 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('Value')}
            >
              <IoDiamondOutline className="text-[#20c9a4] mt-6 text-[2.5rem] items-center justify-center grid mx-auto mb-2" />
              <h2 className="text-lg font-semibold mb-4">
                {t('fiveSec.title2')}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center">
            <div
              className="bg-transparent p-1 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-40 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('Team')}
            >
              <ImUsers className="text-[#df1529] mt-6 text-[2.5rem] items-center justify-center grid mx-auto mb-2" />
              <h2 className="text-lg font-semibold mb-4">
                {t('fiveSec.title3')}
              </h2>
            </div>
            <div
              className="bg-transparent p-1 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-40 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('Excess')}
            >
              <BsHandThumbsUpFill className="text-[#0d6efd] mt-6 text-[2.5rem] items-center justify-center grid mx-auto mb-2" />
              <h2 className="text-lg font-semibold mb-4">
                {t('fiveSec.title4')}
              </h2>
            </div>
            <div
              className="bg-transparent p-1 rounded shadow-[0px_0px_10px_0px_rgba(0,0,0,0.5)] w-40 h-max m-2 text-center cursor-pointer"
              onClick={() => setSelectedComponent('Measurement')}
            >
              <BsRulers className="text-[#fd7e14] mt-6 text-[2.5rem] items-center justify-center grid mx-auto mb-2" />
              <h2 className="text-lg font-semibold mb-4">
                {t('fiveSec.title5')}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>{renderSelectedComponent()}</div>

      <div className="lg:mx-28 mx-3 mb-20">
        <Counter />
        <div className="!my-32">
          <Recommendation />
        </div>
      </div>
    </>
  );
}
