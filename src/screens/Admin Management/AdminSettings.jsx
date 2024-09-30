import React, { useState } from 'react';
import './AdminSettings.scss';
import profilePicture from '../../assets/images/Surya image.jpg'; // Ensure the correct path

const AdminSettings = () => {
  // Admin details state
  const [adminName, setAdminName] = useState('Kanish SS');
  const [adminID, setAdminID] = useState('A123');
  const [adminUsername, setAdminUsername] = useState('Kani@123');
  const [adminPass, setAdminPass] = useState('12345');
  const [adminAge, setAdminAge] = useState(19);
  const [adminSalary, setAdminSalary] = useState('₹50,000');
  const [adminType, setAdminType] = useState('Superior Admin');
  const [educationalQualification, setEducationalQualification] = useState('Masters in Computer Science');
  
  // Password change state
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Settings state
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
      <div className="admin-profile-card">
        <img src={profilePicture} alt="Admin Profile" className="profile-picture" />
        <div className="admin-info">
          <h2>{adminName}</h2>
          <p><strong>ID:</strong> {adminID}</p>
          <p><strong>Username:</strong> {adminUsername}</p>
          <p><strong>Password</strong> {adminPass}</p>
          <p><strong>Age:</strong> {adminAge}</p>
          <p><strong>Salary:</strong> {adminSalary}</p>
          <p><strong>Type:</strong> {adminType}</p>
          <p><strong>Qualification:</strong> {educationalQualification}</p>
        </div>
      </div>

      <div className="admin-settings-section">
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
    </div>
  );
};

export default AdminSettings;
