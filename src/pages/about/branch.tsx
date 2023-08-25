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

import React from 'react';

export default function branch() {
  return <div>branch</div>;
}
