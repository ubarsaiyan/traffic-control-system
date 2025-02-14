const Joi = require('joi');
const Licence = require('../models/licence.model');

const licenceSchema = Joi.object({
  licenceId: Joi.string().required(),
  name: Joi.string().required(),
  authorization: Joi.array().required().items(Joi.string().valid(['MCWOG','LMV-NT','MGV','LMV','HMV','HGMV','HPMV'])),
  dateOfBirth: Joi.date().required(),
  dateOfIssue: Joi.date().required(),
  expirationDate: Joi.date().required(),
  address: Joi.string().required(),
  bloodGroup: Joi.string().required().valid(['A+', 'B+','AB+','O+','A-', 'B-', 'AB-', 'O-',]),
})

module.exports = {
  insert
}

async function insert(licence) {
  licence.authorization = licence.authorization.split(",");
  licence = await Joi.validate(licence, licenceSchema, { abortEarly: false });
  return await new Licence(licence).save();
}
