import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DriverSchoolSelection.scss";

const DriverSchoolSelection = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const navigate = useNavigate();

  const handleSchoolSelect = (schoolId) => {
    setSelectedSchool(schoolId);
    // Redirect to driver management options for the selected school
    navigate(`/driver-management/${schoolId}`);
  };

  return (
    <div className="school-selection">
      <h1>Select a School for Driver Management</h1>
      <ul className="school-list">
        <li onClick={() => handleSchoolSelect(1)}>School 1</li>
        <li onClick={() => handleSchoolSelect(2)}>School 2</li>
        <li onClick={() => handleSchoolSelect(3)}>School 3</li>
      </ul>
    </div>
  );
};

export default DriverSchoolSelection;
