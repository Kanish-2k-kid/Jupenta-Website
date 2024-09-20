import React, { useState } from 'react';
import './ReportsDashboard.scss';
import BusRouteReport from './BusRoutesReport';
import StudentUsageReport from './StudentUsageReport';
import DriverPerformanceReport from './DriverPerformanceReport';
import ProfitManagement from './ProfitManagementReport';
import SystemAnalytics from './SystemAnalytics';

const ReportsDashboard = () => {
  const [activeTab, setActiveTab] = useState('analytics'); // Default tab

  const renderContent = () => {
    switch (activeTab) {
      case 'routes':
        return <BusRouteReport />;
      case 'students':
        return <StudentUsageReport />;
      case 'drivers':
        return <DriverPerformanceReport />;
      case 'profit':
        return <ProfitManagement />;
      case 'analytics':
      default:
        return <SystemAnalytics />;
    }
  };

  return (
    <div className="reports-dashboard-container">
      <div className="sidebar">
        <ul>
          <li
            className={activeTab === 'analytics' ? 'active' : ''}
            onClick={() => setActiveTab('analytics')}
          >
            System Analytics
          </li>
          <li
            className={activeTab === 'routes' ? 'active' : ''}
            onClick={() => setActiveTab('routes')}
          >
            Bus Route Report
          </li>
          <li
            className={activeTab === 'students' ? 'active' : ''}
            onClick={() => setActiveTab('students')}
          >
            Student Usage Report
          </li>
          <li
            className={activeTab === 'drivers' ? 'active' : ''}
            onClick={() => setActiveTab('drivers')}
          >
            Driver Performance
          </li>
          <li
            className={activeTab === 'profit' ? 'active' : ''}
            onClick={() => setActiveTab('profit')}
          >
            Profit Management
          </li>
        </ul>
      </div>
      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
};

export default ReportsDashboard;
