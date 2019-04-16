  const mongoose = require('mongoose');

const CHALLAN = new mongoose.Schema ({
LICENSE_ID:{
 type: String,
    required: true,
    unique: true
},
   OFFICER_ID: {
    type: String,
    required: true,
},
FINE_AMOUNT: {
    type: Number,
    required: true,
  unique: true
  },
REGISTRATION_NUMBER:{
type: String,
required: true,
unique: true
},
REGISTRATION_NUMBER: {
    type: Schema.Types.ObjectId,
    ref: 'VEHICLE'
}
}
{
versionKey: false
}
);



module.exports = mongoose.model('CHALLAN', CHALLAN);


