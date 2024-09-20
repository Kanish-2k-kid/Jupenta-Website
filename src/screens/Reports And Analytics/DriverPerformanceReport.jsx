import React from 'react';
import { Line } from 'react-chartjs-2';
import './ReportsDashboard.scss';

const DriverPerformanceReport = () => {
  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Driver Performance Score',
        data: [75, 80, 88, 92, 85, 90],
        fill: false,
        borderColor: '#4CAF50',
      },
    ],
  };

  return (
    <div className="report-section">
      <h2>Driver Performance</h2>
      <Line data={performanceData} />
      <button className="download-btn">Download Report</button>
    </div>
  );
};

export default DriverPerformanceReport;
