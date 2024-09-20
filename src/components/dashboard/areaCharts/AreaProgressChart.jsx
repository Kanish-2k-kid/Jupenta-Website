import React from 'react';
import './AreaCharts.scss'; // Ensure styles are updated for new content

const data = [
  {
    id: 1,
    name: "Bus Utilization",
    percentValues: 75, // Example value: 75% of buses in use
  },
  {
    id: 2,
    name: "Student Attendance",
    percentValues: 85, // Example value: 85% attendance
  },
  {
    id: 3,
    name: "Maintenance Requests",
    percentValues: 40, // Example value: 40% of maintenance requests addressed
  },
  {
    id: 4,
    name: "On-Time Departures",
    percentValues: 90, // Example value: 90% on-time departures
  },
  {
    id: 5,
    name: "Delayed Departures",
    percentValues: 20, // Example value: 20% delayed departures
  },
];

const AreaProgressChart = () => {
  return (
    <div className="progress-bar">
      <div className="progress-bar-info">
        <h4 className="progress-bar-title">Monthly Analysis of Bus Projects</h4>
      </div>
      <div className="progress-bar-list">
        {data.map((item) => {
          return (
            <div className="progress-bar-item" key={item.id}>
              <div className="bar-item-info">
                <p className="bar-item-info-name">{item.name}</p>
                <p className="bar-item-info-value">
                  {item.percentValues}%
                </p>
              </div>
              <div className="bar-item-full">
                <div
                  className="bar-item-filled"
                  style={{
                    width: `${item.percentValues}%`,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AreaProgressChart;
