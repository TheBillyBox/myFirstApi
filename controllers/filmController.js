const c = require('./../config/constants');
const filmService = require('./../services/filmService');

module.exports.selectById = async (req,res) => {
  const response = { status: c.status.serverError, msg: 'Internal server error' };
  try {
    const filmId = req.params.id;
    const serviceRes = await filmService.selectById(filmId);

    if (serviceRes.status) {
      if (serviceRes.result) {
        response.status = c.status.success;
        response.msg = 'Film found';
        response.body = serviceRes.result;
      } else {
        response.status = c.status.notFound;
        response.msg = 'Film not found';
      }
    }
  } catch (err) {
    console.log('ERROR-filmController-selectById:', err);
    response.error = err
  }
  res.status(response.status).send(response);
}

module.exports.create = async (req,res) => {
  const response = { status: c.status.serverError, msg: 'Internal server error' };
  try {
    const film = req.body;
    film.active = true;
    const serviceRes = await filmService.create(film);

    if (serviceRes.status) {
      response.status = c.status.created;
      response.msg = 'Film';
      response.body = serviceRes.result;
    }
  } catch (err) {
    console.log('ERROR-filmController-create', err);
    response.error = err;
  }
  res.status(response.status).send(response);
}

module.exports.update = async (req,res) => {
  const response = { status: c.status.serverError, msg: 'Internal server error' };
  try {
    const filmId = req.params.id;
    const serviceRes = await filmService.delete(filmId);
    if (serviceRes) {
      if (serviceRes.result) {
        response.status = c.status.success;
        response.msg = 'Film deleted';
        response.body = serviceRes.result;
      } else {
        response.status = c.status.notFound;
        response.msg = 'Film not found';
      }
    }
  } catch (err) {
    console.log('ERROR-filmController-delete', err);
    response.error = err;
  }
  res.status(response.status).send(response);
}

module.exports.delete = async (req,res) => {
  const response = { status: c.status.serverError, msg: 'Internal server error'};
  try {
    const filmId = req.params.id;
    const serviceRes = await filmService.delete(filmId);
    if (serviceRes.status) {
      if (serviceRes.result) {
        response.status = c.status.success;
        response.msg = 'Film deleted';
        response.body = serviceRes.result;
      } else {
        response.status = c.status.notFound;
        response.msg = 'Film not found'
      }
    }
  } catch (err) {
    console.log('ERROR-filmController-delete', err);
    response.error = err;
  }
  res.status(response.status).send(response)
}