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
    p_service: string;
    status: string;
  };

  const { t } = useTranslation('tracking');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<TrackingData[]>([]);
  const [selectedTracking, setSelectedTracking] = useState<TrackingData | null>(
    null
  );
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
    setSelectedTracking(tracking);
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
            <h2 className="text-2xl font-bold mb-4">Hasil Pencarian:</h2>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
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
                    <td className="p-3">{result.p_date}</td>
                    <td className="p-3">{result.p_shipper_name}</td>
                    <td className="p-3">{result.destination}</td>
                    <td className="p-3">{result.p_service}</td>
                    <td className="p-3">{result.status}</td>
                    <td className="p-3">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleDetailTracking(result)}
                      >
                        Detail
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
      {selectedTracking && (
        <div
          className="modal fade"
          id="exampleModal"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Detail Tracking
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* Tampilkan detail tracking di sini */}
                <table className="table">
                  <tbody>
                    <tr>
                      <td>No Resi</td>
                      <td>&nbsp; : &nbsp;</td>
                      <td>{selectedTracking.receipt_no}</td>
                    </tr>
                    <tr>
                      <td>Tanggal Pickup</td>
                      <td>&nbsp; : &nbsp;</td>
                      <td>{selectedTracking.p_date}</td>
                    </tr>
                    <tr>
                      <td>Pengirim</td>
                      <td>&nbsp; : &nbsp;</td>
                      <td>{selectedTracking.p_shipper_name}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
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
