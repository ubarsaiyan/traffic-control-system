const mongoose = require('mongoose');

const ChallanSchema = new mongoose.Schema ({
  challanId:{
    type: String,
    required: true,
    unique: true
  },
  officerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PoliceOfficer'
  },
  licenceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Licence'
  },
  fineAmount: {
    type: Number,
    required: true,
    unique: true
  },
  registrationNumber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vehicle'
  },
  offences: [{
    type: String
  }]
}, {
  versionKey: false
});

module.exports = mongoose.model('Challan', ChallanSchema);
