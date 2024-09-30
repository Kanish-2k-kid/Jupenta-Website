import React, { useState, useEffect } from 'react';
import './ModifyRoute.scss';

const ModifyRoute = () => {
  const [existingRoutes, setExistingRoutes] = useState([]); // For existing routes
  const [selectedRoute, setSelectedRoute] = useState(null); // For the selected route
  const [showModal, setShowModal] = useState(false); // For modal display
  const [busIds, setBusIds] = useState([]);
  const [routeIds, setRouteIds] = useState([]);
  const [stoppingPoints, setStoppingPoints] = useState([]);

  useEffect(() => {
    // Set default existing routes
    const defaultRoutes = [
      {
        busIds: ['Bus1'],
        routeIds: ['RouteA1'],
        stoppingPoints: [
          { name: 'Ranganathapuram', latitude: '11.0168', longitude: '76.9558' },
          { name: 'Irugur Pirivu', latitude: '11.0178', longitude: '76.9568' },
        ],
      },
      {
        busIds: ['Bus3'],
        routeIds: ['RouteB1'],
        stoppingPoints: [
          { name: 'Sulur', latitude: '11.0188', longitude: '76.9578' },
        ],
      },
      {
        busIds: ['Bus4'],
        routeIds: ['RouteC1'],
        stoppingPoints: [
          { name: 'Ondipudur', latitude: '11.0198', longitude: '76.9588' },
          { name: 'Palani', latitude: '11.0208', longitude: '76.9598' },
        ],
      },
    ];
    setExistingRoutes(defaultRoutes); // Set the existing routes
  }, []); // Empty dependency array to run only once on mount

  const handleSelectRoute = (route) => {
    setSelectedRoute(route);
    setBusIds(route.busIds);
    setRouteIds(route.routeIds);
    setStoppingPoints(route.stoppingPoints);
    setShowModal(true);
  };

  const handleModifyRoute = (e) => {
    e.preventDefault();
    const modifiedRoute = {
      busIds,
      routeIds,
      stoppingPoints,
    };

    const updatedRoutes = existingRoutes.map(route =>
      route.busIds === selectedRoute.busIds ? modifiedRoute : route
    );

    setExistingRoutes(updatedRoutes);
    console.log('Route modified:', modifiedRoute);
    resetForm(); // Reset form fields
    setShowModal(false);
  };

  const resetForm = () => {
    setSelectedRoute(null);
    setBusIds([]);
    setRouteIds([]);
    setStoppingPoints([]);
  };

  const handleBusIdChange = (index, value) => {
    const newBusIds = [...busIds];
    newBusIds[index] = value;
    setBusIds(newBusIds);
  };

  const handleRouteIdChange = (index, value) => {
    const newRouteIds = [...routeIds];
    newRouteIds[index] = value;
    setRouteIds(newRouteIds);
  };

  const handleStoppingPointChange = (index, field, value) => {
    const newStoppingPoints = [...stoppingPoints];
    newStoppingPoints[index][field] = value;
    setStoppingPoints(newStoppingPoints);
  };

  const addBusIdInput = () => {
    setBusIds([...busIds, '']); // Add a new empty input
  };

  const addRouteIdInput = () => {
    setRouteIds([...routeIds, '']); // Add a new empty input
  };

  const addStoppingPointInput = () => {
    setStoppingPoints([...stoppingPoints, { name: '', latitude: '', longitude: '' }]); // Add a new empty stopping point
  };

  return (
    <div className="modify-route-page">
      <h1>Modify Existing Route</h1>

      <h2>Existing Routes</h2>
      <table className="existing-routes-table">
        <thead>
          <tr>
            <th>Bus Number</th>
            <th>Route ID</th>
            <th>Stopping Points</th>
          </tr>
        </thead>
        <tbody>
          {existingRoutes.map((route, index) => (
            <tr key={index} onClick={() => handleSelectRoute(route)} className="existing-route">
              <td>{route.busIds.join(', ')}</td>
              <td>{route.routeIds.join(', ')}</td>
              <td>{route.stoppingPoints.map(point => point.name).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedRoute && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Modify Route</h2>
            <form onSubmit={handleModifyRoute} className="route-form">
              <label className="form-label">
                Bus ID:
                {busIds.map((busId, index) => (
                  <input
                    key={index}
                    type="text"
                    value={busId}
                    onChange={(e) => handleBusIdChange(index, e.target.value)}
                    required
                    placeholder={`Bus ID ${index + 1}`}
                    className="form-input"
                  />
                ))}
              </label>

              <label className="form-label">
                Route ID:
                {routeIds.map((routeId, index) => (
                  <input
                    key={index}
                    type="text"
                    value={routeId}
                    onChange={(e) => handleRouteIdChange(index, e.target.value)}
                    required
                    placeholder={`Route ID ${index + 1}`}
                    className="form-input"
                  />
                ))}
              </label>

              <h4>Stopping Names with Latitude and Longitude</h4>
              {stoppingPoints.map((point, index) => (
                <div key={index} className="stopping-point-inputs">
                  <input
                    type="text"
                    value={point.name}
                    onChange={(e) => handleStoppingPointChange(index, 'name', e.target.value)}
                    placeholder="Stopping Name"
                    required
                    className="stopping-input"
                  />
                  <input
                    type="text"
                    value={point.latitude}
                    onChange={(e) => handleStoppingPointChange(index, 'latitude', e.target.value)}
                    placeholder="Latitude"
                    required
                    className="stopping-input"
                  />
                  <input
                    type="text"
                    value={point.longitude}
                    onChange={(e) => handleStoppingPointChange(index, 'longitude', e.target.value)}
                    placeholder="Longitude"
                    required
                    className="stopping-input"
                  />
                </div>
              ))}
              <button type="button" onClick={addStoppingPointInput} className="add-stopping-point-button">Add Another Stopping Point</button>

              <button type="submit" className="submit-button">Modify Route</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModifyRoute;
