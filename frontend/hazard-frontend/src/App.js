import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Sensors from "./pages/Sensors";
import AddSensor from "./pages/AddSensor";
import Incidents from "./pages/Incidents";

function App() {
  return (
    <Router>
      <Sidebar />

      <div style={{ marginLeft: "240px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/add-sensor" element={<AddSensor />} />
          <Route path="/incidents" element={<Incidents />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
