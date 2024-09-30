import React, { useState } from "react";
import "./RemoveDriver.scss";

const RemoveDriver = () => {
  const [drivers, setDrivers] = useState([
    { id: 1, name: 'Driver 1', driver_id: '567890', age: 45, bus: '2' },
    { id: 2, name: 'Driver 2', driver_id: '983210', age: 35, bus: '3' },
    { id: 3, name: 'Driver 3', driver_id: '987654', age: 50, bus: '1' },
  ]);

  const handleRemoveDriver = (driverId) => {
    setDrivers(drivers.filter(driver => driver.id !== driverId));
  };

  return (
    <div className="remove-driver">
      <h1>Remove Driver</h1>
      <table className="driver-table">
        <thead>
          <tr>
            <th>Driver Name</th>
            <th>Id</th>
            <th>Age</th>
            <th>Bus</th>
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
