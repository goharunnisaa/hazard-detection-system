import { useEffect, useState } from "react";
import { BsThermometerHalf } from "react-icons/bs";
import { FaGasPump } from "react-icons/fa";
import { GiVibratingBall } from "react-icons/gi";
import { WiHumidity } from "react-icons/wi";
import API from "../services/api";
import "../styles/styles.css";

export default function Sensors() {
  const [sensors, setSensors] = useState([]);

  const fetchSensors = () => {
    API.get("/sensors")
      .then((res) => setSensors(res.data))
      .catch((err) => console.error("Fetch sensors error:", err));
  };

  useEffect(() => {
    fetchSensors();
  }, []);

  const deleteSensor = (id) => {
    if (!window.confirm("Are you sure you want to delete this sensor?")) return;
    API.delete(`/sensors/${id}`)
      .then(() => {
        fetchSensors();
      })
      .catch((err) => console.error("Delete sensor error:", err));
  };

  const getIcon = (type) => {
    switch (type) {
      case "Temperature": return <BsThermometerHalf size={22} color="#ef4444" />;
      case "Gas": return <FaGasPump size={20} color="#f97316" />;
      case "Vibration": return <GiVibratingBall size={20} color="#7c3aed" />;
      case "Humidity": return <WiHumidity size={24} color="#0ea5e9" />;
      default: return <BsThermometerHalf size={20} />;
    }
  };

  return (
    <div style={{ marginLeft: "260px", padding: "30px" }}>
      <h1>Sensors</h1>

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ fontWeight: 500 }}>All Installed Sensors</h2>
        <a href="/add-sensor" style={{ textDecoration: "none" }}>
          <button className="btn-primary" style={{ padding: "10px 18px" }}>+ Add New Sensor</button>
        </a>
      </div>

      <div className="table-card" style={{ marginTop: "20px" }}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ width: "60px" }}>Type</th>
              <th>Name</th>
              <th>Value</th>
              <th>Unit</th>
              <th>Timestamp</th>
              <th style={{ textAlign: "center", width: "120px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {sensors.length === 0 ? (
              <tr><td colSpan={6} style={{ padding: 20 }}>No sensors found</td></tr>
            ) : (
              sensors.map((s) => (
                <tr key={s._id}>
                  <td>{getIcon(s.type)}</td>
                  <td style={{ fontWeight: 600 }}>{s.name}</td>
                  <td>{s.value}</td>
                  <td>
                    <select value={s.unit || ""} disabled className="dropdown-disabled" style={{ minWidth: 80 }}>
                      <option>{s.unit || "-"}</option>
                    </select>
                  </td>
                  <td>{new Date(s.timestamp).toLocaleString()}</td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      className="btn-danger"
                      onClick={() => deleteSensor(s._id)}
                      style={{ width: 100 }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
