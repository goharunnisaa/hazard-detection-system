const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const sensorRoutes = require("./routes/sensorRoutes");
const incidentRoutes = require("./routes/incidentRoutes");

app.use("/api/sensors", sensorRoutes);
app.use("/api/incidents", incidentRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Hazard Detection API Running");
});

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("DB error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
