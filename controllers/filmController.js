const { response } = require('express');
const filmService = require('../services/filmService')

module.exports.selectById = async (req, res) => {
  const response = { status: 500, msg: 'Internal server error'};
  try {
    const filmId = req.params.id;
    const serviceRes = await filmService.selectById(filmId);
    if (serviceRes.status) {
      if (serviceRes.result) {
        response.status = 200;
        response.msg = 'Film Found';
        response.body = serviceRes.result;
      } else {
        response.status = 404;
        response.msg = 'Film not found';
      }
    }
  } catch (err) {
    console.log('ERROR-filmController-selectById: ', err);
    response.error = err;
  }
  res.status(response.status).send(response);
}

module.exports.create = async (req,res) => {
  const response = { status: 500, message: 'Internal server error'};
  try {
    const film = req.body;
    film.active = true
    const serviceRes = await filmService.create(film);
    if (serviceRes.status) {
      response.body = serviceRes.result;
      response.message = 'Film created successfully';
      response.status = 201
    }
  } catch (err) {
    response.error = err;
    console.log('ERROR-filmController-create:', err);
  }
  return res.status(response.status).send(response)
}

module.exports.update = async (req, res) => {
  const response = { status: 500, message: 'Internal server error'};
  try {
    const film = req.body;
    film.id = req.params.id;
    const responseFromService = await filmService.update(film);
    if (responseFromService.status) {
      response.body = responseFromService.result;
      response.message = 'User updated successfully';
      response.status = 200
    }
  } catch (err) {
    response.error = err;
    console.log('ERROR-filmController-update', err);
  }
  return res.status(response.status).send(response);
}

module.exports.delete = async (req, res) => {
  const response = { status: 500, message: 'Internal server error'};
  try {
    const film = req.params.id;
    const responseFromService = await filmService.delete(film);
    if (responseFromService.status) {
      response.body = responseFromService.result;
      response.message = 'User deleted successfully';
      response.status = 200
    }
  } catch (err) {
    response.error = err;
    console.log('ERROR-filmController-delete', err);
  }
  return res.status(response.status).send(response);
}