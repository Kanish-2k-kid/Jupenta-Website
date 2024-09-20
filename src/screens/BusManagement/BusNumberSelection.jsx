import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const BusNumberSelection = () => {
  const location = useLocation();
  const { school } = location.state;
  const navigate = useNavigate();

  const buses = [
    { id: 1, number: 'Bus 101' },
    { id: 2, number: 'Bus 102' },
    // Add more buses as needed
  ];

  return (
    <div>
      <h1>Select Bus for {school.name}</h1>
      <ul>
        {buses.map((bus) => (
          <li key={bus.id} onClick={() => navigate(`/bus-management/map/${bus.id}`)}>
            {bus.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusNumberSelection;
