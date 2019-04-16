const mongoose = require('mongoose');

const RTO = new mongoose.Schema({
  RTOCode: {
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
}
, {
  versionKey: false
});

module.exports = mongoose.model('RTO', RTO);