const express = require('express');
const router = express.Router();

const filmController = require('../controllers/filmController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const filmSchemas = require('../model/joi/filmSchemas')

router.get('/details/:id', joiMiddleware.validate(filmSchemas.selectFilmSchema, 'params'), filmController.selectById);
router.post('/', joiMiddleware.validate(filmSchemas.createFilmSchema, 'body'), filmController.create);
router.put('/:id', joiMiddleware.validate(filmSchemas.selectFilmSchema, 'params'), joiMiddleware.validate(filmSchemas.updateFilmSchema, 'body'), filmController.update);
router.delete('/:id', joiMiddleware.validate(filmSchemas.selectFilmSchema, 'params'), filmController.delete)

module.exports = router