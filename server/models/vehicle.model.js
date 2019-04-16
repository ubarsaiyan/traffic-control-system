const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true
  },
}, {
  versionKey: false
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
