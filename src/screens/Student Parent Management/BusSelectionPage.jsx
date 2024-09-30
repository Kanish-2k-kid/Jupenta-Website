import React from "react";
import { useNavigate } from "react-router-dom";
import "./BusSelectionPage.scss";

// Sample bus data
const buses = [
  { busNumber: "Bus 12" },
  { busNumber: "Bus 9" },
  { busNumber: "Bus 8" },
  { busNumber: "Bus 5" },
];

const BusSelectionPage = () => {
  const navigate = useNavigate();

  const handleBusSelection = (busNumber) => {
    navigate(`/student-parent-management/${busNumber}`);
  };

  return (
    <div className="bus-selection">
      <h1>Select a Bus</h1>
      <div className="bus-list">
        {buses.map((bus) => (
          <div
            key={bus.busNumber}
            className="bus-card"
            onClick={() => handleBusSelection(bus.busNumber)}
          >
            <h2>{bus.busNumber}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusSelectionPage;
