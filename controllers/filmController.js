const { response } = require('express');
const filmService = require('../services/filmService')

module.exports.selectById = async (req, res) => {
  const response = { status: 500, msg: 'Internal server error'};
  try {
    const filmId = req.params.id;
    const resFromService = await filmService.selectById(filmId);
    if (resFromService.status) {
      if (resFromService.result) {
        response.status = 200;
        response.msg = 'Film Found';
        response.body = resFromService.result;
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
  const responseObj = { status: 500, message: 'Internal server error'};
  try {
    const data = req.body;
    const responseFromService = await filmService.create(data);
    if (responseFromService.status) {
      responseObj.body = responseFromService.result;
      responseObj.message = 'Film created successfully';
      responseObj.status = 201
    }
  } catch (err) {
    responseObj.error = err;
    console.log('ERROR-filmController-create:', err);
  }
  return res.status(responseObj.status).send(responseObj)
}

module.exports.update = async (req, res) => {
  console.log(req.params.id, req.body)
  const responseObj = { status: 500, message: 'Internal server error'};
  try {
    const film = req.body;
    film.id = req.params.id;
    const responseFromService = await filmService.update(film);
    if (responseFromService.status) {
      responseObj.body = responseFromService.result;
      responseObj.message = 'User updated successfully';
      responseObj.status = 200
    }
  } catch (err) {
    responseObj.error = err;
    console.log('ERROR-filmController-update', err);
  }
  return res.status(responseObj.status).send(responseObj);
}