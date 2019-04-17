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

async function insert(challan) {
  challan = await Joi.validate(challan, ChallanSchema, { abortEarly: false });
  return await new Challan(challan).save();
}
