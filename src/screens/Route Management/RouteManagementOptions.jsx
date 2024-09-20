import React from "react";
import { useParams } from "react-router-dom";
import "./RouteManagementOptions.scss";

const RouteManagementOptions = () => {
  const { schoolId } = useParams();

  return (
    <div className="route-management-options">
      <h1>Route Management for School {schoolId}</h1>
      <ul>
        <li className="option-card">
          <a href={`/route-management/${schoolId}/create-route`}>Create Route</a>
        </li>
        <li className="option-card">
          <a href={`/route-management/${schoolId}/modify-route`}>Modify Route</a>
        </li>
        <li className="option-card">
          <a href={`/route-management/${schoolId}/assign-buses`}>Assign Buses</a>
        </li>
        <li className="option-card">
          <a href={`/route-management/${schoolId}/track-route`}>Track Route</a>
        </li>
      </ul>
    </div>
  );
};

export default RouteManagementOptions;
