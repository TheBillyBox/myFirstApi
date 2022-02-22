const express = require('express');
const router = express.Router();

const joiMiddleware = require('../middlewares/joiMiddleware');
const authSchemas = require('../model/joi/authSchema');
const authController = require('../controllers/authController');

router.post('/login',
  // joiMiddleware.validates(authSchemas.loginSchema, 'body'),
  authController.login
);

module.exports = router;