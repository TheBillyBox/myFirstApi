const c = require('../config/constants');
const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res) => {
  const response = { status: c.status.serverError, msg: 'Internal server error' };
  try {

    const user = req.body;
    const resFromService = await authService.login(user);
    if (resFromService.status) {
      if (resFromService.result) {
        // TODO: generate token and return it
        const token = jwt.sign(
          { id: resFromService.result._id },
          process.env.SECRET_KEY,
          { expiresIn: '1h' }
        );
        response.body = { token };
        response.msg = 'User authenticated!';
        response.status = c.status.ok;
      } else {
        response.status = c.status.badRequest;
        response.error = 'Invalid credentials';
      }
    }
  } catch (err) {
    console.log('ERROR-authController-login: ', err);
    response.error = err;
  }
  res.status(response.status).send(response);
};