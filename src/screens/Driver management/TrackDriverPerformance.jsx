import React from "react";
import "./TrackDriverPerformance.scss";

const TrackDriverPerformance = () => {
  const performanceData = [
    { name: "Driver 1", punctuality: "95%", speed: "45km/h", behavior: "Good" },
    { name: "Driver 2", punctuality: "88%", speed: "50km/h", behavior: "Satisfactory" },
  ];

  return (
    <div className="track-driver-performance">
      <h1>Track Driver Performance</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Punctuality</th>
            <th>Speed</th>
            <th>Behavior</th>
          </tr>
        </thead>
        <tbody>
          {performanceData.map((driver, index) => (
            <tr key={index}>
              <td>{driver.name}</td>
              <td>{driver.punctuality}</td>
              <td>{driver.speed}</td>
              <td>{driver.behavior}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackDriverPerformance;
