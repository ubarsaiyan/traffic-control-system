const mongoose = require('mongoose');

const TrafficSignalSchema = new mongoose.Schema({
  trafficLightId: {
    type: String,
    required: true,
    unique: true
  },
  crossingId: {
    type: String,
    required: true,
    unique:true
  },
}, {
  versionKey: false
});

module.exports = mongoose.model('TrafficSignal', TrafficSignalSchema);