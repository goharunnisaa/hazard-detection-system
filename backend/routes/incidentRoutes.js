const express = require("express");
const router = express.Router();
const Incident = require("../models/Incident");

// GET all incidents
router.get("/", async (req, res) => {
  try {
    const incidents = await Incident.find().sort({ timestamp: -1 });
    res.json(incidents);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// RESOLVE INCIDENT
router.put("/:id", async (req, res) => {
  try {
    const incident = await Incident.findById(req.params.id);
    if (!incident) {
      return res.status(404).json({ message: "Incident not found" });
    }

    incident.resolved = true;
    await incident.save();

    res.json({ message: "Incident resolved", incident });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
