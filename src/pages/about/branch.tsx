// import React, { useEffect } from 'react';
// import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import * as L from 'leaflet';

// export default function Branch() {
//   const position: [number, number] = [51.505, -0.09];

//   const LeafletMap: React.FC = () => {
//     const map = useMap();

//     useEffect(() => {
//       if (typeof window !== 'undefined') {
//         const marker = L.marker(position).addTo(map);
//         marker.bindPopup('A pretty CSS3 popup. <br /> Easily customizable.');
//       }
//     }, [map]);

//     return null;
//   };

//   return (
//     <div>
//       <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
//         <div className="absolute top-1/2 left-0 right-0 text-white">
//           <h3 className="tracking-[6px] mb-3">
//             JANGKAU 32 PROVINSI DI INDONESIA
//           </h3>
//           <h1 className="font-bold text-5xl">Cabang</h1>
//         </div>
//       </div>
//       <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <LeafletMap />
//       </MapContainer>
//     </div>
//   );
// }

// 'use client';
// import dynamic from 'next/dynamic';
// import { useEffect } from 'react';
// import { TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';
// import 'leaflet';
// import L from 'leaflet';

// const MapContainer = dynamic(
//   () => import('react-leaflet').then((module) => module.MapContainer),
//   {
//     ssr: false, // Load the component only on the client side
//   }
// );

// export default function Branch() {
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       L.Marker.prototype.options.icon = L.icon({
//         iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//       });
//     }
//   }, []);

//   const center = { lat: 59.433421, lng: 24.75224 };

//   const sensors = {
//     type: 'FeatureCollection',
//     features: [
//       {
//         type: 'Feature',
//         properties: {
//           name: 'Cabang A',
//           description: 'Ini adalah Cabang A',
//         },
//         geometry: {
//           type: 'Point',
//           coordinates: [106.822745, -6.181539],
//         },
//       },
//       {
//         type: 'Feature',
//         properties: {
//           name: 'Cabang B',
//           description: 'Ini adalah Cabang B',
//         },
//         geometry: {
//           type: 'Point',
//           coordinates: [112.732013, -7.257472],
//         },
//       },
//     ],
//   };

//   function onEachFeature(feature: any, layer: L.Layer) {
//     if (feature.properties) {
//       const { popupContent } = feature.properties;
//       layer.bindPopup(popupContent);
//     }
//   }

//   return (
//     <div>
//       {typeof window !== 'undefined' && (
//         <MapContainer
//           style={{ height: '80vh', width: '100vw' }}
//           center={center}
//           zoom={2}
//         >
//           <TileLayer
//             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           />
//           <Marker position={[59.43046, 24.728563]}>
//             <Popup>
//               A pretty CSS3 popup. <br /> Easily customizable.
//             </Popup>
//           </Marker>
//           <GeoJSON data={sensors as any} onEachFeature={onEachFeature} />
//         </MapContainer>
//       )}
//     </div>
//   );
// }
'use client';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import geoJsonData from '@/components/geomap/map.json'; // Import the JSON file
import Table from '@/components/map/Table';

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
  const [geoJsonDataState, setGeoJsonDataState] = useState<any>(null);
  const [selectedDaerah, setSelectedDaerah] = useState<string | null>(null);

  useEffect(() => {
    setGeoJsonDataState(geoJsonData);
  }, []);

  return (
    <div>
      <div className="bg-gray-header w-full h-[450px] mb-20 mx-auto grid text-center relative">
        <div className="absolute lg:top-1/2 top-[45%] left-0 right-0 text-white">
          <h3 className="tracking-[6px] mb-3">
            JANGKAU 32 PROVINSI DI INDONESIA
          </h3>
          <h1 className="font-bold text-5xl">Cabang</h1>
        </div>
      </div>

      <div className="">
        <div className="">
          <div id="map">
            {geoJsonDataState && (
              <MapWithNoSSR
                geoJsonData={geoJsonDataState}
                setSelectedDaerah={setSelectedDaerah}
              />
            )}
          </div>
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-8 mx-auto justify-center items-center"></div>
          {geoJsonDataState &&
            geoJsonDataState.features.map((feature: GeoJsonFeature) => (
              <button
                key={feature.properties.daerah}
                onClick={() => setSelectedDaerah(feature.properties.daerah)}
                className={`p-2 border-b ${
                  selectedDaerah === feature.properties.daerah
                    ? 'border-b-blue-500'
                    : 'border-white text-gray-700'
                }`}
              >
                {feature.properties.daerah}
              </button>
            ))}
        </div>
      </div>

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
  );
}
