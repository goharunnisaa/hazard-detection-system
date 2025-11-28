const mongoose = require("mongoose");

const sensorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  value: { type: Number, required: true },
  unit: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Sensor", sensorSchema);
