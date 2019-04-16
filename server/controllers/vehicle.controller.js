const Joi = require('joi');
const Vehicle = require('../models/vehicle.model');

const vehicleSchema = Joi.object({
  number: Joi.string().required(),
  type: Joi.string().required(),
})

module.exports = {
  insert
}

async function insert(vehicle) {
  vehicle = await Joi.validate(vehicle, vehicleSchema, { abortEarly: false });
  return await new Vehicle(vehicle).save();
}
