const express = require('express');
const router = express.Router();

const filmController = require('../controllers/filmController');
const joiMiddleware = require('../middlewares/joiMiddleware');
const filmSchemas = require('../model/joi/filmSchemas')
router.get('/details/:id', joiMiddleware.validate(filmSchemas.selectFilmSchema, 'path'), filmController.selectById);
router.post('/create', joiMiddleware.validate(filmSchemas.createFilmSchema, 'body'), filmController.create)
router.put('/update/:id', joiMiddleware.validate(filmSchemas.selectFilmSchema, 'path'),joiMiddleware.validate(filmSchemas.updateFilmSchema, 'body'), filmController.update )
module.exports = router;