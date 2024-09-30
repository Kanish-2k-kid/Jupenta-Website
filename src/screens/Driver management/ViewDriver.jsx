import React from "react";
import "./ViewDrivers.scss";

const ViewDrivers = () => {
  const drivers = [
    {
      id: "D001",
      name: "Driver 1",
      age: 35,
      contact: "123-456-7890",
      aadhar: "1234-5678-9101",
      experience: "10 years",
      busNumber: "12A",
      busId: "B001",
      license: "ABCD1234",  // Added license
      image: "https://via.placeholder.com/50", // Placeholder image URL
    },
    {
      id: "D002",
      name: "Driver 2",
      age: 42,
      contact: "987-654-3210",
      aadhar: "9876-5432-1098",
      experience: "15 years",
      busNumber: "15B",
      busId: "B002",
      license: "XYZ9876", // Added license
      image: "https://via.placeholder.com/50", // Placeholder image URL
    },
  ];

  return (
    <div className="view-drivers">
      <h1>View All Drivers</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Driver ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Contact</th>
            <th>Aadhar</th>
            <th>Experience</th>
            <th>Bus Number</th>
            <th>Bus ID</th>
            <th>License</th> {/* Added License header */}
          </tr>
        </thead>
        <tbody>
          {drivers.map((driver, index) => (
            <tr key={index}>
              <td>
                <img src={driver.image} alt={`${driver.name}`} className="driver-image" />
              </td>
              <td>{driver.id}</td>
              <td>{driver.name}</td>
              <td>{driver.age}</td>
              <td>{driver.contact}</td>
              <td>{driver.aadhar}</td>
              <td>{driver.experience}</td>
              <td>{driver.busNumber}</td>
              <td>{driver.busId}</td>
              <td>{driver.license}</td> {/* Added License data */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDrivers;
