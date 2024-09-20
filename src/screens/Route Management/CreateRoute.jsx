import React, { useState } from 'react';
import './CreateRoute.scss';

const CreateRoute = () => {
  const [routeName, setRouteName] = useState('');
  const [routeDetails, setRouteDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle route creation
    console.log('Route created:', { routeName, routeDetails });
  };

  return (
    <div className="create-route-page">
      <h1>Create New Route</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Route Name:
          <input
            type="text"
            value={routeName}
            onChange={(e) => setRouteName(e.target.value)}
            required
          />
        </label>
        <label>
          Route Details:
          <textarea
            value={routeDetails}
            onChange={(e) => setRouteDetails(e.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Create Route</button>
      </form>
    </div>
  );
};

export default CreateRoute;
