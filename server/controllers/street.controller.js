const Joi = require('joi');
const Street = require('../models/street.model');

const streetSchema = Joi.object({
  streetId: Joi.string().required(),
  streetName: Joi.string().required(),
  numberOfLanes: Joi.number().integer.min(1).max(8).required(),
  typeOfRoad: Joi.string().valid('Concrete Roads','Bituminous Roads','Earthen Roads','Earthen Roads','Murrum Roads','WBM Roads').required()
})

module.exports = {
  insert
}

async function insert(street) {
  street = await Joi.validate(street, streetSchema, { abortEarly: false });
  return await new Street(street).save();
}
