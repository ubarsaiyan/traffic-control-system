const Joi = require('joi');
const Emergency = require('../models/emergency.model');

const emergencySchema = Joi.object({
  streetId: Joi.string().required(),
  typeOfEmergency: Joi.string().required(),
  officerId : Joi.string().required()
})

module.exports = {
  insert
}

async function insert(emergency) {
  emergency = await Joi.validate(emergency, emergencySchema, { abortEarly: false });
  return await new Emergency(emergency).save();
}
