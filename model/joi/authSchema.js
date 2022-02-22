const Joi = require('@hapi/joi');

module.exports.loginSchema = Joi.object({
  mail: Joi.string().email().required(),
  pwd: Joi.string().required(),
});