const Joi = require('joi');
const TrafficSignal = require('../models/trafficSignal.model');

const trafficSignalSchema = Joi.object({
	trafficLightID: Joi.string().required(),
	crossingID: Joi.string().required()
})

module.exports = {
  insert
}

async function insert(trafficSignal) {
  trafficSignal = await Joi.validate(trafficSignal, trafficSignalSchema, { abortEarly: false });
  return await new TrafficSignal(trafficSignal).save();
}