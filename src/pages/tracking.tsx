import React, { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';
import { useTranslation } from 'next-i18next';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '@/components/loader/loader';

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, [
        'navbar',
        'home/our-mission',
        'tracking',
        'layouts/footer',
      ])),
    },
  };
};

export default function Tracking() {
  type TrackingData = {
    receipt_no: string;
    p_date: string;
    p_shipper_name: string;
    destination: string;
    p_consignee_name: string;
    p_product: string;
    p_total_koli: string;
    p_volume_weight: string;
    status: string;
    track_history: Array<{
      date: string;
      status: string;
      location: string;
      receiver: string;
      receiver_relation: string;
    }>;
  };

  const { t } = useTranslation('tracking');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<TrackingData[]>([]);
  const [selectedTracking, setSelectedTracking] = useState<TrackingData | null>(
    null
  );
  const [showModal, setShowModal] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const username = 'sml_serverapi';
  const password = 'sml123';

  const handleSearch = async () => {
    try {
      if (!searchQuery) {
        toast.error('Masukkan nomor resi untuk melakukan pencarian.');
        return;
      }

      setIsLoading(true);

      try {
        const base64Credentials = btoa(`${username}:${password}`);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/tracking/public/${searchQuery}`,
          {
            headers: {
              Authorization: `Basic ${base64Credentials}`,
            },
          }
        );

        if (response.data && response.data.data) {
          const responseData = response.data.data;
          // setSearchResults([responseData]);
          setSearchResults([responseData]);
        } else {
          setSearchResults([]);
          toast.error('Maaf, data pelacakan tidak ada.');
        }

        setIsLoading(false);

        console.log('Response Data:', response.data);
      } catch (error: any) {
        console.error('Error:', error);
        console.log('Response:', error.response);
        toast.error(
          error.response?.data?.message ||
            'Terjadi kesalahan saat mencoba melacak.'
        );
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Maaf, terjadi kesalahan saat mencoba melacak.');
      setIsLoading(false);
    }
  };

  const handleDetailTracking = (tracking: TrackingData) => {
    setShowModal(true);
    setSelectedTracking(tracking);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute top-1/2 left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">{t('hero.title')}</h3>
          <h1 className="font-bold lg:text-5xl text-3xl">{t('hero.header')}</h1>
        </div>
      </div>

      <div className="my-20 lg:mx-28 mx-2 grid lg:grid-cols-2 gap-5">
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
            <label htmlFor="Nomor Resi" className="py-3">
              Tanggal (Opsional)
            </label>
            <input type="date" className="border border-[#97667f]/50 p-2" />

            <button
              type="button"
              className="px-2 py-2 bg-base-blue text-white w-max text-xs mt-2"
              onClick={handleSearch}
            >
              LACAK
            </button>
          </div>
        </div>

        <div className="grid text-[#97667f] gap-5">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <label htmlFor="Nomor Resi" className="py-3">
              Tanggal (Opsional)
            </label>
            <input type="date" className="border border-[#97667f]/50 p-2" />

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
        {searchResults.length > 0 ? (
          <div>
            <h2 className="text-xl font-bold mb-4 text-center text-base-blue">
              Detail Track
            </h2>
            <table className="min-w-full border-collapse border border-gray-300 text-[#555555] text-sm">
              <thead>
                <tr>
                  <th className="p-3 text-left">No Resi</th>
                  <th className="p-3 text-left">Tanggal</th>
                  <th className="p-3 text-left">Pengirim</th>
                  <th className="p-3 text-left">Tujuan</th>
                  <th className="p-3 text-left">Service</th>
                  <th className="p-3 text-left">Status</th>
                  <th className="p-3 text-left">Detail</th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((result, index) => (
                  <tr key={index}>
                    <td className="p-3">{result.receipt_no}</td>
                    <td className="p-3">{result.p_date}</td>
                    <td className="p-3">{result.p_shipper_name}</td>
                    <td className="p-3">{result.destination}</td>
                    <td className="p-3">{result.p_product}</td>
                    <td className="p-3">{result.p_consignee_name}</td>
                    <td className="p-3">
                      <button
                        type="button"
                        className="bg-base-blue px-3 py-1 text-white"
                        onClick={() => handleDetailTracking(result)}
                      >
                        Lihat Detail
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          isLoading && (
            <div className="text-center">
              <Loader />
            </div>
          )
        )}
      </div>

      {/* Modal Detail Tracking */}
      {selectedTracking && showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-7/12">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="grid">
                  <div className="flex justify-between">
                    <h1 className="font-semibold text-xl">Detail</h1>

                    <button
                      className="bg-[#f0f0f0] px-3 border border-secondary-text"
                      onClick={closeModal}
                      type="button"
                    >
                      X
                    </button>
                  </div>
                  <hr className="border-secondary-text/20 border my-3" />
                  <div className="grid gap-1 text-[#57575f] text-base">
                    <h3>No Resi : {selectedTracking.receipt_no}</h3>
                    <h3>Tanggal Pickup : {selectedTracking.p_date}</h3>
                    <h3>Pengirim : {selectedTracking.p_shipper_name}</h3>
                    <h3>Tujuan : {selectedTracking.destination}</h3>
                    <h3>Penerima : {selectedTracking.p_consignee_name}</h3>
                    <h3>Service : {selectedTracking.p_product}</h3>
                  </div>

                  <hr className="border-secondary-text/20 border my-3" />
                  <h3 className="text-[#57575f]">Tracking Status</h3>
                  <hr className="border-secondary-text/20 border mb-3 mt-1" />
                  <table className="min-w-full border-collapse border-[#d9d9d9] border-2 text-[#555555] text-sm">
                    <thead>
                      <tr>
                        <th className="p-3 text-left">Status</th>
                        <th className="p-3 text-left">Tanggal</th>
                        <th className="p-3 text-left">Keterangan</th>
                      </tr>
                    </thead>
                    <tbody className="border border-[#d9d9d9]">
                      {selectedTracking.track_history.map((status, index) => (
                        <tr key={index}>
                          <td className="p-3 border border-[#d9d9d9]">
                            {status.status}
                          </td>
                          <td className="p-3 border border-[#d9d9d9]">
                            {status.date}
                          </td>
                          <td className="p-3 border border-[#d9d9d9]">
                            {status.location}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="bg-base-blue text-white py-1 px-3 sm:ml-3 sm:w-auto w-full"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
