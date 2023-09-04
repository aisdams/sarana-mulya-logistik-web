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
  type trakings = {
    p_date: string;
    p_shipper_name: string;
    destination: string;
    p_service: string;
    status: string;
  };

  const { t } = useTranslation('tracking');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<trakings[]>([]);
  const [authenticated, setAuthenticated] = useState(false);

  const handleAuthenticate = () => {
    // Ambil username dan password yang dimasukkan oleh pengguna
    const usernameInput = prompt('Masukkan username:');
    const passwordInput = prompt('Masukkan password:');

    // Bandingkan dengan kredensial yang telah Anda tetapkan
    const correctUsername = process.env.NEXT_AUTH_USERNAME;
    const correctPassword = process.env.NEXT_AUTH_PASSWORD;

    if (
      usernameInput === correctUsername &&
      passwordInput === correctPassword
    ) {
      // Jika autentikasi berhasil, atur authenticated menjadi true
      setAuthenticated(true);
    } else {
      alert('Autentikasi gagal. Silakan coba lagi.');
    }
  };

  const handleSearch = async () => {
    if (!authenticated) {
      // Jika belum terautentikasi, tampilkan pemberitahuan (alert)
      alert('Anda harus terautentikasi untuk melakukan pencarian.');
      return;
    }

    try {
      if (!searchQuery) {
        // Tampilkan pesan kesalahan jika searchQuery kosong
        alert('Masukkan nomor resi untuk melakukan pencarian.');
        return;
      }

      const results = await searchHotels(searchQuery);
      setSearchResults(results.data);
      console.log('Data dari API:', results);
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
        <div className="grid text-[#97667f] gap-5">
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
                    <td className="p-3">{result.p_date}</td>
                    <td className="p-3">{result.p_shipper_name}</td>
                    <td className="p-3">{result.destination}</td>
                    <td className="p-3">{result.p_service}</td>
                    <td className="p-3">{result.status}</td>
                    <td className="p-3">
                      <button
                        data-modal-target="defaultModal"
                        data-modal-toggle="defaultModal"
                        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                      >
                        Detail
                      </button>
                      <div
                        id="defaultModal"
                        aria-hidden="true"
                        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                      >
                        <div className="relative w-full max-w-2xl max-h-full">
                          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Terms of Service
                              </h3>
                              <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="defaultModal"
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            <div className="p-6 space-y-6">
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month comply.
                              </p>
                              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                TRy
                              </p>
                            </div>
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                              <button
                                data-modal-hide="defaultModal"
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              >
                                I accept
                              </button>
                              <button
                                data-modal-hide="defaultModal"
                                type="button"
                                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                              >
                                Decline
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
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
