import React, { useState } from 'react';
import './AddAdmin.scss';

const AddAdmin = () => {
  const [adminName, setAdminName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [privilegeLevel, setPrivilegeLevel] = useState('super-admin');
  const [education, setEducation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`Admin ${adminName} added successfully!`);
  };

  return (
    <div className="add-admin">
      <h2>Add New Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Admin Name:</label>
          <input
            type="text"
            value={adminName}
            onChange={(e) => setAdminName(e.target.value)}
            placeholder="Enter Admin Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter Phone Number"
            required
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter Age"
            required
          />
        </div>

        <div className="form-group">
          <label>Salary:</label>
          <input
            type="text"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Enter Salary"
            required
          />
        </div>

        <div className="form-group">
          <label>Educational Qualification:</label>
          <input
            type="text"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            placeholder="Enter Qualification"
            required
          />
        </div>

        <div className="form-group">
          <label>Privilege Level:</label>
          <select
            value={privilegeLevel}
            onChange={(e) => setPrivilegeLevel(e.target.value)}
          >
            <option value="super-admin">Superior Admin</option>
            <option value="super-admin">Super Admin</option>
            <option value="school-admin">School Admin</option>
          </select>
        </div>

        <button type="submit">Add Admin</button>
      </form>
    </div>
  );
};

export default AddAdmin;
