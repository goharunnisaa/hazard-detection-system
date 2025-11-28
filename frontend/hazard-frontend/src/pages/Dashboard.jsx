import { useEffect, useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdDangerous } from "react-icons/md";
import API from "../services/api";
import "../styles/styles.css";

export default function Dashboard() {
  const [sensorCount, setSensorCount] = useState(0);
  const [incidentCount, setIncidentCount] = useState(0);
  const [activeIncidents, setActiveIncidents] = useState(0);

  const loadData = async () => {
    try {
      const sensors = await API.get("/sensors");
      const incidents = await API.get("/incidents");

      setSensorCount(sensors.data.length);
      setIncidentCount(incidents.data.length);
      setActiveIncidents(incidents.data.filter(i => !i.resolved).length);
    } catch (err) {
      console.error("Dashboard load error:", err);
    }
  };

  useEffect(() => {
    loadData();
    // optional: refresh every 10s
    // const id = setInterval(loadData, 10000);
    // return () => clearInterval(id);
  }, []);

  return (
    <div style={{ marginLeft: "260px", padding: "30px" }}>
      <h1>Dashboard</h1>

      <div className="dashboard-row">
        <div className="dash-card">
          <BsSpeedometer2 size={40} color="#2563eb" />
          <div>
            <div className="dash-value">{sensorCount}</div>
            <div className="dash-label">Total Sensors</div>
          </div>
        </div>

        <div className="dash-card">
          <AiFillAlert size={40} color="#dc2626" />
          <div>
            <div className="dash-value">{incidentCount}</div>
            <div className="dash-label">Total Incidents</div>
          </div>
        </div>

        <div className="dash-card">
          <MdDangerous size={40} color="#d97706" />
          <div>
            <div className="dash-value">{activeIncidents}</div>
            <div className="dash-label">Active Alerts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
