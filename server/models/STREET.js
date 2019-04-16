const STREET=new mongoose.Schema({
  STREET_ID:{
    type:String,
    required:true,
    unique:true
  },
  STREET_NAME:{
    type:String,
    required:true,
    unique:true
  },
  NUMBER_OF_LANES:{
    type:Number,
    min:1,
    max:8,
    required:true
  }
  TYPE_OF_ROAD:{
    type:String,
    required:true,
    enum:['Concrete Roads','Bituminous Roads','Earthen Roads','Earthen Roads','Murrum Roads','WBM Roads']
  }
}
{
  versionKey: false
});
module.exports = mongoose.model('STREET',STREET);
