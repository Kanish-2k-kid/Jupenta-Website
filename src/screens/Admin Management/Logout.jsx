// C:\Jupenta Website\tabernam-admin-template-in-react-js-master\src\screens\Admin Management\Logout.jsx
import React from 'react';

const Logout = () => {
  const handleLogout = () => {
    // Perform logout action
    console.log("Logged out");
  };

  return (
    <div className="logout">
      <h2>Logout</h2>
      <button onClick={handleLogout}>Confirm Logout</button>
    </div>
  );
};

export default Logout;
