import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { BsThermometerHalf } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdReportProblem } from "react-icons/md";

export default function Sidebar() {
  const location = useLocation();

  // Menu Button Component
  const menuItem = (path, icon, label) => {
    const active = location.pathname === path;

    return (
      <Link
        to={path}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "14px 20px",
            marginBottom: "6px",
            background: active ? "#334155" : "transparent",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#334155")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = active ? "#334155" : "transparent")
          }
        >
          {icon}
          <span style={{ fontSize: "15px", fontWeight: "500" }}>{label}</span>
        </div>
      </Link>
    );
  };

  return (
    <div
      className="sidebar"
      style={{
        width: "240px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "25px 20px",
        position: "fixed",
        left: 0,
        top: 0,
        boxShadow: "2px 0 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "40px", fontSize: "22px" }}>
        ⚠️ Hazard System
      </h2>

      {menuItem("/", <AiOutlineDashboard size={22} />, "Dashboard")}
      {menuItem("/sensors", <BsThermometerHalf size={22} />, "Sensors")}
      {menuItem("/add-sensor", <AiOutlinePlusCircle size={22} />, "Add Sensor")}
      {menuItem("/incidents", <MdReportProblem size={22} />, "Incidents")}
    </div>
  );
}
