import React from "react";
import "./DashboardOverview.scss";

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <h2>Dashboard Overview</h2>
      <div className="stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>1,254</p>
        </div>
        <div className="stat-card">
          <h3>Total Admins</h3>
          <p>12</p>
        </div>
        <div className="stat-card">
          <h3>System Reports</h3>
          <p>34</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
