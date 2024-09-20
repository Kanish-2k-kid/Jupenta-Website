// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AssignDrivers.scss';

// Mock data for bus routes (replace with actual data)
const busRoutes = [
  { id: 1, schoolId: '1', routeName: 'Route 101' },
  { id: 2, schoolId: '1', routeName: 'Route 102' },
  { id: 3, schoolId: '2', routeName: 'Route 201' },
  { id: 4, schoolId: '2', routeName: 'Route 202' }
];

// Mock data for drivers (replace with actual driver list)
const drivers = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Michael Johnson' }
];

const AssignDrivers = () => {
  const { schoolId } = useParams();
  const [filteredRoutes, setFilteredRoutes] = useState([]);
  const [assignedDrivers, setAssignedDrivers] = useState({});

  useEffect(() => {
    const filtered = busRoutes.filter(route => route.schoolId === String(schoolId));
    setFilteredRoutes(filtered);
  }, [schoolId]);

  const handleDriverAssignment = (routeId, driverId) => {
    setAssignedDrivers(prevState => ({
      ...prevState,
      [routeId]: driverId
    }));
  };

  return (
    <div className="assign-drivers">
      <h1>Assign Drivers for School: {schoolId}</h1>
      <div className="routes-list">
        {filteredRoutes.length > 0 ? (
          filteredRoutes.map(route => (
            <div key={route.id} className="route-card">
              <h2>{route.routeName}</h2>
              <p>Bus route for school ID: {schoolId}</p>

              <div className="driver-selection">
                <label htmlFor={`driver-select-${route.id}`} className="driver-label">Assign Driver:</label>
                <select
                  id={`driver-select-${route.id}`}
                  value={assignedDrivers[route.id] || ''}
                  onChange={(e) => handleDriverAssignment(route.id, e.target.value)}
                  className="driver-dropdown"
                >
                  <option value="">Select a driver</option>
                  {drivers.map(driver => (
                    <option key={driver.id} value={driver.id}>
                      {driver.name}
                    </option>
                  ))}
                </select>
              </div>

              {assignedDrivers[route.id] && (
                <p className="assigned-driver">
                  Assigned Driver: {drivers.find(driver => driver.id === Number(assignedDrivers[route.id]))?.name}
                </p>
              )}
            </div>
          ))
        ) : (
          <p>No routes available for this school.</p>
        )}
      </div>
    </div>
  );
};

export default AssignDrivers;
