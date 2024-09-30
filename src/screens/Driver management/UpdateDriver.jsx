import React, { useState } from "react";
import "./UpdateDriver.scss";

const UpdateDriver = () => {
  // Initial state for drivers
  const [drivers, setDrivers] = useState([
    { id: 1, name: "John Doe", age: 32, contact: "1234567890", aadhar: "1234-5678-9012" },
    { id: 2, name: "Jane Smith", age: 29, contact: "0987654321", aadhar: "2345-6789-0123" },
    { id: 3, name: "Michael Johnson", age: 35, contact: "5432167890", aadhar: "3456-7890-1234" },
  ]);

  // State for selected driver and new details
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [newDetails, setNewDetails] = useState({ name: "", age: "", contact: "" });

  const handleUpdate = (driverId) => {
    // Logic for updating driver details
    setDrivers(drivers.map(driver => 
      driver.id === driverId ? { ...driver, ...newDetails } : driver
    ));
    console.log(`Updated driver with ID ${driverId}`, newDetails);
    // Clear the form after update
    setNewDetails({ name: "", age: "", contact: "" });
    setSelectedDriver(null);
  };

  return (
    <div className="update-driver">
      <h1>Update Driver</h1>

      {/* Table to display drivers */}
      <table className="driver-table">
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Aadhar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.age}</td>
              <td>{driver.contact}</td>
              <td>{driver.aadhar}</td>
              <td>
                <button onClick={() => setSelectedDriver(driver.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to update driver details */}
      {selectedDriver && (
        <div className="update-form">
          <h2>Update Details for {drivers.find(driver => driver.id === selectedDriver)?.name}</h2>
          <label>Name:</label>
          <input
            type="text"
            value={newDetails.name}
            onChange={(e) => setNewDetails({ ...newDetails, name: e.target.value })}
          />

          <label>Age:</label>
          <input
            type="number"
            value={newDetails.age}
            onChange={(e) => setNewDetails({ ...newDetails, age: e.target.value })}
          />

          <label>Contact:</label>
          <input
            type="text"
            value={newDetails.contact}
            onChange={(e) => setNewDetails({ ...newDetails, contact: e.target.value })}
          />

          <button onClick={() => handleUpdate(selectedDriver)}>Update Driver</button>
        </div>
      )}
    </div>
  );
};

export default UpdateDriver;
