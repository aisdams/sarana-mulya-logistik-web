'use client';
import { GetServerSideProps } from 'next';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import geoJsonData from '@/components/geomap/map.json'; // Import the JSON file
import Table from '@/components/map/Table';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'navbar',
        'about/branch',
        'home/our-mission',
        'layouts/footer',
      ])),
    },
  };
};

interface GeoJsonFeature {
  type: string;
  properties: {
    id_branch: string;
    daerah: string;
    cabang: string;
    alamat: string;
    latitude: string;
    longitude: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  map_popup_content: string;
}

const MapWithNoSSR = dynamic(() => import('@/components/map/Map'), {
  ssr: false,
});

export default function Branch() {
  const { t } = useTranslation('about/branch');
  const [geoJsonDataState, setGeoJsonDataState] = useState<any>(null);
  const [selectedDaerah, setSelectedDaerah] = useState<string | null>(null);

  useEffect(() => {
    setGeoJsonDataState(geoJsonData);
  }, []);

  return (
    <div>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold text-5xl">{t('hero.desc')}</h1>
        </div>
      </div>

      <div className="mb-20">
        <div className="">
          <div id="map ">
            {geoJsonDataState && (
              <MapWithNoSSR
                geoJsonData={geoJsonDataState}
                setSelectedDaerah={setSelectedDaerah}
              />
            )}
          </div>
        </div>

        <div className="mt-5 mx-24 ">
          <div className="grid grid-cols-8 mx-auto justify-center items-center"></div>
          {geoJsonDataState && (
            <div className="mt-5 border-2">
              <div className="grid grid-cols-8 mx-auto justify-center items-center font-semibold text-sm text-left">
                {geoJsonDataState.features
                  .map((feature: GeoJsonFeature) => feature.properties.daerah)
                  .filter(
                    (value: string, index: number, self: string[]) =>
                      self.indexOf(value) === index
                  )
                  .map((uniqueDaerah: string) => (
                    <button
                      key={uniqueDaerah}
                      onClick={() => setSelectedDaerah(uniqueDaerah)}
                      className={`p-2 border-b ${
                        selectedDaerah === uniqueDaerah
                          ? 'border-b-blue-500 text-base-blue'
                          : 'border-transparent'
                      }`}
                    >
                      {uniqueDaerah}
                    </button>
                  ))}
              </div>
            </div>
          )}

          <div>
            {selectedDaerah && (
              <div className="mt-8">
                <Table
                  geoJsonData={geoJsonDataState}
                  selectedDaerah={selectedDaerah}
                  onDaerahSelect={setSelectedDaerah} // Tambah properti ini
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
