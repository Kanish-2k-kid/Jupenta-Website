import React from 'react';
import { Pie } from 'react-chartjs-2';
import './ReportsDashboard.scss';

const StudentUsageReport = () => {
  const usageData = {
    labels: ['Daily', 'Weekly', 'Monthly'],
    datasets: [
      {
        label: 'Student Usage',
        data: [120, 450, 1350],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className="report-section">
      <h2>Student Usage Overview</h2>
      <Pie data={usageData} />
      <button className="download-btn">Download Report</button>
    </div>
  );
};

export default StudentUsageReport;
