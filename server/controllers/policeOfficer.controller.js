const Joi = require('joi');
const PoliceOfficer = require('../models/policeOfficer.model');

const policeOfficerSchema = Joi.object({
	officerId: Joi.string().required(),
	age: Joi.number().min(18).max(65).required(),
	name: Joi.string().required(),
	rank: Joi.string().required(),
	bloodGroup: Joi.string().valid('A+', 'B+', 'AB+', 'O+', 'A-', 'B-', 'AB-', 'O-').required(),
	stationId: Joi.string().required()
})

module.exports = {
  insert
}

async function insert(policeOfficer) {
  policeOfficer = await Joi.validate(policeOfficer, policeOfficerSchema, { abortEarly: false });
  return await new PoliceOfficer(policeOfficer).save();
}