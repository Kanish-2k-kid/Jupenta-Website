import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import the images directly using import statements
import schoolLogo1 from '../../assets/images/School logo 1.jpg';
import schoolLogo2 from '../../assets/images/School logo 2.png';
import schoolLogo3 from '../../assets/images/School logo 3.jfif';

// Array of schools with imported logos
const schools = [
  { id: 1, name: 'School 1', logo: schoolLogo1 },
  { id: 2, name: 'School 2', logo: schoolLogo2 },
  { id: 3, name: 'School 3', logo: schoolLogo3 },
];

const SchoolSelectionRoute = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const navigate = useNavigate();

  const handleSchoolSelect = (schoolId) => {
    setSelectedSchool(schoolId);
    // Redirect to route management options for the selected school
    navigate(`/route-management/${schoolId}`);
  };

  return (
    <div style={styles.schoolSelection}>
      <h1 style={styles.heading}>Select a School</h1>
      <div style={styles.schoolList}>
        {schools.map((school) => (
          <div
            key={school.id}
            style={styles.schoolCard}
            onClick={() => handleSchoolSelect(school.id)}
          >
            <img src={school.logo} alt={school.name} style={styles.schoolLogo} />
            <h2 style={styles.schoolName}>{school.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  schoolSelection: {
    textAlign: 'center',
    padding: '40px',
    minHeight: '100vh', // Ensure full-height cover
// Dark background for contrast
  },
  heading: {
    marginBottom: '30px',
    fontSize: '28px',
    color: '#f5f5f5', // Smoke white color
    fontWeight: 600, // Bolder heading for emphasis
  },
  schoolList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', // Allows cards to wrap on smaller screens
    marginTop: '20px',
  },
  schoolCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '200px', // Fixed width for uniformity
    backgroundColor: 'white', // Clean white card background
    border: '1px solid #e0e0e0', // Subtle border
    borderRadius: '15px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover animation
  },
  schoolLogo: {
    width: '160px',
    height: '120px',
    objectFit: 'contain',
    marginBottom: '15px',
  },
  schoolName: {
    marginTop: '10px',
    fontSize: '20px',
    color: '#333', // Softer text color for school name
    fontWeight: 500, // Medium font weight for readability
  },
};

export default SchoolSelectionRoute;
