const mongoose = require('mongoose');


const policeStation= new mongoose.Schema({
  policeStationId:{
    type:String,
    required:true,
    unique:true
  },
  address:{
    type:String,
    required:true,
    unique:true
  },
  policeStationName:{
    type: String,
    minlength:5,
    maxlength:100,
    required:true,
    unique:true
  }
},
{
  versionKey: false
});


module.exports = mongoose.model('policeStation',policeStation);