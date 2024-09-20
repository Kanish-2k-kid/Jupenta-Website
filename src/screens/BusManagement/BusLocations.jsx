import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './BusLocations.scss';

// Custom marker icon
const busIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/ios-filled/50/000000/school-bus.png',
  iconSize: [35, 35],
});

const BusLocations = () => {
  const [busLocations, setBusLocations] = useState([]);

  useEffect(() => {
    const fetchBusLocations = async () => {
      const mockBusData = [
        { id: 1, lat: 12.9715987, lng: 77.594566, name: 'Bus 101', speed: 50 },
        { id: 2, lat: 12.2958104, lng: 76.6393805, name: 'Bus 102', speed: 45 },
      ];
      setBusLocations(mockBusData);
    };

    fetchBusLocations();
  }, []);

  return (
    <div className="bus-locations-page">
      <h1>Bus Locations (GPS)</h1>
      <MapContainer center={[12.9716, 77.5946]} zoom={10} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {busLocations.map(bus => (
          <Marker key={bus.id} position={[bus.lat, bus.lng]} icon={busIcon}>
            <Popup>
              <b>{bus.name}</b> <br />
              Speed: {bus.speed} km/h <br />
              Current Location: [{bus.lat.toFixed(4)}, {bus.lng.toFixed(4)}]
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BusLocations;
