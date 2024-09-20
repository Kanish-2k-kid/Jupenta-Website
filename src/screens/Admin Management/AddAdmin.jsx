// C:\Jupenta Website\tabernam-admin-template-in-react-js-master\src\screens\Admin Management\AddAdmin.jsx
import React from 'react';
import './AddAdmin.scss';

const AddAdmin = () => (
  <div className="add-admin">
    <h2>Add Admin</h2>
    <form>
      <label>Admin Name:</label>
      <input type="text" placeholder="Enter Admin Name" />
      
      <label>Privilege Level:</label>
      <select>
        <option value="super-admin">Super Admin</option>
        <option value="school-admin">School Admin</option>
      </select>

      <button type="submit">Add Admin</button>
    </form>
  </div>
);

export default AddAdmin;
