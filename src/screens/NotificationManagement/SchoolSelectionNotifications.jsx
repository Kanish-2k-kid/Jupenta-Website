import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SchoolSelectionNotifications.scss"; // Assuming you have custom styles

const SchoolSelectionNotifications = () => {
  const [selectedSchool, setSelectedSchool] = useState("");
  const navigate = useNavigate();

  const handleSchoolSelect = (schoolId) => {
    setSelectedSchool(schoolId);
    navigate(`/notifications/single-school/${schoolId}`);
  };

  // Dummy data for schools
  const schools = [
    { id: 1, name: "School A" },
    { id: 2, name: "School B" },
    { id: 3, name: "School C" },
  ];

  return (
    <div className="school-selection-notifications">
      <h1>Select a School for Notifications</h1>
      <div className="school-list">
        {schools.map((school) => (
          <div
            key={school.id}
            className="school-card"
            onClick={() => handleSchoolSelect(school.id)}
          >
            <h2>{school.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolSelectionNotifications;
