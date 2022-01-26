const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.selectFilmSchema = Joi.object({
  id: Joi.objectId().required(),
});

module.exports.createFilmSchema = Joi.object({
  title: Joi.string().alphanum().min(2).max(50).required(),
  sinopsis: Joi.string().min(2).max(120).required(),
  director: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20).required(),
  releasedDate: Joi.date().required(),
  actors: Joi.array().items(
    Joi.object().keys({
      firstName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20),
      lastName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20),
    }),
  )
});

module.exports.updateFilmSchema = Joi.object({
  title: Joi.string().alphanum().min(2).max(50).optional(),
  sinopsis: Joi.string().min(2).max(120).optional(),
  director: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20).optional(),
  releasedDate: Joi.date().optional(),
  actors: Joi.array().items(
    Joi.object().keys({
      firstName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20),
      lastName: Joi.string().regex(/^[a-zA-Z]+$/).min(3).max(20),
    }).optional(),
  )
})