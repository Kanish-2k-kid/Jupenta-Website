import React from "react";
import "./AdminDashboard.scss";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-content">
        <h1>Admin Dashboard</h1>
        <div className="dashboard-cards">
          <div className="card">
            <a href="/dashboard-overview">
              <i className="fas fa-chart-pie card-icon"></i>
              <h2>Dashboard</h2>
            </a>
            <p>Get a quick view of all system activities.</p>
          </div>
          <div className="card">
            <a href="/reports-analytics">
              <i className="fas fa-chart-line card-icon"></i>
              <h2>Reports & Analytics</h2>
            </a>
            <p>View and analyze reports.</p>
          </div>
          <div className="card">
            <a href="/admin-settings">
              <i className="fas fa-user-shield card-icon"></i>
              <h2>Admin Settings</h2>
            </a>
            <p>Manage admins and system settings.</p>
          </div>
          <div className="card">
            <a href="/system-customization">
              <i className="fas fa-cogs card-icon"></i>
              <h2>System Customization</h2>
            </a>
            <p>Customize your system's settings and themes.</p>
          </div>
          <div className="card">
            <a href="/add-admin">
              <i className="fas fa-user-plus card-icon"></i>
              <h2>Add Admin</h2>
            </a>
            <p>Add new administrators to the system.</p>
          </div>
          <div className="card">
            <a href="/remove-admin">
              <i className="fas fa-user-minus card-icon"></i>
              <h2>Remove Admin</h2>
            </a>
            <p>Remove administrators from the system.</p>
          </div>
          <div className="card">
            <a href="/logout">
              <i className="fas fa-sign-out-alt card-icon"></i>
              <h2>Logout</h2>
            </a>
            <p>Sign out of the admin system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
