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
    console.log('Detail clicked for:', feature);
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

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-1/2">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="grid grid-cols-2 items-center gap-5">
                          <div style={{ width: '100%' }}>
                            <iframe
                              width="100%"
                              height="400"
                              src={selectedFeature.properties.embed}
                            ></iframe>
                          </div>

                          <div>
                            <h1 className="font-bold text-3xl">
                              Branch Office
                            </h1>
                            <h3>
                              Daerah : {selectedFeature.properties.daerah}
                            </h3>
                            <h3>
                              Alamat : {selectedFeature.properties.alamat}
                            </h3>
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
