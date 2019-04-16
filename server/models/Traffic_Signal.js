const mongoose = require('mongoose');

const TRAFFIC_SIGNAL = new mongoose.Schema({
  Traffic_light_ID: {
    type: String,
    required: true,
    unique: true
  },
  Crossing_ID: {
    type: String,
    required: true,
    unique:true
  },
  {
  versionKey: false
});


module.exports = mongoose.model('TRAFFIC_SIGNAL', TRAFFIC_SIGNAL);