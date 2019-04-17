const Joi = require('joi');
const Crossing = require('../models/crossing.model');

const CrossingSchema = Joi.object({
  crossingId: Joi.string().required(),
  crossingName: Joi.string().required(),
  typeOfCrossing: Joi.number().integer.min(2).max(6).required(),
  connectingStreetId: Joi.string().required(),
  officerId: Joi.string().required()
})

module.exports = {
  insert
}

async function insert(street) {
  street = await Joi.validate(crossing, CrossingSchema, { abortEarly: false });
  return await new Crossing(crossing).save();
}