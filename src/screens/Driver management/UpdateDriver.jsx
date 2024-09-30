import React, { useState } from "react";
import "./UpdateDriver.scss";

const UpdateDriver = () => {
  // Initial state for drivers (same fields as in RemoveDriver)
  const [drivers, setDrivers] = useState([
    { id: 1, name: 'Driver 1', driver_id: '567890', age: 45, bus: '2', busid:'6754', aadhar: '1234-5678-9012', license: 'ABCD1234', experience: '10 years', contact: '9876543210' },
    { id: 2, name: 'Driver 2', driver_id: '983210', age: 35, bus: '3', busid: '7245', aadhar: '9876-5432-1098', license: 'XYZ9876', experience: '7 years', contact: '8765432109' },
    { id: 3, name: 'Driver 3', driver_id: '987654', age: 50, bus: '1', busid: '7536', aadhar: '5678-1234-9876', license: 'LMNOP123', experience: '15 years', contact: '7654321098' },
  ]);

  // State for selected driver and new details for update
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [newDetails, setNewDetails] = useState({ name: "", age: "", contact: "", license: "", experience: "" });

  // Function to handle updating driver details
  const handleUpdate = (driverId) => {
    setDrivers(drivers.map(driver => 
      driver.id === driverId ? { ...driver, ...newDetails } : driver
    ));
    console.log(`Updated driver with ID ${driverId}`, newDetails);

    // Clear the form after updating
    setNewDetails({ name: "", age: "", contact: "", license: "", experience: "" });
    setSelectedDriver(null);
  };

  return (
    <div className="update-driver">
      <h1>Update Driver</h1>

      {/* Table displaying all driver details */}
      <table className="driver-table">
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Driver ID</th>
            <th>Age</th>
            <th>Bus Assigned</th>
            <th>Bus Id</th>
            <th>Aadhar</th>
            <th>License</th>
            <th>Experience</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.driver_id}</td>
              <td>{driver.age}</td>
              <td>{driver.bus}</td>
              <td>{driver.busid}</td>
              <td>{driver.aadhar}</td>
              <td>{driver.license}</td>
              <td>{driver.experience}</td>
              <td>{driver.contact}</td>
              <td>
                <button onClick={() => setSelectedDriver(driver.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form for updating driver details */}
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

          <label>License:</label>
          <input
            type="text"
            value={newDetails.license}
            onChange={(e) => setNewDetails({ ...newDetails, license: e.target.value })}
          />

          <label>Experience:</label>
          <input
            type="text"
            value={newDetails.experience}
            onChange={(e) => setNewDetails({ ...newDetails, experience: e.target.value })}
          />

          <button onClick={() => handleUpdate(selectedDriver)}>Update Driver</button>
        </div>
      )}
    </div>
  );
};

export default UpdateDriver;
