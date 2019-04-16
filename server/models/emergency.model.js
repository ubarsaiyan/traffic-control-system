const mongoose = require('mongoose');

const EmergencySchema  = new mongoose.Schema({
  streetId: {
    type: String,
    required: true,
    unique: true
  },
  typeOfEmergency:{
	  type: String,
	  required: true
	},
  streetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Street'
  },
  officerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PoliceOfficer'
  },
}, {
versionKey: false
});

module.exports = mongoose.model('Emergency', EmergencySchema);