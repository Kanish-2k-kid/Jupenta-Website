import React from 'react';
import './ReportsAndAnalytics.scss';

const ReportsAndAnalytics = () => (
  <div className="reports-analytics">
    <h2>Reports & Analytics</h2>
    <p>Review system activity and performance of school buses.</p>

    {/* Simple Overview Cards */}
    <div className="overview-cards">
      <div className="card">
        <h3>Total Buses Tracked</h3>
        <p>50</p>
      </div>
      <div className="card">
        <h3>Active Buses</h3>
        <p>45</p>
      </div>
      <div className="card">
        <h3>Alerts Sent Today</h3>
        <p>200</p>
      </div>
    </div>

    {/* Simple Data Table */}
    <div className="data-table">
      <h3>Recent Activity</h3>
      <table>
        <thead>
          <tr>
            <th>Bus ID</th>
            <th>Driver Name</th>
            <th>Status</th>
            <th>Alerts Sent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>John Doe</td>
            <td>Active</td>
            <td>15</td>
          </tr>
          <tr>
            <td>67890</td>
            <td>Jane Smith</td>
            <td>Inactive</td>
            <td>5</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>

    {/* Basic Filters */}
    <div className="filters">
      <h3>Filter by:</h3>
      <label>
        Date:
        <input type="date" />
      </label>
      <label>
        Status:
        <select>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </label>
      <button className="filter-btn">Apply</button>
    </div>
  </div>
);

export default ReportsAndAnalytics;
