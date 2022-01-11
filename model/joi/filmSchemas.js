const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.selectFilmSchema = Joi.object({
  id: Joi.objectId().required(),
})

module.exports.createFilmSchema = Joi.object({
  title: Joi.string().alphanum().required(),
})