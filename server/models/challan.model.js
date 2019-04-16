const mongoose = require('mongoose');

const challan = new mongoose.Schema ({
ChallanId:{
 type: String,
    required: true,
    unique: true
},
   officeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'policeOfficer'
},
licenceId: {
	type: mongoose.Schema.Types.ObjectId,
    ref: 'licence'
},

fineAmount: {
    type: Number,
    required: true,
  unique: true
  },

registrationNumber: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'vehicle'
},

offences: [{type: String}]


},

{
versionKey: false
}
);



module.exports = mongoose.model('challan', challan);


