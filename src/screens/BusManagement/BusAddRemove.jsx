import React, { useState } from 'react';
import './BusAddRemove.scss'; // Ensure you style the page here

const BusAddRemove = () => {
  // Initial state for buses
  const [buses, setBuses] = useState([
    { number: 'Bus 101', busid:'7284', driver: 'John Doe', id: '562334', aadhar: '46365476545',license: 'h6756g6f', age: '32',experience: '7 Years' , image: 'jh65bvutf', count: '56', gps: 'No', app: 'Yes' },
    { number: 'Bus 102', busid: '8562', driver: 'Jane Smith',id: '562334', aadhar: '87665675667',license: '7824ffr37b', age: '29',experience: '4 Years' , image: 'hg765g7t', count: '67', gps: 'Yes', app: 'No' },
  ]);

  // State for the new bus form
  const [newBus, setNewBus] = useState({
    number: '',
    busid: '',
    driver: '',
    id: '',
    aadhar: '',
    license: '',
    age: '',
    experience: '',
    image: '',
    count: '',
    gps: '',
    app: '',
  });

  // Handle adding a bus
  const handleAddBus = (e) => {
    e.preventDefault();
    if (newBus.number && newBus.driver && newBus.aadhar && newBus.age) {
      const newBusData = { id: buses.length + 1, ...newBus };
      setBuses([...buses, newBusData]);
      setNewBus({ number: '', busid: '', driver: '', id: '', aadhar: '', license: '', age: '', experience: '', image: '', count:'', gps: '', app: '' }); // Clear the form
    }
  };

  // Handle removing a bus
  const handleRemoveBus = (busId) => {
    setBuses(buses.filter(bus => bus.id !== busId));
  };

  return (
    <div className="bus-add-remove">
      <h1>Add/Remove Buses</h1>

      {/* Form to add a new bus */}
      <form className="add-bus-form" onSubmit={handleAddBus}>
        <input
          type="text"
          placeholder="Bus Number"
          value={newBus.number}
          onChange={(e) => setNewBus({ ...newBus, number: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Bus Id"
          value={newBus.number}
          onChange={(e) => setNewBus({ ...newBus, busid: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Driver Name"
          value={newBus.driver}
          onChange={(e) => setNewBus({ ...newBus, driver: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Driver Id"
          value={newBus.driver}
          onChange={(e) => setNewBus({ ...newBus, id: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Driver Aadhar"
          value={newBus.aadhar}
          onChange={(e) => setNewBus({ ...newBus, aadhar: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Driver License"
          value={newBus.driver}
          onChange={(e) => setNewBus({ ...newBus, license: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Driver Age"
          value={newBus.age}
          onChange={(e) => setNewBus({ ...newBus, age: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Driver Experirnce"
          value={newBus.driver}
          onChange={(e) => setNewBus({ ...newBus, experience: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Driver Image URL"
          value={newBus.image}
          onChange={(e) => setNewBus({ ...newBus, image: e.target.value })}
        />
        <input
          type="number"
          placeholder="Student Count"
          value={newBus.number}
          onChange={(e) => setNewBus({ ...newBus, count: e.target.value })}
          required
        />
        <div className="Bus Gps:">
          <label>Bus GPS:</label>
          <select
            value={newBus.gps}
            onChange={(e) => setNewBus({ ...newBus, gps: e.target.value })}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <div className="Mobile App: ">
          <label>Mobile App:</label>
          <select
            value={newBus.app}
            onChange={(e) => setNewBus({ ...newBus, app: e.target.value })}
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>
        <button type="submit">Add Bus</button>
      </form>

      <div className="table-container">
  <table className="bus-table">
    <thead>
      <tr>
        <th>Bus Number</th>
        <th>Bus Id</th>
        <th>Driver</th>
        <th>Driver Id</th>
        <th>Aadhar</th>
        <th>License</th>
        <th>Age</th>
        <th>Experience</th>
        <th>Image</th>
        <th>S_Count</th>
        <th>GPS</th>
        <th>App</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {buses.map((bus) => (
        <tr key={bus.id}>
          <td>{bus.number}</td>
          <td>{bus.busid}</td>
          <td>{bus.driver}</td>
          <td>{bus.id}</td>
          <td>{bus.aadhar}</td>
          <td>{bus.license}</td>
          <td>{bus.age}</td>
          <td>{bus.experience}</td>
          <td>
            {bus.image ? <img src={bus.image} alt={`${bus.driver}`} className="driver-image" /> : 'No Image'}
          </td>
          <td>{bus.count}</td>
          <td>{bus.gps}</td>
          <td>{bus.app}</td>
          <td>
            <button
              className="remove-btn"
              onClick={() => handleRemoveBus(bus.id)}
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default BusAddRemove;
