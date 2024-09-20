import React from "react";
import "./TopNav.scss";

const TopNav = () => {
  return (
    <nav className="top-nav">
      <div className="nav-container">
        <div className="logo">Admin Dashboard</div>
        <ul className="nav-links">
          <li><a href="/dashboard-overview">Dashboard</a></li>
          <li><a href="/reports-analytics">Reports</a></li>
          <li><a href="/admin-settings">Admin Settings</a></li>
          <li><a href="/system-customization">System Customization</a></li>
          <li><a href="/add-admin">Add Admin</a></li>
          <li><a href="/remove-admin">Remove Admin</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNav;
