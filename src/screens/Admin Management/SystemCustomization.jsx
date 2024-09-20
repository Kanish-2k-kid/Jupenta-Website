import React, { useState } from 'react';
import './SystemCustomization.scss';

const SystemCustomization = () => {
  // State for different settings
  const [theme, setTheme] = useState('light');
  const [notificationInterval, setNotificationInterval] = useState('hourly');
  const [language, setLanguage] = useState('English');
  const [timeZone, setTimeZone] = useState('UTC');

  const handleSaveSettings = () => {
    alert('Settings have been saved successfully!');
    // Add logic to save the settings
  };

  const handleResetDefaults = () => {
    setTheme('light');
    setNotificationInterval('hourly');
    setLanguage('English');
    setTimeZone('UTC');
    alert('Settings have been reset to default.');
  };

  return (
    <div className="system-customization">
      <h2>System Customization</h2>

      {/* App Theme Selection */}
      <div className="customization-section">
        <h3>Theme Settings</h3>
        <label>Choose Theme:</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      {/* Notification Interval Settings */}
      <div className="customization-section">
        <h3>Notification Interval</h3>
        <label>Select Notification Interval:</label>
        <select
          value={notificationInterval}
          onChange={(e) => setNotificationInterval(e.target.value)}
        >
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
      </div>

      {/* Language Preferences */}
      <div className="customization-section">
        <h3>Language Preferences</h3>
        <label>Select Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="English">English</option>
          <option value="Tamil">Tamil</option>
          <option value="Hindi">Hindi</option>
          <option value="French">French</option>
        </select>
      </div>

      {/* Time Zone Selection */}
      <div className="customization-section">
        <h3>Time Zone</h3>
        <label>Select Time Zone:</label>
        <select value={timeZone} onChange={(e) => setTimeZone(e.target.value)}>
          <option value="UTC">UTC</option>
          <option value="GMT">GMT</option>
          <option value="PST">PST</option>
          <option value="IST">IST</option>
        </select>
      </div>

      {/* Buttons for Saving and Resetting */}
      <div className="customization-buttons">
        <button className="save-button" onClick={handleSaveSettings}>
          Save Settings
        </button>
        <button className="reset-button" onClick={handleResetDefaults}>
          Reset to Default
        </button>
      </div>
    </div>
  );
};

export default SystemCustomization;
