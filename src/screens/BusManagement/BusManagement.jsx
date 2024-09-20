// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './BusManagement.scss';

// Sample list of routes and drivers for assignment
const sampleRoutes = ['Route A', 'Route B', 'Route C', 'Route D'];
const sampleDrivers = ['John Doe', 'Jane Smith', 'Chris Evans', 'Emma Watson'];

const BusManagement = () => {
  // State to hold the list of buses
  const [buses, setBuses] = useState([
    { id: 1, number: 'Bus 101', driver: 'John Doe', route: 'Route A', location: '34.0522 N, 118.2437 W', schedule: '8 AM - 4 PM' },
    { id: 2, number: 'Bus 102', driver: 'Jane Smith', route: 'Route B', location: '36.7783 N, 119.4179 W', schedule: '9 AM - 5 PM' },
  ]);

  // State for managing new bus details
  const [newBusNumber, setNewBusNumber] = useState('');
  const [newDriver, setNewDriver] = useState('');
  const [newRoute, setNewRoute] = useState('');
  const [newSchedule, setNewSchedule] = useState('');

  // Add a new bus
  const addBus = () => {
    const newBus = {
      id: buses.length + 1,
      number: newBusNumber,
      driver: newDriver,
      route: newRoute,
      location: 'N/A',
      schedule: newSchedule,
    };
    setBuses([...buses, newBus]);
    setNewBusNumber('');
    setNewDriver('');
    setNewRoute('');
    setNewSchedule('');
  };

  // Remove a bus
  const removeBus = (id) => {
    const updatedBuses = buses.filter((bus) => bus.id !== id);
    setBuses(updatedBuses);
  };

  return (
    <div className="bus-management">
      <h1>Bus Management</h1>

      {/* Add New Bus Section */}
      <div className="bus-form">
        <h2>Add New Bus</h2>
        <input
          type="text"
          placeholder="Bus Number"
          value={newBusNumber}
          onChange={(e) => setNewBusNumber(e.target.value)}
        />
        <select value={newDriver} onChange={(e) => setNewDriver(e.target.value)}>
          <option value="">Select Driver</option>
          {sampleDrivers.map((driver, index) => (
            <option key={index} value={driver}>
              {driver}
            </option>
          ))}
        </select>
        <select value={newRoute} onChange={(e) => setNewRoute(e.target.value)}>
          <option value="">Select Route</option>
          {sampleRoutes.map((route, index) => (
            <option key={index} value={route}>
              {route}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Schedule (e.g., 8 AM - 4 PM)"
          value={newSchedule}
          onChange={(e) => setNewSchedule(e.target.value)}
        />
        <button className="add-bus-btn" onClick={addBus}>
          Add Bus
        </button>
      </div>

      {/* List of Buses */}
      <div className="bus-list">
        <h2>Manage Buses</h2>
        <table>
          <thead>
            <tr>
              <th>Bus Number</th>
              <th>Driver</th>
              <th>Route</th>
              <th>Location (GPS)</th>
              <th>Schedule</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {buses.map((bus) => (
              <tr key={bus.id}>
                <td>{bus.number}</td>
                <td>{bus.driver}</td>
                <td>{bus.route}</td>
                <td>{bus.location}</td>
                <td>{bus.schedule}</td>
                <td>
                  <button onClick={() => removeBus(bus.id)} className="remove-bus-btn">
                    Remove
                  </button>
                  <button className="view-gps-btn">View GPS</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BusManagement;
