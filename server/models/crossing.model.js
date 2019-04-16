const mongoose = require('mongoose');

const crossing=new mongoose.Schema({
  crossingId:{
    type:String,
    required:true,
    unique:true
  },
  crossingName:{
    type:String,
    required:true,
    unique:true,
  },
  typesOfCrossing:{
    type:Number,
    min:2,
    max:6,
    required:true,
  },

  connectingStreetId:{
    type: mongoose.Schema.Types.ObjectId,

    ref:'street',
    required:true,
    unique:true
  },

  officerId:{
    type:String,
    required:true,
    unique:true
  }
},
{
  versionKey: false
});
module.exports = mongoose.model('crossing',crossing);