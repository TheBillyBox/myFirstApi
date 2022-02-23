const c = require('../config/constants');
const fetchService = require('../services/fetchService');

module.exports.allUsers = async (req, res) => {
  const response = { status: c.status.serverError, msg: 'Internal server error' };
  try {
    const page = req.params.page
    const resFromService = await fetchService.getAllUsers(page);
    if (resFromService.status) {
      response.data = resFromService.body.data;
      response.status = c.status.success
      response.msg = 'Request success!!'
    } else {
      response.status = c.status.badRequest;
    }
  } catch (err) {
    console.log('ERROR fetchController allUsers', err);
    response.error = err;
  }
  res.status(response.status).send(response);
}

module.exports.singleUser = async (req, res) => {
  const response = { status: c.status.serverError, msg: 'Internal server error' };
  try {
    const id = req.params.id
    console.log(id)
    const resFromService = await fetchService.getSingleUser(id);
    if (resFromService.status) {
      response.data = resFromService.body.data;
      response.status = c.status.success
      response.msg = 'Request success!!'
    } else {
      response.status = c.status.badRequest;
    }
  } catch (err) {
    console.log('ERROR fetchController allUsers', err);
    response.error = err;
  }
  res.status(response.status).send(response);
}

module.exports.login = async (req, res) => {
  const response = { status: c.status.serverError, msg: 'Internal server error' };
  try {
    const user = req.body
    const resFromService = await fetchService.login(user);
    console.log(resFromService)
    if (resFromService.status) {
      response.data = resFromService.body;
      response.status = c.status.success
      response.msg = 'Request success!!'
    } else {
      response.status = c.status.badRequest;
    }
  } catch (err) {
    console.log('ERROR fetchController allUsers', err);
    response.error = err;
  }
  res.status(response.status).send(response);
}