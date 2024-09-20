import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SchoolSelectionRoute.scss"; // Import the improved CSS

const SchoolSelectionRoute = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const navigate = useNavigate();

  const handleSchoolSelect = (schoolId) => {
    setSelectedSchool(schoolId);
    // Redirect to route management options for the selected school
    navigate(`/route-management/${schoolId}`);
  };

  return (
    <div className="school-selection">
      <h1>Select a School</h1>
      <ul className="school-list">
        <li onClick={() => handleSchoolSelect(1)} className="school-card">
          <img src="/path/to/school1-logo.png" alt="School 1 Logo" className="school-logo" />
          <h2>School 1</h2>
        </li>
        <li onClick={() => handleSchoolSelect(2)} className="school-card">
          <img src="/path/to/school2-logo.png" alt="School 2 Logo" className="school-logo" />
          <h2>School 2</h2>
        </li>
        <li onClick={() => handleSchoolSelect(3)} className="school-card">
          <img src="/path/to/school3-logo.png" alt="School 3 Logo" className="school-logo" />
          <h2>School 3</h2>
        </li>
        {/* Add more schools as needed */}
      </ul>
    </div>
  );
};

export default SchoolSelectionRoute;
