const Joi = require('joi');
const TrafficSignal = require('../models/trafficSignal.model');

const TrafficSignalSchema = Joi.object({
	trafficLightID: Joi.string().required(),
	crossingID: Joi.string().required()
})

module.exports = {
  insert
}

async function insert(trafficSignal) {
  trafficSignal = await Joi.validate(trafficSignal, TrafficSignalSchema, { abortEarly: false });
  return await new TrafficSignal(trafficSignal).save();
}