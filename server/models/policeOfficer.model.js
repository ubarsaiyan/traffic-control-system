const mongoose = require('mongoose');

const PoliceOfficerSchema = new mongoose.Schema({
  officerId: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    min: 18,
    max: 65,	
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rank: {
    type: Number,
    required: true
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'B+','AB+','O+','A-', 'B-', 'AB-', 'O-',],
    required:true
  },
  stationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PoliceStation'
  },
}, {
  versionKey: false
});

module.exports = mongoose.model('policeOfficer', PoliceOfficerSchema);
