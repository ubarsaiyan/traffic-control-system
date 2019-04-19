const Joi = require('joi');
const PoliceStation = require('../models/policeStation.model');

const policeStationSchema = Joi.object({
  policeStationId: Joi.string().required(),
  address: Joi.string().required(),
  policeStationName: Joi.string().min(5).max(100).required()
})

module.exports = {
  insert
}

async function insert(policeStation) {
  policeStation = await Joi.validate(policeStation, policeStationSchema, { abortEarly: false });
  return await new PoliceStation(policeStation).save();
}
