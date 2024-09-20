import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditStudent.scss";

const EditStudent = () => {
  const { studentName } = useParams();
  const [student, setStudent] = useState({
    name: studentName,
    class: "",
    parent: "",
    contact: "",
    notifications: true,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit student details update
    alert("Student details updated!");
    navigate("/student-parent-management");
  };

  return (
    <div className="edit-student">
      <h1>Edit Student - {student.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={student.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            name="class"
            value={student.class}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Parent Name:
          <input
            type="text"
            name="parent"
            value={student.parent}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={student.contact}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Notifications:
          <input
            type="checkbox"
            name="notifications"
            checked={student.notifications}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditStudent;
