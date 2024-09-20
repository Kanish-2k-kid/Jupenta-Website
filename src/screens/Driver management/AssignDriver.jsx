import React, { useState } from "react";
import "./AssignDriver.scss";

const AssignDriver = () => {
  const [drivers, setDrivers] = useState(["Driver 1", "Driver 2", "Driver 3"]);
  const [selectedDriver, setSelectedDriver] = useState("");
  const [busNumber, setBusNumber] = useState("");
  const [route, setRoute] = useState("");

  const handleAssign = () => {
    // Logic for assigning driver to bus/route
    console.log({ selectedDriver, busNumber, route });
  };

  return (
    <div className="assign-driver">
      <h1>Assign Driver to Bus/Route</h1>
      <select onChange={(e) => setSelectedDriver(e.target.value)} value={selectedDriver}>
        <option value="">Select a Driver</option>
        {drivers.map((driver, index) => (
          <option key={index} value={driver}>{driver}</option>
        ))}
      </select>

      <label>Bus Number:</label>
      <input type="text" value={busNumber} onChange={(e) => setBusNumber(e.target.value)} />


      <button onClick={handleAssign} disabled={!selectedDriver}>Assign Driver</button>
    </div>
  );
};

export default AssignDriver;
