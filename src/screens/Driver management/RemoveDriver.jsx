import React, { useState } from "react";
import "./RemoveDriver.scss";

const RemoveDriver = () => {
  // Initial state for the list of drivers
  const [drivers, setDrivers] = useState([
    { id: 1, name: 'Driver 1', driver_id: '567890', age: 45, bus: '2', busid:'6754', aadhar: '1234-5678-9012', license: 'ABCD1234', experience: '10 years', contact: '9876543210' },
    { id: 2, name: 'Driver 2', driver_id: '983210', age: 35, bus: '3', busid: '7245', aadhar: '9876-5432-1098', license: 'XYZ9876', experience: '7 years', contact: '8765432109' },
    { id: 3, name: 'Driver 3', driver_id: '987654', age: 50, bus: '1', busid: '7536', aadhar: '5678-1234-9876', license: 'LMNOP123', experience: '15 years', contact: '7654321098' },
  ]);

  // Function to remove a driver by ID
  const handleRemoveDriver = (driverId) => {
    setDrivers(drivers.filter(driver => driver.id !== driverId));
  };

  return (
    <div className="remove-driver">
      <h1>Remove Driver</h1>
      
      {/* Driver Information Table */}
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
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveDriver(driver.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RemoveDriver;
