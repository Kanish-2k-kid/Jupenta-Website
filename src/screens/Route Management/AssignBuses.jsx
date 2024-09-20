import React, { useState } from 'react';
import './AssignBuses.scss';

const AssignBuses = () => {
  const [routeId, setRouteId] = useState('');
  const [busId, setBusId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle bus assignment
    console.log('Bus assigned:', { routeId, busId });
  };

  return (
    <div className="assign-buses-page">
      <h1>Assign Buses to Routes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Route ID:
          <input
            type="text"
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
            required
          />
        </label>
        <label>
          Bus ID:
          <input
            type="text"
            value={busId}
            onChange={(e) => setBusId(e.target.value)}
            required
          />
        </label>
        <button type="submit">Assign Bus</button>
      </form>
    </div>
  );
};

export default AssignBuses;
