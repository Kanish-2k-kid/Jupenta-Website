import React, { useState } from 'react';
import './AdminSettings.scss';
import profilePicture from '../../assets/images/Surya image.jpg'; // Correct image import

const AdminSettings = () => {
  const [adminName, setAdminName] = useState('Kanish SS'); // Admin's name
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [theme, setTheme] = useState('light');
  const [notificationInterval, setNotificationInterval] = useState('hourly');

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      alert('Password changed successfully!');
    } else {
      alert('Passwords do not match!');
    }
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    alert(`Theme changed to ${e.target.value}`);
  };

  const handleNotificationChange = (e) => {
    setNotificationInterval(e.target.value);
    alert(`Notification interval set to ${e.target.value}`);
  };

  return (
    <div className="admin-settings">
      {/* Admin Profile Section */}
      <div className="profile-section">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h3>{adminName}</h3>
      </div>

      <h2>Admin Settings</h2>

      {/* Change Password Section */}
      <div className="settings-section">
        <h3>Change Password</h3>
        <form onSubmit={handlePasswordChange}>
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Change Password</button>
        </form>
      </div>

      {/* Manage Notification Settings */}
      <div className="settings-section">
        <h3>Notification Settings</h3>
        <label>Notification Interval:</label>
        <select value={notificationInterval} onChange={handleNotificationChange}>
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      {/* Theme Settings */}
      <div className="settings-section">
        <h3>Theme Settings</h3>
        <label>Choose Theme:</label>
        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default AdminSettings;
