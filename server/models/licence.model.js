const mongoose = require('mongoose');

const licence = new mongoose.Schema({
  licenceId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
authorization: [{type: String, enum :['MCWOG','LMV-NT','MGV','LMV','HMV','HGMV','HPMV']}],

 dateOfBirth: {
    type: Date,
    required: true,
  },
  dateOfIssue: {
    type: Date,
    required: true,
    Default: Date.now
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
    bloodGroup: {
    type: String,
    required: true,
    enum: ['A+', 'B+','AB+','O+','A-', 'B-', 'AB-', 'O-',],
  },
},
 {
  versionKey: false
});


module.exports = mongoose.model('licence', licence);
