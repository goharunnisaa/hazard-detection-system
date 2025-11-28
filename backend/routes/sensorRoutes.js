const express = require("express");
const router = express.Router();
const Sensor = require("../models/Sensor");
const Incident = require("../models/Incident");

// ADD SENSOR + AUTO HAZARD DETECTION
router.post("/", async (req, res) => {
  try {
    let { name, type, value, unit } = req.body;

    // Convert to number
    value = Number(value);

    // Save sensor
    const newSensor = await Sensor.create({
      name,
      type,
      value,
      unit
    });

    // Hazard Level Logic
    let hazardLevel = "Low";
    if (value >= 80) hazardLevel = "High";
    else if (value >= 60) hazardLevel = "Medium";

    // Create incident only for Medium & High
    if (hazardLevel !== "Low") {
      await Incident.create({
        sensorName: name,
        hazardLevel,
        description: `${type} sensor reading is ${value}${unit} → ${hazardLevel} Risk`
      });
    }

    res.status(201).json(newSensor);

  } catch (err) {
    console.error("Sensor POST error:", err);
    res.status(400).json({ message: err.message });
  }
});

// GET all sensors
router.get("/", async (req, res) => {
  try {
    const sensors = await Sensor.find();
    res.json(sensors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE SENSOR
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Sensor.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Sensor not found" });

    res.json({ message: "Sensor deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
