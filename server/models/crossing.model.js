const mongoose = require('mongoose');

const CrossingSchema = new mongoose.Schema({
  crossingId: {
    type: String,
    required: true,
    unique: true
  },
  crossingName: {
    type: String,
    required: true,
  },
  typeOfCrossing: {
    type: Number,
    min: 2,
    max: 6,
    required: true,
  },
  connectingStreetId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Street',
    required: true,
  }],
  officerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'policeOfficer',
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Crossing', CrossingSchema);
