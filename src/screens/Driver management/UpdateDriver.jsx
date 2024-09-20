import React, { useState } from "react";
import "./UpdateDriver.scss";

const UpdateDriver = () => {
  const [drivers, setDrivers] = useState(["Driver 1", "Driver 2", "Driver 3"]);
  const [selectedDriver, setSelectedDriver] = useState("");
  const [newDetails, setNewDetails] = useState({ name: "", age: "", contact: "" });

  const handleUpdate = () => {
    // Logic for updating the driver details
    console.log(`Updating ${selectedDriver}`, newDetails);
  };

  return (
    <div className="update-driver">
      <h1>Update Driver</h1>
      <select onChange={(e) => setSelectedDriver(e.target.value)} value={selectedDriver}>
        <option value="">Select a Driver</option>
        {drivers.map((driver, index) => (
          <option key={index} value={driver}>{driver}</option>
        ))}
      </select>

      {selectedDriver && (
        <div className="update-form">
          <label>Name:</label>
          <input type="text" value={newDetails.name} onChange={(e) => setNewDetails({...newDetails, name: e.target.value})} />

          <label>Age:</label>
          <input type="number" value={newDetails.age} onChange={(e) => setNewDetails({...newDetails, age: e.target.value})} />

          <label>Contact:</label>
          <input type="text" value={newDetails.contact} onChange={(e) => setNewDetails({...newDetails, contact: e.target.value})} />

          <button onClick={handleUpdate}>Update Driver</button>
        </div>
      )}
    </div>
  );
};

export default UpdateDriver;
