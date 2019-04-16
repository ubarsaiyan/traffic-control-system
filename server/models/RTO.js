const mongoose = require('mongoose');

const RTO = new mongoose.Schema({
  RTO_code: {
    type: String,
    required: true,
    unique: true
  },

  Address: {
    type: String,
    required: true,
    unique: true,

  },
Head: {
    type: String,
    required: true
  }
}
, {
  versionKey: false
});

module.exports = mongoose.model('RTO', RTO);