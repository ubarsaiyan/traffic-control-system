const Joi = require('joi');
const Challan = require('../models/challan.model');

const ChallanSchema  = Joi.object({
  challanId: Joi.string().required(),
  officerId: Joi.string().required(),
licenceId:Joi.string().required(),
fineAmount: number().required(),
 registrationNumber: string().required(),
offences: string()
})


module.exports = {
  insert
}

async function insert(Challan) {
  Challan = await Joi.validate(Challan, ChallanSchema, { abortEarly: false });
  return await new Challan(Challan).save();
}
