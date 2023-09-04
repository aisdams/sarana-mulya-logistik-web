import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { searchHotels } from '@/apis/trackings.api';

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
  type Hotel = {
    nama_hotel: string;
    alamat: string;
    keterangan: string;
  };

  const { t } = useTranslation('tracking');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Hotel[]>([]);

  const handleSearch = async () => {
    try {
      // Ganti searchQuery dengan fasilitas_hotel_code yang sesuai
      const results = await searchHotels(searchQuery);
      setSearchResults(results.data); // Perhatikan penggunaan results.data
      console.log('Data dari API:', results); // Tambahkan ini
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
              type="button"
              className="px-2 py-2 bg-base-blue text-white w-max text-xs mt-2"
              onClick={handleSearch}
            >
              LACAK
            </button>
          </div>

          <div className="grid border border-[#97667f]/30 px-4 py-2">
            <h1 className="text-center text-lg text-base-blue font-bold">
              Lacak POD
            </h1>
            <label htmlFor="Nomor Resi" className="py-3">
              Nomor Resi
            </label>
            <input
              type="text"
              placeholder="Masukan nomer resi anda"
              className="border border-[#97667f]/50 p-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
              type="button"
              className="px-2 py-2 bg-base-blue text-white w-max text-xs mt-2"
              onClick={handleSearch}
            >
              LACAK
            </button>
          </div>
        </div>
      </div>

      <div className="my-20 mx-28">
        {searchResults.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-4">Hasil Pencarian:</h2>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="p-3 text-left">Nama Hotel</th>
                  <th className="p-3 text-left">Alamat</th>
                  <th className="p-3 text-left">Keterangan</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result, index) => (
                  <tr key={index}>
                    <td className="p-3">{result.nama_hotel}</td>
                    <td className="p-3">{result.alamat}</td>
                    <td className="p-3">{result.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
