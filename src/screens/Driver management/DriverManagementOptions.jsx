import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./DriverManagementOptions.scss";

const DriverManagementOptions = () => {
  const { schoolId } = useParams();
  const navigate = useNavigate(); // Hook for programmatic navigation

  return (
    <div className="driver-management-options">
      <h1>Driver Management for School {schoolId}</h1>
      <p className="description">
        Manage all driver-related operations for School {schoolId}. You can add, remove, update drivers, and more.
      </p>
      <div className="options-list">
        <div className="option-card" onClick={() => navigate(`/driver-management/${schoolId}/remove-driver`)}>
          <i className="fas fa-minus-circle"></i>
          <h2>Remove Driver</h2>
        </div>
        <div className="option-card" onClick={() => navigate(`/driver-management/${schoolId}/update-driver`)}>
          <i className="fas fa-edit"></i>
          <h2>Update Driver</h2>
        </div>
        <div className="option-card" onClick={() => navigate(`/driver-management/${schoolId}/view-drivers`)}>
          <i className="fas fa-users"></i>
          <h2>View Drivers & Info</h2>
        </div>
        <div className="option-card" onClick={() => navigate(`/driver-management/${schoolId}/track-performance`)}>
          <i className="fas fa-chart-line"></i>
          <h2>Track Driver Performance</h2>
        </div>
      </div>
    </div>
  );
};

export default DriverManagementOptions;
