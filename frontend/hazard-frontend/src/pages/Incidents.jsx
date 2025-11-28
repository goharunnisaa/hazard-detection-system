import { useEffect, useState } from "react";
import { MdWarning, MdCheckCircle, MdError } from "react-icons/md";
import API from "../services/api";
import "../styles/styles.css";

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);

  const fetchIncidents = () => {
    API.get("/incidents")
      .then((res) => setIncidents(res.data))
      .catch((err) => console.error("Fetch incidents error:", err));
  };

  useEffect(() => {
    fetchIncidents();
  }, []);

  const resolveIncident = (id) => {
    API.put(`/incidents/${id}`)
      .then(() => {
        // optimistic refresh
        setIncidents(prev => prev.map(p => p._id === id ? { ...p, resolved: true } : p));
        // ensure fresh data from server
        setTimeout(fetchIncidents, 200);
      })
      .catch((err) => console.error("Resolve incident error:", err));
  };

  const iconFor = {
    High: <MdError size={28} color="#dc2626" />,
    Medium: <MdWarning size={28} color="#f59e0b" />,
    Low: <MdCheckCircle size={28} color="#2563eb" />,
  };

  return (
    <div style={{ marginLeft: "260px", padding: "30px" }}>
      <h1>Incidents</h1>

      <div className="incident-table-card">
        <table className="incident-table">
          <thead>
            <tr>
              <th>Sensor</th>
              <th>Level</th>
              <th>Description</th>
              <th>Timestamp</th>
              <th>Status</th>
              <th style={{ textAlign: "center", width: "140px" }}>Action</th>
            </tr>
          </thead>

          <tbody>
            {incidents.length === 0 ? (
              <tr><td colSpan={6} style={{ padding: 20 }}>No incidents found</td></tr>
            ) : (
              incidents.map((i) => (
                <tr key={i._id}>
                  <td style={{ fontWeight: 600 }}>{i.sensorName}</td>

                  <td>
                    <div className="level-cell">
                      {iconFor[i.hazardLevel]}
                      <span>{i.hazardLevel}</span>
                    </div>
                  </td>

                  <td style={{ maxWidth: 420 }}>{i.description || "-"}</td>

                  <td>{new Date(i.timestamp).toLocaleString()}</td>

                  <td>
                    {i.resolved ? (
                      <span className="badge-resolved">Resolved</span>
                    ) : (
                      <span className="badge-unresolved">Unresolved</span>
                    )}
                  </td>

                  <td style={{ textAlign: "center" }}>
                    <button
                      className={i.resolved ? "btn-disabled" : "btn-primary"}
                      onClick={() => { if (!i.resolved) resolveIncident(i._id); }}
                      disabled={i.resolved}
                      style={{ width: 110 }}
                    >
                      {i.resolved ? "Done" : "Resolve"}
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
