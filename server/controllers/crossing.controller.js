const Joi = require('joi');
const Crossing = require('../models/crossing.model');

const crossingSchema = Joi.object({
  crossingId: Joi.string().required(),
  crossingName: Joi.string().required(),
  typeOfCrossing: Joi.number().integer().min(2).max(6).required(),
  connectingStreetId: Joi.array().required().items(Joi.string()),
  officerId: Joi.string().required()
})

module.exports = {
  insert
}

async function insert(crossing) {
  crossing.connectingStreetId = crossing.connectingStreetId.split(",");
  crossing = await Joi.validate(crossing, crossingSchema, { abortEarly: false });
  return await new Crossing(crossing).save();
}
