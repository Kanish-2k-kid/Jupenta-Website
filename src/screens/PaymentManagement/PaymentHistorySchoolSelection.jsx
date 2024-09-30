import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentHistorySchoolSelection.scss'; // Import custom styles

// Import your school logos
import schoolLogo1 from '../../assets/images/School logo 1.jpg';
import schoolLogo2 from '../../assets/images/School logo 2.png';
import schoolLogo3 from '../../assets/images/School logo 3.jfif';

const PaymentHistorySchoolSelection = () => {
  const navigate = useNavigate();

  // List of schools to select from
  const schools = [
    { id: 1, name: 'Greenwood High', logo: schoolLogo1 },
    { id: 2, name: 'Bluebell School', logo: schoolLogo2 },
    { id: 3, name: 'Sunrise Academy', logo: schoolLogo3 },
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
            <img src={school.logo} alt={school.name} className="school-logo" />
            <h3>{school.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentHistorySchoolSelection;
