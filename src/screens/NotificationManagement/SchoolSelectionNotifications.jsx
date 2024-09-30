import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SchoolSelectionNotifications.scss";

// Import your school logos
import schoolLogo1 from "../../assets/images/School logo 1.jpg";
import schoolLogo2 from "../../assets/images/School logo 2.png";
import schoolLogo3 from "../../assets/images/School logo 3.jfif";

const schools = [
  { id: 1, name: "School A", logo: schoolLogo1 },
  { id: 2, name: "School B", logo: schoolLogo2 },
  { id: 3, name: "School C", logo: schoolLogo3 },
];

const SchoolSelectionNotifications = () => {
  const [selectedSchool, setSelectedSchool] = useState("");
  const navigate = useNavigate();

  const handleSchoolSelect = (schoolId) => {
    setSelectedSchool(schoolId);
    navigate(`/notifications/single-school/${schoolId}`);
  };

  return (
    <div className="school-selection">
      <h1>Select a School for Notifications</h1>
      <div className="school-list">
        {schools.map((school) => (
          <div
            key={school.id}
            className="school-card"
            onClick={() => handleSchoolSelect(school.id)}
          >
            <img src={school.logo} alt={school.name} className="school-logo" />
            <h2>{school.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolSelectionNotifications;
