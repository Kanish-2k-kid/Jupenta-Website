import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './ReportsDashboard.scss';

const SystemAnalytics = () => {
  const analyticsData = {
    labels: ['Active Users', 'Inactive Users', 'New Signups'],
    datasets: [
      {
        label: 'System Analytics',
        data: [500, 200, 50],
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  return (
    <div className="report-section">
      <h2>System Analytics Overview</h2>
      <Doughnut data={analyticsData} />
    </div>
  );
};

export default SystemAnalytics;
