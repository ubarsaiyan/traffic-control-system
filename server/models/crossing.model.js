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
    unique: true,
  },
  typesOfCrossing: {
    type: Number,
    min: 2,
    max: 6,
    required: true,
  },
  connectingStreetId: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Street',
    required: true,
    unique: true
  }],
  officerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'policeOfficer',
    unique: true
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Crossing', CrossingSchema);
