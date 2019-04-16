const CROSSING=new mongoose.Schema({
  CROSSING_ID:{
    type:String,
    required:true
    unique:true
  },
  CROSSING_NAME:{
    type:String,
    required:true,
    unique:true,
  },
  TYPE_OF_CROSSING:{
    type:Number,
    min:2,
    max:6,
    required:true,
  }
  CONNECTING_STREET_IDs:{
    type:Schema.Types.ObjectId,

    ref:'STREET',
    required:true,
    unique:true
  }
  OFFICER_ID:{
    type:String,
    required:true,
    unique:true
  }
}
{
  versionKey: false
});
module.exports = mongoose.model('CROSSING',CROSSING);