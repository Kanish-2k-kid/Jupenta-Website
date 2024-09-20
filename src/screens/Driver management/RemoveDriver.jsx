import React, { useState } from "react";
import "./RemoveDriver.scss";

const RemoveDriver = () => {
  const [drivers, setDrivers] = useState(["Driver 1", "Driver 2", "Driver 3"]);
  const [selectedDriver, setSelectedDriver] = useState("");

  const handleRemove = () => {
    // Logic for removing the driver
    console.log(`Removing ${selectedDriver}`);
  };

  return (
    <div className="remove-driver">
      <h1>Remove Driver</h1>
      <select onChange={(e) => setSelectedDriver(e.target.value)} value={selectedDriver}>
        <option value="">Select a Driver</option>
        {drivers.map((driver, index) => (
          <option key={index} value={driver}>{driver}</option>
        ))}
      </select>
      <button onClick={handleRemove} disabled={!selectedDriver}>Remove Driver</button>
    </div>
  );
};

export default RemoveDriver;
