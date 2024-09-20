import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditParent.scss";

const EditParent = () => {
  const { parentName } = useParams();
  const [parent, setParent] = useState({
    name: parentName,
    contact: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParent((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit parent details update
    alert("Parent details updated!");
    navigate("/student-parent-management");
  };

  return (
    <div className="edit-parent">
      <h1>Edit Parent - {parent.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={parent.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={parent.contact}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="submit-button">Save Changes</button>
      </form>
    </div>
  );
};

export default EditParent;
