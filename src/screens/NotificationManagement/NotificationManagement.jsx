import React from "react";
import { Link } from "react-router-dom";
import "./NotificationManagement.scss"; // Assuming you have custom styles

const NotificationManagement = () => {
  return (
    <div className="notification-management">
      <h1>Notification Management</h1>
      <div className="notification-options">
        <div className="notification-card">
          <Link to="/notifications/school-selection">
            <button className="option-btn"><b>Send Notifications to a Single School</b></button>
          </Link>
        </div>
        <div className="notification-card">
          <Link to="/notifications/all-schools">
            <button className="option-btn" ><b>Send Notifications to All Schools</b></button>
          </Link>
        </div>
        <div className="notification-card">
          <Link to="/notifications/existing">
            <button className="option-btn"><b>View Existing Notifications</b></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotificationManagement;
