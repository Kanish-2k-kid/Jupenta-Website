import React, { useState } from 'react';
import './ModifyRoute.scss';

const ModifyRoute = () => {
  const [routeId, setRouteId] = useState('');
  const [routeDetails, setRouteDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle route modification
    console.log('Route modified:', { routeId, routeDetails });
  };

  return (
    <div className="modify-route-page">
      <h1>Modify Existing Route</h1>
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
          New Route Details:
          <textarea
            value={routeDetails}
            onChange={(e) => setRouteDetails(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Modify Route</button>
      </form>
    </div>
  );
};

export default ModifyRoute;
