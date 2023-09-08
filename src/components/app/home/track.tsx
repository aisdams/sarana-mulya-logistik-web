import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { motion, useAnimation } from 'framer-motion';
import { toast } from 'react-toastify';
import axios from 'axios';
import Loader from '@/components/loader/loader';
import { useRouter } from 'next/router';

export default function Track() {
  const { t } = useTranslation('home/track');
  const [activeButton, setActiveButton] = useState<
    'lacakStatusPod' | 'lacakStatusResi'
  >('lacakStatusPod');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<TrackingData[]>([]);
  const [selectedTracking, setSelectedTracking] = useState<TrackingData | null>(
    null
  );
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingTrack, setIsLoadingTrack] = useState(false);
  const [pageTitle, setPageTitle] = useState<string>('Detail Track');

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

  const formatDate = (dateString: any) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    const formattedDate = new Date(dateString).toLocaleDateString(
      'en-US',
      options
    );
    return formattedDate;
  };

  const username = 'sml_serverapi';
  const password = 'sml123';

  const handleSearch = async () => {
    try {
      if (!searchQuery) {
        toast.error('Masukkan nomor resi untuk melakukan pencarian.');
        return;
      }

      setIsLoadingTrack(true);

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
          router.push(router.pathname, `/no_resi/=${searchQuery}`);
        } else {
          setSearchResults([]);
          toast.error('Maaf, data pelacakan tidak ada.');
        }

        setIsLoadingTrack(false);
        setSearchQuery('');
      } catch (error: any) {
        toast.error(
          error.response?.data?.message ||
            'Terjadi kesalahan saat mencoba melacak.'
        );
        setIsLoadingTrack(false);
      }
    } catch (error) {
      toast.error('Maaf, terjadi kesalahan saat mencoba melacak.');
      setIsLoadingTrack(false);
    }
  };

  const handleDetailTracking = (tracking: TrackingData) => {
    setShowModal(true);
    setSelectedTracking(tracking);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = (
    buttonId: 'lacakStatusPod' | 'lacakStatusResi'
  ) => {
    setActiveButton(buttonId);
    if (buttonId === 'lacakStatusPod') {
      setPageTitle('Detail POD');
    } else {
      setPageTitle('Detail Resi');
    }
  };

  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = 100;

      if (!isLoading) {
        if (window.scrollY > offset) {
          controls.start({ opacity: 1 });
        } else {
          controls.start({ opacity: 0 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLoading, controls]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls}>
      <div className="grid lg:grid-cols-2 my-20 mx-5 lg:mx-28 xs:mx-0">
        <h1 className="text-base-blue font-bold lg:text-[2.7rem] leading-none mb-5 lg:mb-0 text-3xl">
          {t('heading.title')} <br /> {t('heading.titleTwo')}
        </h1>

        <div>
          <div className="grid lg:grid-cols-2 gap-5 mb-4">
            <button
              className={`lg:px-10 px-5 lg:py-4 ${
                activeButton === 'lacakStatusResi'
                  ? 'text-white bg-blue-400'
                  : ''
              }`}
              onClick={() => handleButtonClick('lacakStatusResi')}
            >
              {t('button.title')}
            </button>
            <button
              className={`lg:px-10 px-5 lg:py-4 ${
                activeButton === 'lacakStatusPod'
                  ? 'text-white bg-blue-400'
                  : ''
              }`}
              onClick={() => handleButtonClick('lacakStatusPod')}
            >
              {t('button.titleTwo')}
            </button>
          </div>
          <div className="lg:flex lg:gap-5 grid">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Masukkan nomor resi anda..."
              className="border border-base-blue pl-3 py-1 rounded-sm w-full"
            />
            <button
              className="bg-base-blue py-1 px-7 text-white rounded-md"
              onClick={handleSearch}
            >
              Cari
            </button>
          </div>
        </div>
      </div>

      <div className="">
        <div className="my-20 lg:mx-28 mx-5">
          {searchResults.length > 0 ? (
            <div>
              <h2 className="text-xl font-bold mb-4 text-center text-base-blue">
                {pageTitle}
              </h2>
              <div className="overflow-auto">
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
                        <td className="p-3">{formatDate(result.p_date)}</td>
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
            </div>
          ) : (
            isLoadingTrack && (
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
      </div>
    </motion.div>
  );
}
