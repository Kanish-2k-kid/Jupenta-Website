import React from 'react';
import { Bar } from 'react-chartjs-2';
import './ReportsDashboard.scss';

const BusRouteReport = () => {
  const routeData = {
    labels: ['Route 1', 'Route 2', 'Route 3', 'Route 4', 'Route 5'],
    datasets: [
      {
        label: 'Bus Route Efficiency (%)',
        data: [85, 90, 78, 88, 95],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  };

  return (
    <div className="report-section">
      <h2>Bus Route Efficiency</h2>
      <Bar data={routeData} />
      <button className="download-btn">Download Report</button>
    </div>
  );
};

export default BusRouteReport;
