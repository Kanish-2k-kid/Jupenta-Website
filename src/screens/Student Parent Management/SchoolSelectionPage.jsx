import React from "react";
import { useNavigate } from "react-router-dom";
import "./SchoolSelectionPage.scss";

import schoolLogo1 from "../../assets/images/School logo 1.jpg";
import schoolLogo2 from "../../assets/images/School logo 2.png";
import schoolLogo3 from "../../assets/images/School logo 3.jfif";

const schools = [
  { id: 1, name: "Green Valley School", logo: schoolLogo1 },
  { id: 2, name: "Sunrise Academy", logo: schoolLogo2 },
  { id: 3, name: "Bluebird International School", logo: schoolLogo3 },
];

const SchoolSelectionPage = () => {
  const navigate = useNavigate();

  const handleSchoolSelection = (schoolId) => {
    navigate(`/bus-selection/${schoolId}`); // Navigate to bus selection
  };

  return (
    <div className="school-selection">
      <h1>Select a School</h1>
      <div className="school-list">
        {schools.map((school) => (
          <div
            key={school.id}
            className="school-card"
            onClick={() => handleSchoolSelection(school.id)}
          >
            <img src={school.logo} alt={school.name} className="school-logo" />
            <h2>{school.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchoolSelectionPage;
