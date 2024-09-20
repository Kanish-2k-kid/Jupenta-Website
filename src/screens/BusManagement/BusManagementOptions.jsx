// eslint-disable-next-line no-unused-vars
import { useNavigate, useLocation } from 'react-router-dom'; // Use this import once
import './BusManagementOptions.scss';
import { Link } from 'react-router-dom'; // No need to import `useLocation` again

const BusManagementOptions = () => {
  const location = useLocation();
  const { school } = location.state; // The selected school

  return (
    <div className="bus-management-options">
      <h1>Bus Management - {school.name}</h1>
      <div className="options-list">
        <Link to={`/bus-management/${school.id}/add-remove`} className="option-card">
          <h2>Add/Remove Buses</h2>
          <p>Manage the buses for {school.name}.</p>
        </Link>
        <Link to={`/bus-management/${school.id}/assign-drivers`} className="option-card">
          <h2>Assign Drivers</h2>
          <p>Assign bus numbers and drivers to each bus.</p>
        </Link> 
        
        <Link to={`/bus-management/${school.id}/view-locations`} className="option-card">
  <h2>View Bus Locations (GPS)</h2>
  <p>Track the real-time location of the buses.</p>
</Link>

        <div className="option-card">
          <h2>Manage Routes & Schedules</h2>
          <p>Set and manage the routes and schedules for the buses.</p>
        </div>
      </div>
    </div>
  );
};

export default BusManagementOptions;
