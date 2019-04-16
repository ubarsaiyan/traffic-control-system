const mongoose = require('mongoose');

const LICENCE = new mongoose.Schema({
  Licence_ID: {
    type: String,
    required: true,
    unique: true
  },
  Name: {
    type: String,
    required: true
  }
Authorization :[{type: String, enum :['MCWOG','LMV-NT','MGV','LMV','HMV','HGMV','HPMV']}]

 date_of_birth: {
    type: Date,
    required: true,
  },
  date_of_issue: {
    type: Date,
    required: true,
    Default: Date.now
  },
  expiration_date: {
    type: Date,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
    Blood_group: {
    type: String,
    required: true,
    enum: ['A+', 'B+','AB+','O+','A-', 'B-', 'AB-', 'O-',],
  },
}
, {
  versionKey: false
});


module.exports = mongoose.model('LICENCE', LICENCE);
