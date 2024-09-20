import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SchoolSelection.scss';

const schools = [
  { id: 1, name: 'School A', logo: '/images/schoolA.png' },
  { id: 2, name: 'School B', logo: '/images/schoolB.png' },
  { id: 3, name: 'School C', logo: '/images/schoolC.png' },
];

const SchoolSelection = () => {
  const navigate = useNavigate();

  const handleSchoolSelect = (school) => {
    // Navigate to the BusManagementOptions page with the school data passed in state
    navigate(`/bus-management/${school.id}`, { state: { school } });
  };

  return (
    <div className="school-selection">
      <h1>Select Your School</h1>
      <div className="school-list">
        {schools.map((school) => (
          <div
            key={school.id}
            className="school-card"
            onClick={() => handleSchoolSelect(school)}
          >
            <img src={school.logo} alt={school.name} className="school-logo" />
            <h2>{school.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolSelection;
