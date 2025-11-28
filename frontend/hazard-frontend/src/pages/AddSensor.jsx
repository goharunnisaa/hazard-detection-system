import { useState } from "react";
import API from "../services/api";
import "../styles/styles.css";

export default function AddSensor() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    value: "",
    unit: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!form.name || !form.type || !form.value || !form.unit) {
      alert("Please fill all fields");
      return;
    }

    API.post("/sensors", form)
      .then(() => {
        alert("Sensor added successfully!");
        setForm({ name: "", type: "", value: "", unit: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ marginLeft: "260px", padding: "30px" }}>
      <h1>Add Sensor</h1>

      <form className="form-box" onSubmit={submitForm}>

        <input
          type="text"
          name="name"
          placeholder="Sensor Name"
          value={form.name}
          onChange={handleChange}
        />

        {/* Sensor Type Dropdown */}
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="form-dropdown"
        >
          <option value="">Select Sensor Type</option>
          <option value="Temperature">Temperature</option>
          <option value="Pressure">Pressure</option>
          <option value="Gas">Gas</option>
          <option value="Humidity">Humidity</option>
          <option value="Vibration">Vibration</option>
        </select>

        <input
          type="number"
          name="value"
          placeholder="Value"
          value={form.value}
          onChange={handleChange}
        />

        {/* Unit Dropdown */}
        <select
          name="unit"
          value={form.unit}
          onChange={handleChange}
          className="form-dropdown"
        >
          <option value="">Select Unit</option>
          <option value="°C">°C</option>
          <option value="PSI">PSI</option>
          <option value="PPM">PPM</option>
          <option value="%">%</option>
          <option value="mm/s">mm/s</option>
        </select>

        <button className="btn-primary">Add Sensor</button>
      </form>
    </div>
  );
}
