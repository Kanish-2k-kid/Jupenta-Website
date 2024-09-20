import React, { useState } from "react";
import "./SchoolManagement.scss";
import logoBlue from "../../assets/images/logo_blue.svg"; // Import the new logo

// Sample initial data for schools
const initialSchools = [
  {
    id: 1,
    name: "Sri Ramakrishna Mission",
    location: "Coimbatore",
    buses: 4,
    students: 184,
    totamount: 1196,
    revgen: 5980,
    profit: 2368,
    badge: "Non Attendance",
    logo: "logo1.png",
  },
  {
    id: 2,
    name: "Adharsh Vishyalaya",
    location: "Chennai",
    buses: 51,
    students: 1876,
    totamount: 25499,
    revgen: 127245,
    profit: 62340,
    badge: "Attendance",
    logo: "logo2.png",
  },
  // Additional sample schools...
];

const SchoolManagement = () => {
  const [schools, setSchools] = useState(initialSchools);
  const [newSchool, setNewSchool] = useState({
    id: "", // School ID to be entered manually
    name: "",
    location: "",
    buses: "",
    students: "",
    totamount: "",
    revgen: "",
    profit: "",
    badge: "",
    logo: "",
  });
  const [editingSchool, setEditingSchool] = useState(null);
  const [showTable, setShowTable] = useState(true);

  // Add or save a school
  const addSchool = () => {
    if (editingSchool) {
      saveSchool();
    } else {
      setSchools([...schools, newSchool]);
      setNewSchool({
        id: "",
        name: "",
        location: "",
        buses: "",
        students: "",
        totamount: "",
        revgen: "",
        profit: "",
        badge: "",
        logo: "",
      });
    }
  };

  // Edit a school
  const editSchool = (school) => {
    setEditingSchool(school);
    setNewSchool(school);
    setShowTable(false);
  };

  // Save changes to an existing school
  const saveSchool = () => {
    setSchools(schools.map((s) => (s.id === editingSchool.id ? newSchool : s)));
    setEditingSchool(null);
    setNewSchool({
      id: "",
      name: "",
      location: "",
      buses: "",
      students: "",
      totamount: "",
      revgen: "",
      profit: "",
      badge: "",
      logo: "",
    });
    setShowTable(true);
  };

  // Remove a school
  const removeSchool = (schoolId) => {
    setSchools(schools.filter((s) => s.id !== schoolId));
  };

  // Toggle between table and form views
  const toggleView = (viewTable) => {
    setShowTable(viewTable);
    if (!viewTable) {
      setEditingSchool(null); // Reset edit state when switching to add new
      setNewSchool({
        id: "",
        name: "",
        location: "",
        buses: "",
        students: "",
        totamount: "",
        revgen: "",
        profit: "",
        badge: "",
        logo: "",
      });
    }
  };

  return (
    <div className="school-management">
      {/* Top Navigation Bar */}
      <header className="navbar">
        <h2>School Management</h2>
        <nav>
          <button onClick={() => toggleView(true)}>View Schools</button>
          <button onClick={() => toggleView(false)}>{editingSchool ? "Edit School" : "Add School"}</button>
        </nav>
      </header>

      {showTable ? (
        // Table View
        <div className="area-table">
          <h3>Schools Overview</h3>
          <table>
            <thead>
              <tr>
                <th>School ID</th>
                <th>Logo</th>
                <th>School Name</th>
                <th>Location</th>
                <th>Buses</th>
                <th>Students</th>
                <th>Total Amount</th>
                <th>Revenue Generated</th>
                <th>Profit</th>
                <th>Badge</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schools.map((school) => (
                <tr key={school.id}>
                  <td>{school.id}</td>
                  <td><img src={logoBlue} alt="School Logo" className="school-logo" /></td>
                  <td>{school.name}</td>
                  <td>{school.location}</td>
                  <td>{school.buses}</td>
                  <td>{school.students}</td>
                  <td>${school.totamount}</td>
                  <td>${school.revgen}</td>
                  <td>${school.profit}</td>
                  <td>{school.badge}</td>
                  <td>
                    <button onClick={() => editSchool(school)}>Edit</button><br></br>
                    <button onClick={() => removeSchool(school.id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        // Add/Edit School Form
        <div className="school-management-section">
          <h3>{editingSchool ? "Edit School" : "Add a New School"}</h3>
          <input
            type="text"
            placeholder="School ID"
            value={newSchool.id}
            onChange={(e) => setNewSchool({ ...newSchool, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="School Name"
            value={newSchool.name}
            onChange={(e) => setNewSchool({ ...newSchool, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location"
            value={newSchool.location}
            onChange={(e) => setNewSchool({ ...newSchool, location: e.target.value })}
          />
          <input
            type="number"
            placeholder="Number of Buses"
            value={newSchool.buses}
            onChange={(e) => setNewSchool({ ...newSchool, buses: e.target.value })}
          />
          <input
            type="number"
            placeholder="Number of Students"
            value={newSchool.students}
            onChange={(e) => setNewSchool({ ...newSchool, students: e.target.value })}
          />
          <input
            type="number"
            placeholder="Total Amount"
            value={newSchool.totamount}
            onChange={(e) => setNewSchool({ ...newSchool, totamount: e.target.value })}
          />
          <input
            type="number"
            placeholder="Revenue Generated"
            value={newSchool.revgen}
            onChange={(e) => setNewSchool({ ...newSchool, revgen: e.target.value })}
          />
          <input
            type="number"
            placeholder="Profit"
            value={newSchool.profit}
            onChange={(e) => setNewSchool({ ...newSchool, profit: e.target.value })}
          />
          <input
            type="text"
            placeholder="Badge"
            value={newSchool.badge}
            onChange={(e) => setNewSchool({ ...newSchool, badge: e.target.value })}
          />
          <input
            type="text"
            placeholder="Logo (URL)"
            value={newSchool.logo}
            onChange={(e) => setNewSchool({ ...newSchool, logo: e.target.value })}
          />
          <button onClick={addSchool}>
            {editingSchool ? "Save Changes" : "Add School"}
          </button>
        </div>
      )}
    </div>
  );
};

export default SchoolManagement;
