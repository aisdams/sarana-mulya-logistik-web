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
  onDaerahSelect: (daerah: string | null) => void; // Tambah properti ini
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
    <>
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
                <td className="border px-4 py-2">
                  {feature.properties.cabang}
                </td>
                <td className="border px-4 py-2">
                  {feature.properties.alamat}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDetailClick(feature)}
                    data-bs-toggle="modal"
                    data-bs-target="#detailModal"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2"
                  >
                    Lihat
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Modal */}
      {selectedFeature && (
        <div
          className={`modal fade ${showModal ? 'show' : ''}`}
          id="detailModal"
          tabIndex={-1}
          aria-labelledby="detailModalLabel"
          aria-hidden={!showModal}
        >
          <div className="modal-dialog modal-branch modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Detail
                </h5>
                <button
                  type="button"
                  className="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={closeModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-8">try</div>
                  <div className="col-4">try</div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Table;
