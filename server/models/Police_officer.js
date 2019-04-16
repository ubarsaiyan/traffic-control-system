const mongoose = require('mongoose');

const POLICE_OFFICER = new mongoose.Schema({
  Officer_ID: {
    type: String,
    required: true,
    unique: true
  },
  Age: {
    type: Number,
    min: 18,
    max: 65,	
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Rank: {
    type: Number,
    required: true
  },
  Blood_Group: {
    type: String,
    enum: ['A+', 'B+','AB+','O+','A-', 'B-', 'AB-', 'O-',],
    required:true
  },
  Station_ID: {
    type: Schema.Types.ObjectId,
    ref: 'POLICE_STATION'
}, 
  {
  versionKey: false
});


module.exports = mongoose.model('POLICE_OFFICER', POLICE_OFFICER);