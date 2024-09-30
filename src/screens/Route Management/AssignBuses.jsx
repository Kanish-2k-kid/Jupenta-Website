import React, { useState, useEffect } from 'react';
import './AssignBuses.scss';

const AssignBuses = () => {
  const [busIds, setBusIds] = useState(['']); // Initialize with one empty input
  const [routeIds, setRouteIds] = useState(['']); // Initialize with one empty input
  const [stoppingPoints, setStoppingPoints] = useState([{ name: '', latitude: '', longitude: '' }]); // Initialize with one stopping point
  const [existingAssignments, setExistingAssignments] = useState([]); // For existing bus assignments
  const [selectedAssignment, setSelectedAssignment] = useState(null); // For the selected assignment
  const [showModal, setShowModal] = useState(false); // For modal display

  useEffect(() => {
    // Set default existing assignments
    const defaultAssignments = [
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
    setExistingAssignments(defaultAssignments); // Set the existing assignments
  }, []); // Empty dependency array to run only once on mount

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle bus assignment creation
    const newAssignment = { busIds, routeIds, stoppingPoints };
    setExistingAssignments([...existingAssignments, newAssignment]); // Add to the existing assignments
    console.log('Bus assigned:', newAssignment);
    resetForm(); // Reset form fields
  };

  const resetForm = () => {
    setBusIds(['']);
    setRouteIds(['']);
    setStoppingPoints([{ name: '', latitude: '', longitude: '' }]);
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

  const handleShowModal = (assignment) => {
    setSelectedAssignment(assignment);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAssignment(null);
  };

  return (
    <div className="assign-buses-page">
      <h1>Assign Buses to Routes</h1>
      <form onSubmit={handleSubmit} className="assign-bus-form">
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
        <button type="submit" className="submit-button">Assign Bus</button>
      </form>

      <h2><center> Existing Bus Assignments</center></h2>
      <table className="existing-assignments-table">
        <thead>
          <tr>
            <th>Bus IDs</th>
            <th>Route IDs</th>
            <th>Stopping Points</th>
          </tr>
        </thead>
        <tbody>
          {existingAssignments.map((assignment, index) => (
            <tr key={index} onClick={() => handleShowModal(assignment)} className="existing-assignment">
              <td>{assignment.busIds.join(', ')}</td>
              <td>{assignment.routeIds.join(', ')}</td>
              <td>
                {assignment.stoppingPoints.map(point => point.name).join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedAssignment && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Assignment Details</h2>
            <h4>Bus IDs: {selectedAssignment.busIds.join(', ')}</h4>
            <h4>Route IDs: {selectedAssignment.routeIds.join(', ')}</h4>
            <h3>Stopping Points:</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                </tr>
              </thead>
              <tbody>
                {selectedAssignment.stoppingPoints.map((point, index) => (
                  <tr key={index}>
                    <td>{point.name}</td>
                    <td>{point.latitude}</td>
                    <td>{point.longitude}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignBuses;
