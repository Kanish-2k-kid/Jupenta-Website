import React, { useState } from 'react';
import './SingleSchoolNotifications.scss';

const SingleSchoolNotifications = () => {
  const [notificationType, setNotificationType] = useState('');
  const [notificationTarget, setNotificationTarget] = useState(''); // New state to manage the target of notifications

  return (
    <div className="single-school-notifications">
      <h1>Single School Notifications</h1>
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
          <label htmlFor="notification-target">Send To</label>
          <select 
            id="notification-target" 
            value={notificationTarget}
            onChange={(e) => setNotificationTarget(e.target.value)}
          >
            <option value="">Select Target</option>
            <option value="parents">Parents</option>
            <option value="school">School</option>
            <option value="both">Both</option>
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
            <p><strong>Bus Delay:</strong> The bus will arrive 10 minutes late.</p>
          </div>
          <div className="notification-item">
            <p><strong>Arrival Time Change:</strong> The arrival time has been updated to 4:00 PM.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleSchoolNotifications;
