import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const BusMap = () => {
  const { busId } = useParams();
  console.log(`Bus ID from params: ${busId}`);

  return (
    <div>
      <h1>Bus {busId} Location</h1>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            Bus {busId} is here.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default BusMap;
