const Joi = require('joi');
const Vehicle = require('../models/vehicle.model');

const vehicleSchema = Joi.object({
  registrationNumber: Joi.string().required(),
  registrationDate: Joi.date().required(),
  registeredUpto: Joi.date().required(),
  manafacturingDate: Joi.date().required(),
  ownerName: Joi.string().required(),
  chassisNumber: Joi.string().required(),
  class: Joi.string().required().valid(['MCWOG','LMV-NT','MGV','LMV','HMV','HGMV','HPMV']),
  model: Joi.string().required(),
  manafacturer: Joi.string().required(),
  RTOId: Joi.string().required()
})

module.exports = {
  insert
}

async function insert(vehicle) {
  vehicle = await Joi.validate(vehicle, vehicleSchema, { abortEarly: false });
  return await new Vehicle(vehicle).save();
}
