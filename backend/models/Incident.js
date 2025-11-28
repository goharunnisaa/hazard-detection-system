const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  sensorName: { type: String, required: true },
  hazardLevel: { type: String, required: true },  // High / Medium / Low
  description: { type: String },
  timestamp: { type: Date, default: Date.now },
  resolved: { type: Boolean, default: false }
});

module.exports = mongoose.model("Incident", incidentSchema);
