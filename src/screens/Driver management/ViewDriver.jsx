import React from "react";
import "./ViewDrivers.scss";

const ViewDrivers = () => {
  const drivers = [
    { name: "Driver 1", age: 35, contact: "123-456-7890", busNumber: "12A" },
    { name: "Driver 2", age: 42, contact: "987-654-3210", busNumber: "15B" },
  ];

  return (
    <div className="view-drivers">
      <h1>View All Drivers</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Bus Number</th>
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, index) => (
            <tr key={index}>
              <td>{driver.name}</td>
              <td>{driver.age}</td>
              <td>{driver.contact}</td>
              <td>{driver.busNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDrivers;
