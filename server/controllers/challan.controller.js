const Joi = require('joi');
const Challan = require('../models/challan.model');

const challanSchema  = Joi.object({
  challanId: Joi.string().required(),
  officerId: Joi.string().required(),
  licenceId:Joi.string().required(),
  fineAmount: Joi.number().required(),
  registrationNumber: Joi.string().required(),
  offences: Joi.string()
})

module.exports = {
  insert
}

async function insert(challan) {
  challan = await Joi.validate(challan, challanSchema, { abortEarly: false });
  return await new Challan(challan).save();
}
