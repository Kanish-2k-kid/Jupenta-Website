import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './DriverSchoolSelection.scss'; // Ensure you have appropriate styles in this file

// Importing images
import schoolLogo1 from '../../assets/images/School logo 1.jpg';
import schoolLogo2 from '../../assets/images/School logo 2.png';
import schoolLogo3 from '../../assets/images/School logo 3.jfif';

const DriverSchoolSelection = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const navigate = useNavigate();

  const handleSchoolSelect = (schoolId) => {
    setSelectedSchool(schoolId);
    navigate(`/driver-management/${schoolId}`);
  };

  return (
    <div className="school-selection">
      <h1>Select a School for Driver Management</h1>
      <div className="school-list">
        <div onClick={() => handleSchoolSelect(1)} className="school-card">
          <img src={schoolLogo1} alt="School 1" className="school-logo" />
          <h2>School 1</h2>
        </div>
        <div onClick={() => handleSchoolSelect(2)} className="school-card">
          <img src={schoolLogo2} alt="School 2" className="school-logo" />
          <h2>School 2</h2>
        </div>
        <div onClick={() => handleSchoolSelect(3)} className="school-card">
          <img src={schoolLogo3} alt="School 3" className="school-logo" />
          <h2>School 3</h2>
        </div>
      </div>
    </div>
  );
};

export default DriverSchoolSelection;
