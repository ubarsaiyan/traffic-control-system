const mongoose = require('mongoose');

const EMERGENCY  = new mongoose.Schema({
  STREET_ID: {
    type: String,
    required: true,
  unique: true
  },
   OFFICER_ID: {
    type: String,
    required: true,
    unique: true
},
 TYPE_OF_EMERGENCY:{
type: String,
required: true
},
STREET_ID: {
    type: Schema.Types.ObjectId,
    ref: 'STREET'
},
OFFICER_ID: {
    type: Schema.Types.ObjectId,
    ref: 'POLICE_OFFICER'
}
} 
{
versionKey: false
}
);

module.exports = mongoose.model('EMERGENCY',EMERGENCY);