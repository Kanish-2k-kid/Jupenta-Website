import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./StudentParentManagement.scss";

const busData = [
  {
    busNumber: "Bus 12",
    students: [
      { name: "John Doe", Id: "224346", class: "5th Grade", parent: "Jane Doe", contact: "+1234567890", notifications: true },
      { name: "Emma Smith", Id: "224347", class: "4th Grade", parent: "Robert Smith", contact: "+0987654321", notifications: false },
      { name: "Liam Johnson", Id: "224348", class: "5th Grade", parent: "Sara Johnson", contact: "+1234567891", notifications: true },
      { name: "Sophia Brown", Id: "224349", class: "4th Grade", parent: "Paul Brown", contact: "+0987654322", notifications: true },
    ],
  },
  {
    busNumber: "Bus 9",
    students: [
      { name: "Sarah Johnson", Id: "224350", class: "3rd Grade", parent: "Alice Johnson", contact: "+1234567892", notifications: true },
      { name: "Mike Lee", Id: "356546", class: "6th Grade", parent: "Peter Lee", contact: "+0987654322", notifications: true },
      { name: "Emily Davis", Id: "224351", class: "3rd Grade", parent: "Laura Davis", contact: "+1234567893", notifications: false },
      { name: "Noah Wilson", Id: "224352", class: "5th Grade", parent: "Tom Wilson", contact: "+0987654323", notifications: true },
    ],
  },
  {
    busNumber: "Bus 8",
    students: [
      { name: "Mia Taylor", Id: "224353", class: "2nd Grade", parent: "Sophie Taylor", contact: "+1234567894", notifications: false },
      { name: "James Anderson", Id: "224354", class: "4th Grade", parent: "Jessica Anderson", contact: "+0987654324", notifications: true },
      { name: "Ella Thomas", Id: "224355", class: "5th Grade", parent: "Ronald Thomas", contact: "+1234567895", notifications: true },
      { name: "Lucas Jackson", Id: "224356", class: "3rd Grade", parent: "Olivia Jackson", contact: "+0987654325", notifications: false },
    ],
  },
  {
    busNumber: "Bus 5",
    students: [
      { name: "Charlotte Martinez", Id: "224357", class: "1st Grade", parent: "Angela Martinez", contact: "+1234567896", notifications: true },
      { name: "Elijah Hernandez", Id: "224358", class: "2nd Grade", parent: "Natalie Hernandez", contact: "+0987654326", notifications: false },
      { name: "Ava Lee", Id: "224359", class: "4th Grade", parent: "David Lee", contact: "+1234567897", notifications: true },
      { name: "William Wilson", Id: "224360", class: "5th Grade", parent: "Emma Wilson", contact: "+0987654327", notifications: false },
    ],
  },
];

const StudentParentManagement = () => {
  const { busNumber } = useParams();
  const [buses, setBuses] = useState(busData);
  const [newStudent, setNewStudent] = useState({
    name: "",
    Id: "",
    class: "",
    parent: "",
    contact: "",
    notifications: false,
  });

  const handleAddStudent = (e) => {
    e.preventDefault();
    const updatedBuses = buses.map((bus) => {
      if (bus.busNumber === busNumber) {
        return {
          ...bus,
          students: [...bus.students, newStudent],
        };
      }
      return bus;
    });
    setBuses(updatedBuses);
    setNewStudent({ name: "", Id: "", class: "", parent: "", contact: "", notifications: false });
  };

  const currentBus = buses.find(bus => bus.busNumber === busNumber);

  return (
    <div className="student-parent-management">
      <h1>Student/Parent Management - {busNumber}</h1>

      {/* Add Student to Bus */}
      <div className="add-student-section">
        <h3>Add Student to {busNumber}</h3>
        <form onSubmit={handleAddStudent}>
          <input
            type="text"
            placeholder="Student Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Student Id"
            value={newStudent.Id}
            onChange={(e) => setNewStudent({ ...newStudent, Id: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Class"
            value={newStudent.class}
            onChange={(e) => setNewStudent({ ...newStudent, class: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Parent Name"
            value={newStudent.parent}
            onChange={(e) => setNewStudent({ ...newStudent, parent: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Parent Contact"
            value={newStudent.contact}
            onChange={(e) => setNewStudent({ ...newStudent, contact: e.target.value })}
            required
          />
          <label>
            Notifications:
            <input
              type="checkbox"
              checked={newStudent.notifications}
              onChange={(e) => setNewStudent({ ...newStudent, notifications: e.target.checked })}
            />
          </label>
          <button type="submit">Add Student</button>
        </form>
      </div>

      {/* Display Buses and Students */}
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Id</th>
            <th>Class</th>
            <th>Parent Name</th>
            <th>Parent Contact</th>
            <th>Notifications</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentBus?.students.map((student, studentIndex) => (
            <tr key={studentIndex}>
              <td>{student.name}</td>
              <td>{student.Id}</td>
              <td>{student.class}</td>
              <td>{student.parent}</td>
              <td>{student.contact}</td>
              <td>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={student.notifications}
                    onChange={() => {
                      const updatedBuses = [...buses];
                      updatedBuses.find(bus => bus.busNumber === busNumber).students[studentIndex].notifications = !student.notifications;
                      setBuses(updatedBuses);
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
              <td>
                <button className="edit-button">Edit Student</button>
                <button className="edit-button">Edit Parent</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentParentManagement;
