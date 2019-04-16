const mongoose = require('mongoose');

const StreetSchema = new mongoose.Schema({
  streetId:{
    type: String,
    required: true,
    unique: true
  },
  streetName:{
    type: String,
    required: true,
    unique: true
  },
  numberOfLanes:{
    type: Number,
    min: 1,
    max: 8,
    required: true
  },
  typeOfRoad:{
    type: String,
    required: true,
    enum: ['Concrete Roads','Bituminous Roads','Earthen Roads','Earthen Roads','Murrum Roads','WBM Roads']
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Street', StreetSchema);
