import React, { useState } from "react";
import "./AddDriver.scss";

const AddDriver = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [contact, setContact] = useState("");
  const [busNumber, setBusNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for adding the driver
    console.log({ name, age, contact, busNumber });
  };

  return (
    <div className="add-driver">
      <h1>Add New Driver</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Age:</label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
        <label>Contact Info:</label>
        <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
        <label>Bus Number:</label>
        <input type="text" value={busNumber} onChange={(e) => setBusNumber(e.target.value)} required />
        <button type="submit">Add Driver</button>
      </form>
    </div>
  );
};

export default AddDriver;
