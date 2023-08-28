import React from 'react';

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
  onDaerahSelect, // Terima properti ini
}) => {
  const uniqueDaerahs = Array.from(
    new Set(geoJsonData.features.map((feature) => feature.properties.daerah))
  );
  const handleDetailClick = (feature: GeoJsonFeature) => {
    // Handle detail click logic here
    console.log('Detail clicked for:', feature);
  };

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2">#</th>
          <th className="border px-4 py-2">Daerah</th>
          <th className="border px-4 py-2">Cabang</th>
          <th className="border px-4 py-2">Alamat</th>
          <th className="border px-4 py-2">Detail</th>
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
            <tr key={feature.properties.id_branch}>
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
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Detail
                </button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
