import React, { useState } from 'react';
import './AllSchoolsNotifications.scss';

const AllSchoolsNotifications = () => {
  const [notificationType, setNotificationType] = useState(''); // New state to manage the type of notification

  return (
    <div className="all-schools-notifications">
      <h1>Notifications for All Schools</h1>
      <div className="notification-form">
        <h2>Send New Notification</h2>
        <div className="form-group">
          <label htmlFor="notification-type">Notification Type</label>
          <select 
            id="notification-type" 
            value={notificationType}
            onChange={(e) => setNotificationType(e.target.value)}
          >
            <option value="">Select Notification Type</option>
            <option value="bus-delay">Bus Delay</option>
            <option value="arrival-change">Arrival Time Change</option>
            <option value="general">General Notification</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="notification-message">Message</label>
          <textarea id="notification-message" placeholder="Enter your message here..." />
        </div>
        <div className="form-group">
          <button type="button">Send Notification</button>
        </div>

        <h2>Existing Notifications</h2>
        <div className="notifications-list">
          <div className="notification-item">
            <p><strong>Bus Delay:</strong> The bus schedule has been updated across all schools.</p>
          </div>
          <div className="notification-item">
            <p><strong>Arrival Time Change:</strong> Updated arrival times for all schools.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllSchoolsNotifications;
