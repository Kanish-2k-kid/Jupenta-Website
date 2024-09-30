import React, { useState } from 'react';
import './RemoveAdmin.scss';

const RemoveAdmin = () => {
  const [selectedAdmin, setSelectedAdmin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedAdmin) {
      alert(`Admin ${selectedAdmin} removed successfully!`);
    } else {
      alert('Please select an admin to remove.');
    }
  };

  return (
    <div className="remove-admin">
      <h2>Remove Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Admin to Remove:</label>
          <select
            value={selectedAdmin}
            onChange={(e) => setSelectedAdmin(e.target.value)}
            required
          >
            <option value="">-- Select Admin --</option>
            <option value="admin1">Admin 1</option>
            <option value="admin2">Admin 2</option>
            <option value="admin3">Admin 3</option>
            {/* Add more admin options here */}
          </select>
        </div>

        <button type="submit">Remove Admin</button>
      </form>
    </div>
  );
};

export default RemoveAdmin;
