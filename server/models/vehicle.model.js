const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
  registrationDate: {
    type: Date,
    required: true,
    Default: Date.now
  },
  registeredUpto: {
    type: Date,
    required: true,  
  },
  manufacturingDate: {
    type: Date,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  chassisNumber: {
    type: String,
    required: true,
    unique: true
  },
  class: {
    type: String,
    required: true,
    enum :['MCWOG','LMV-NT','MGV','LMV','HMV','HGMV','HPMV']
  },
  model: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  RTOId: {
    type: mongoose.Schema.Types.ObjectId, ref:'RTO',
    required:true,
  },
}, {
  versionKey: false
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
