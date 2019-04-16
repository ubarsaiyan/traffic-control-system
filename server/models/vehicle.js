const mongoose = require('mongoose');
const VEHICLE = new mongoose.Schema({
  Registration_number: {
    type: String,
    required: true,
    unique: true
  },
  Registration_date: {
    type: Date,
    required: true,
  },
  Registered_upto: {
    type: Date,
    required: true,
  },
  Manafacturing_date: {
    type: Date,
    required: true,
  },
  Owner_name: {
    type: String,
    required: true,
  },
Chassis_number: {
    type: String,
    required: true,
    unique: true
  },
  Class: {
    type: String,
    required: true,
    enum :['MCWOG','LMV-NT','MGV','LMV','HMV','HGMV','HPMV']
  },
  Model: {
    type: String,
    required: true,
  },
  Manafacturer: {
    type: String,
    required: true,
  },
    RTO_ID: {
    type: Scehma.Types.ObjectId, ref:'RTO',
      required:true,
    unique:true
  },
}
, {
  versionKey: false
});

module.exports = mongoose.model('VEHICLE', VEHICLE);
