// eslint-disable-next-line no-unused-vars
import { useNavigate, useLocation } from 'react-router-dom'; // Use this import once
import { Link } from 'react-router-dom'; // No need to import `useLocation` again
import './BusManagementOptions.scss';

const BusManagementOptions = () => {
  const location = useLocation();
  const { school } = location.state; // The selected school

  return (
    <div style={styles.busManagementOptions}>
      <h1 style={styles.heading}>Bus Management - {school.name}</h1>
      <div style={styles.optionsList}>
        <Link to={`/bus-management/${school.id}/add-remove`} style={styles.optionCard}>
          <h2 style={styles.optionHeading}>Add/Remove Buses</h2>
          <p style={styles.optionDescription}>Manage the buses for {school.name}.</p>
        </Link>
        <Link to={`/bus-management/${school.id}/assign-drivers`} style={styles.optionCard}>
          <h2 style={styles.optionHeading}>Assign Drivers</h2>
          <p style={styles.optionDescription}>Assign bus numbers and drivers to each bus.</p>
        </Link>
        <Link to={`/bus-management/${school.id}/view-locations`} style={styles.optionCard}>
  <h2 style={styles.optionHeading}>View Bus Locations (GPS)</h2>
  <p style={styles.optionDescription}>Track the real-time location of the buses.</p>
</Link>

      </div>
    </div>
  );
};

// Inline styles for the component
const styles = {
  busManagementOptions: {
    padding: '80px 20px', // Increased top padding for more space
    textAlign: 'center',
  },
  heading: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#f5f5f5', // Smoke white color
    marginBottom: '30px',
  },
  optionsList: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap', // Allow cards to wrap on smaller screens
  },
  optionCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '200px',
    backgroundColor: 'white',
    border: '1px solid #e0e0e0',
    borderRadius: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textDecoration: 'none',
    color: 'black',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  optionHeading: {
    fontSize: '24px',
    color: 'black', // Smoke white color for subheadings
    margin: '10px 0',
  },
  optionDescription: {
    color: 'grey',
  },
};

// Export the component
export default BusManagementOptions;
