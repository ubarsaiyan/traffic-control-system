const POLICE_STATION= new mongoose.Schema({
  POLICE_STATION_ID:{
    type:String,
    required:true,
    unique:true
  },
  ADDRESS:{
    type:String,
    required:true,
    unique:true
  },
  POLICE_STATION_NAME:{
    type: String,
    minlength:5,
    maxlength:100,
    required:true,
    unique:true
  }
{
  versionKey: false
});


module.exports = mongoose.model('POLICE_STATION',POLICE_STATION);