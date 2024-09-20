import React from "react";
import { useParams } from "react-router-dom";
import "./DriverManagementOptions.scss";

const DriverManagementOptions = () => {
  const { schoolId } = useParams();

  return (
    <div className="driver-management-options">
      <h1>Driver Management for School {schoolId}</h1>
      <p className="description">
        Manage all driver-related operations for School {schoolId}. You can add, remove, update drivers, and more.
      </p>
      <ul className="options-list">
        <li>
          <a href={`/driver-management/${schoolId}/add-driver`} className="option-card">
            <i className="fas fa-plus-circle"></i> Add Driver
          </a>
        </li>
        <li>
          <a href={`/driver-management/${schoolId}/remove-driver`} className="option-card">
            <i className="fas fa-minus-circle"></i> Remove Driver
          </a>
        </li>
        <li>
          <a href={`/driver-management/${schoolId}/update-driver`} className="option-card">
            <i className="fas fa-edit"></i> Update Driver
          </a>
        </li>
        <li>
          <a href={`/driver-management/${schoolId}/assign-driver`} className="option-card">
            <i className="fas fa-route"></i> Assign Driver to Bus/Route
          </a>
        </li>
        <li>
          <a href={`/driver-management/${schoolId}/view-drivers`} className="option-card">
            <i className="fas fa-users"></i> View Drivers & Info
          </a>
        </li>
        <li>
          <a href={`/driver-management/${schoolId}/track-performance`} className="option-card">
            <i className="fas fa-chart-line"></i> Track Driver Performance
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DriverManagementOptions;
