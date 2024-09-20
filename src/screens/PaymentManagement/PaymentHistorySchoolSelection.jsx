import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentHistorySchoolSelection.scss'; // Import custom styles

const PaymentHistorySchoolSelection = () => {
  const navigate = useNavigate();

  // List of schools to select from
  const schools = [
    { id: 1, name: 'Greenwood High' },
    { id: 2, name: 'Bluebell School' },
    { id: 3, name: 'Sunrise Academy' },
  ];

  const handleSchoolSelect = (schoolId) => {
    navigate(`/payment/history/SS/${schoolId}`);
  };

  return (
    <div className="school-selection-container">
      <h1 className="title">Select School for Payment History</h1>
      <div className="school-list">
        {schools.map((school) => (
          <div key={school.id} className="school-card" onClick={() => handleSchoolSelect(school.id)}>
            <h3>{school.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistorySchoolSelection;
