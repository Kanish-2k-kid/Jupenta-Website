import React, { useState } from 'react';
import './BusAddRemove.scss'; // Ensure you style the page here

const BusAddRemove = () => {
  // Initial state for buses
  const [buses, setBuses] = useState([
    { id: 1, number: 'Bus 101', driver: 'John Doe' },
    { id: 2, number: 'Bus 102', driver: 'Jane Smith' },
  ]);

  // State for the new bus form
  const [newBus, setNewBus] = useState({ number: '', driver: '' });

  // Handle adding a bus
  const handleAddBus = (e) => {
    e.preventDefault();
    if (newBus.number && newBus.driver) {
      const newBusData = { id: buses.length + 1, ...newBus };
      setBuses([...buses, newBusData]);
      setNewBus({ number: '', driver: '' }); // Clear the form
    }
  };

  // Handle removing a bus
  const handleRemoveBus = (busId) => {
    setBuses(buses.filter(bus => bus.id !== busId));
  };

  return (
    <div className="bus-add-remove">
      <h1>Add/Remove Buses</h1>

      {/* Form to add a new bus */}
      <form className="add-bus-form" onSubmit={handleAddBus}>
        <input
          type="text"
          placeholder="Bus Number"
          value={newBus.number}
          onChange={(e) => setNewBus({ ...newBus, number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Driver Name"
          value={newBus.driver}
          onChange={(e) => setNewBus({ ...newBus, driver: e.target.value })}
        />
        <button type="submit">Add Bus</button>
      </form>

      {/* Table to display bus details */}
      <table className="bus-table">
        <thead>
          <tr>
            <th>Bus Number</th>
            <th>Driver</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.number}</td>
              <td>{bus.driver}</td>
              <td>
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveBus(bus.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusAddRemove;
