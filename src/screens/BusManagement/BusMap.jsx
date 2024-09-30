// BusMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useParams } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';

// Custom bus icon
const busIcon = new L.Icon({
  iconUrl: 'path/to/your/bus-icon.png', // Replace with your bus icon URL
  iconSize: [32, 32], // Size of the icon
  iconAnchor: [16, 32], // Anchor point
  popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
});

const BusMap = () => {
  const { busId } = useParams(); // Extract busId from URL parameters
  const position = [11.0168, 76.9558]; // Coimbatore coordinates

  // Styles
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    color: '#f0f0f0', // Light text color
  };

  const headingStyle = {
    color: '#f0f0f0', // Smoke white for the heading
    fontSize: '24px',
    marginBottom: '20px',
  };

  const mapStyle = {
    height: '400px',
    width: '100%',
    borderRadius: '8px', // Rounded corners for the map
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Slight shadow effect
  };

  const coordinatesStyle = {
    fontSize: '18px',
    marginTop: '20px',
    padding: '10px',
    borderRadius: '5px',
    display: 'inline-block', // Keep the coordinates in one block
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Bus Map for {busId}</h1> {/* Heading in smoke white */}
      
      <MapContainer center={position} zoom={13} style={mapStyle}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={busIcon}>
          <Popup>
            Bus is located here.
          </Popup>
        </Marker>
      </MapContainer>

      <div style={coordinatesStyle}>
        <p>Latitude: {position[0]}</p>
        <p>Longitude: {position[1]}</p>
      </div>
    </div>
  );
};

export default BusMap;
