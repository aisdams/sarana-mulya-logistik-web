import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet/dist/images/marker-shadow.png';
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

interface MapProps {
  geoJsonData: GeoJsonData;
  setSelectedDaerah: React.Dispatch<React.SetStateAction<string | null>>;
}

const Map: React.FC<MapProps> = ({ geoJsonData, setSelectedDaerah }) => {
  // console.log('Received geoJsonData:', geoJsonData);
  const handleMarkerClick = (daerah: string) => {
    setSelectedDaerah(daerah);
  };

  // Calculate the center of the map based on the first feature's coordinates
  const initialCenter = geoJsonData.features[0]?.geometry.coordinates || [0, 0];
  const [mapState, setMapState] = React.useState({
    lat: initialCenter[1],
    lng: initialCenter[0],
    zoom: 3,
  });

  return (
    <MapContainer
      center={[mapState.lat, mapState.lng]}
      zoom={mapState.zoom}
      scrollWheelZoom={false}
      style={{ height: '50vh', width: '100%', zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {geoJsonData.features.map((feature) => (
        <Marker
          key={feature.properties.id_branch}
          position={[
            parseFloat(feature.properties.latitude),
            parseFloat(feature.properties.longitude),
          ]}
          eventHandlers={{
            click: () => {
              setSelectedDaerah(feature.properties.daerah);
              setSelectedDaerah(feature.properties.daerah); // Tambah baris ini
            },
          }}
        >
          <Popup>
            <div className="my-2">
              <strong>Daerah: </strong>
              {feature.properties.daerah}
            </div>
            <div className="my-2">
              <strong>Cabang: </strong>
              {feature.properties.cabang}
            </div>
            <div className="my-2">
              <strong>Alamat: </strong>
              {feature.properties.alamat}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
