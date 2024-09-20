// C:\Jupenta Website\tabernam-admin-template-in-react-js-master\src\screens\Admin Management\RemoveAdmin.jsx
import React from 'react';
import './RemoveAdmin.scss';

const RemoveAdmin = () => (
  <div className="remove-admin">
    <h2>Remove Admin</h2>
    <form>
      <label>Select Admin to Remove:</label>
      <select>
        <option value="admin1">Admin 1</option>
        <option value="admin2">Admin 2</option>
        {/* More admins */}
      </select>

      <button type="submit">Remove Admin</button>
    </form>
  </div>
);

export default RemoveAdmin;
