import React from "react";
import "./ExistingNotifications.scss"; // Custom styles

const ExistingNotifications = () => {
  // Sample data for notifications
  const notifications = [
    { id: 1, type: 'Bus Overspeed', message: 'The bus with ID 1234 is currently overspeeding.', timestamp: '2024-09-15 10:00 AM' },
    { id: 2, type: 'Driver Change', message: 'Driver for Route 5 has been changed.', timestamp: '2024-09-14 03:30 PM' },
    { id: 3, type: 'Route Change', message: 'Route for School X has been updated.', timestamp: '2024-09-13 09:00 AM' },
  ];

  return (
    <div className="existing-notifications">
      <h1>Existing Notifications</h1>
      <div className="notifications-list">
        {notifications.map(notification => (
          <div key={notification.id} className="notification-card">
            <h3>{notification.type}</h3>
            <p>{notification.message}</p>
            <small>{notification.timestamp}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExistingNotifications;
