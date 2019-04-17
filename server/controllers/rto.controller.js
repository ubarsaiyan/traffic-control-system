const Joi = require('joi');
const Rto = require('../models/rto.model');

const RTOSchema = Joi.object({
  rtoCode: Joi.string().required(),
  address: Joi.string().required(),
  head: Joi.string().required()
})

module.exports = {
  insert
}

async function insert(vehicle) {
  rto = await Joi.validate(rto, RTOSchema, { abortEarly: false });
  return await new Rto(rto).save();
}