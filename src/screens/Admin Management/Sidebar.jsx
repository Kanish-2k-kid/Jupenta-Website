// C:\Jupenta Website\tabernam-admin-template-in-react-js-master\src\screens\Admin Management\Sidebar.jsx
import React from 'react';
import './Sidebar.scss';  // Sidebar-specific styles

const Sidebar = () => (
  <aside className="sidebar">
    <nav className="nav">
      <ul>
        <li><a href="#dashboard">Dashboard Overview</a></li>
        <li><a href="#reports">Reports & Analytics</a></li>
        <li><a href="#admin-settings">Admin Settings</a></li>
        <li><a href="#system-settings">System Customization</a></li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;
