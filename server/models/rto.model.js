const mongoose = require('mongoose');

const RTOSchema = new mongoose.Schema({
  rtoCode: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true,
    unique: true,
  },
  head: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('RTO', RTOSchema);