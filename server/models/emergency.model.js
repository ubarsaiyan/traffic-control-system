const mongoose = require('mongoose');

const emergency  = new mongoose.Schema({
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
    ref: 'street'
},
officerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'policeOfficer'
},
},
{
versionKey: false
}
);

module.exports = mongoose.model('emergency',emergency);