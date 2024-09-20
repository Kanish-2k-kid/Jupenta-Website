import React from "react";
import { useNavigate } from "react-router-dom";
import "./SchoolSelectionPage.scss";

const schools = [
  { id: 1, name: "Green Valley School" },
  { id: 2, name: "Sunrise Academy" },
  { id: 3, name: "Bluebird International School" },
  { id: 4, name: "Silver Oaks Public School" },
];

const SchoolSelectionPage = () => {
  const navigate = useNavigate();

  const handleSchoolSelection = (schoolId) => {
    navigate(`/student-parent-management/${schoolId}`);
  };

  return (
    <div className="school-selection-page">
      <h1>Select a School</h1>
      <div className="school-list">
        {schools.map((school) => (
          <div
            key={school.id}
            className="school-card"
            onClick={() => handleSchoolSelection(school.id)}
          >
            {school.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolSelectionPage;
