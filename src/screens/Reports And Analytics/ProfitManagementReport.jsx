import React from 'react';
import { Line } from 'react-chartjs-2';
import './ReportsDashboard.scss';

const ProfitManagement = () => {
  const profitData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Profit (₹)',
        data: [5000, 7500, 6500, 8000, 8500, 9000],
        fill: false,
        borderColor: '#FF6384',
      },
    ],
  };

  return (
    <div className="report-section">
      <h2>Profit Management</h2>
      <Line data={profitData} />
      <button className="download-btn">Download Profit Report</button>
    </div>
  );
};

export default ProfitManagement;
