import Link from 'next/link';
import React, { useState } from 'react';

interface GeoJsonFeature {
  type: string;
  properties: {
    id_branch: string;
    daerah: string;
    cabang: string;
    alamat: string;
    latitude: string;
    longitude: string;
    embed: string;
    url: string;
  };
  geometry: {
    type: string;
    coordinates: [number, number];
  };
  map_popup_content: string;
}

interface GeoJsonData {
  type: string;
  features: GeoJsonFeature[];
}

interface TableProps {
  geoJsonData: GeoJsonData;
  selectedDaerah: string | null;
  onDaerahSelect: (daerah: string | null) => void;
}

const Table: React.FC<TableProps> = ({
  geoJsonData,
  selectedDaerah,
  onDaerahSelect,
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [selectedFeature, setSelectedFeature] = useState<GeoJsonFeature | null>(
    null
  );

  const uniqueDaerahs = Array.from(
    new Set(geoJsonData.features.map((feature) => feature.properties.daerah))
  );
  const handleDetailClick = (feature: GeoJsonFeature) => {
    setSelectedFeature(feature);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedFeature(null);
    setShowModal(false);
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 text-sm text-[#5a5a5a]">#</th>
          <th className="border px-4 py-2 text-sm text-[#5a5a5a]">Daerah</th>
          <th className="border px-4 py-2 text-sm text-[#5a5a5a]">Cabang</th>
          <th className="border px-4 py-2 text-sm text-[#5a5a5a]">Alamat</th>
          <th className="border px-4 py-2 text-sm text-[#5a5a5a]">Detail</th>
        </tr>
      </thead>
      <tbody>
        {geoJsonData.features
          .filter((feature) =>
            selectedDaerah === null
              ? true
              : feature.properties.daerah === selectedDaerah
          )
          .map((feature, index) => (
            <tr
              key={feature.properties.id_branch}
              className="text-sm text-[#57575f]"
            >
              <td className="border px-4 py-2">{index + 1}</td>
              <td
                className={`border px-4 py-2 ${
                  selectedDaerah === feature.properties.daerah
                    ? 'text-black'
                    : 'text-gray-700'
                }`}
                onClick={() => onDaerahSelect(feature.properties.daerah)}
              >
                {feature.properties.daerah}
              </td>
              <td className="border px-4 py-2">{feature.properties.cabang}</td>
              <td className="border px-4 py-2">{feature.properties.alamat}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleDetailClick(feature)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2"
                >
                  Lihat
                </button>
              </td>

              {/* Modal */}
              {selectedFeature && showModal && (
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
                        <div>
                          <div>
                            <div className="flex justify-between">
                              <h1 className="font-semibold text-xl mb-10 h-max">
                                Detail
                              </h1>

                              <button
                                className="bg-[#f0f0f0] px-3 border border-secondary-text h-max"
                                onClick={closeModal}
                                type="button"
                              >
                                X
                              </button>
                            </div>
                          </div>

                          <div className="flex gap-5">
                            <iframe
                              width="100%"
                              height="400"
                              src={selectedFeature.properties.embed}
                            />
                            <div className="-top-10 relative">
                              <h1 className="font-bold text-3xl mt-10 mb-5 text-black">
                                Branch Office{' '}
                                {selectedFeature.properties.cabang}
                              </h1>
                              <h3 className="mb-5">
                                Daerah : {selectedFeature.properties.daerah}
                              </h3>
                              <h3 className="mb-5">
                                Alamat : {selectedFeature.properties.alamat}
                              </h3>
                              <button className="bg-base-blue text-white px-3 py-2">
                                <Link
                                  href={selectedFeature.properties.url}
                                  target="_blank"
                                >
                                  Buka di Google Maps
                                </Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:ml-3 sm:w-auto w-full"
                          onClick={closeModal}
                        >
                          Tutup
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
