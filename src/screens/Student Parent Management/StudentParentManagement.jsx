import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./StudentParentManagement.scss";

const busData = [
  {
    busNumber: "Bus 12",
    students: [
      { name: "John Doe", class: "5th Grade", parent: "Jane Doe", contact: "+1234567890", notifications: true },
      { name: "Emma Smith", class: "4th Grade", parent: "Robert Smith", contact: "+0987654321", notifications: false },
      // Add more students...
    ],
  },
  {
    busNumber: "Bus 9",
    students: [
      { name: "Sarah Johnson", class: "3rd Grade", parent: "Alice Johnson", contact: "+1234567892", notifications: true },
      { name: "Mike Lee", class: "6th Grade", parent: "Peter Lee", contact: "+0987654322", notifications: true },
      // Add more students...
    ],
  },
  // Add more buses with students
];

const StudentParentManagement = () => {
  const { schoolId } = useParams();
  const [buses, setBuses] = useState(busData);
  const navigate = useNavigate();

  const toggleNotification = (busIndex, studentIndex) => {
    const updatedBuses = [...buses];
    updatedBuses[busIndex].students[studentIndex].notifications = !updatedBuses[busIndex].students[studentIndex].notifications;
    setBuses(updatedBuses);
  };

  const handleEditStudent = (studentName) => {
    navigate(`/student-parent-management/edit-student/${studentName}`);
  };

  const handleEditParent = (parentName) => {
    navigate(`/student-parent-management/edit-parent/${parentName}`);
  };

  return (
    <div className="student-parent-management">
      <h1>Student/Parent Management - School {schoolId}</h1>
      {buses.map((bus, busIndex) => (
        <div key={bus.busNumber} className="bus-section">
          <h2>{bus.busNumber}</h2>
          <table className="student-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Class</th>
                <th>Parent Name</th>
                <th>Parent Contact</th>
                <th>Notifications</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {bus.students.map((student, studentIndex) => (
                <tr key={student.name}>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                  <td>{student.parent}</td>
                  <td>{student.contact}</td>
                  <td>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={student.notifications}
                        onChange={() => toggleNotification(busIndex, studentIndex)}
                      />
                      <span className="slider round"></span>
                    </label>
                  </td>
                  <td>
                    <button onClick={() => handleEditStudent(student.name)} className="edit-button">Edit Student</button>
                    <button onClick={() => handleEditParent(student.parent)} className="edit-button">Edit Parent</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default StudentParentManagement;
