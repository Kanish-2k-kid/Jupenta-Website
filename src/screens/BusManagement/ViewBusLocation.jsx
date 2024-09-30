import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import './ViewBusLocation.scss';

// Mock data for buses (replace with actual bus data)
const buses = [
  { id: 1, busNumber: 'Bus 101' },
  { id: 2, busNumber: 'Bus 102' },
  { id: 3, busNumber: 'Bus 201' },
  { id: 4, busNumber: 'Bus 202' },
];

const ViewBusLocation = () => {
  const [selectedBus, setSelectedBus] = useState(null);
  const navigate = useNavigate(); // Using useNavigate for navigation

  const navigateToBusMap = () => {
    if (selectedBus) {
      console.log('Navigating to bus map for:', selectedBus); // Log the selected bus ID
      navigate(`/bus-map/${selectedBus}`);
    } else {
      console.error('No bus selected!'); // Error if no bus is selected
    }
  };

  // Add this function to handle bus selection
  const handleBusSelection = (busId) => {
    console.log('Bus selected:', busId); // This should log the selected bus ID
    setSelectedBus(busId);
};


  return (
    <div className="view-bus-location">
      <h1>Select a Bus to View Location</h1>
      <div className="bus-selection">
        {buses.map(bus => (
          <div key={bus.id} className="bus-card">
            <input
              type="radio"
              id={`bus-${bus.id}`}
              name="bus"
              value={bus.id}
              onChange={() => handleBusSelection(bus.id)} // Call the new function here
              className="bus-radio"
            />
            <label htmlFor={`bus-${bus.id}`} className="bus-label">
              {bus.busNumber}
            </label>
          </div>
        ))}
      </div>
      <button onClick={navigateToBusMap} disabled={!selectedBus}>
    Go to Bus Map
</button>

    </div>
  );
};

export default ViewBusLocation; // Ensure you have this line to export the component
