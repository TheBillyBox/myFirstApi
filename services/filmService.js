const mongoose = require('mongoose');
const Film = require('../model/db/filmModel');
const repository = require('../database/repository');
const { response } = require('express');
const { report } = require('../routes/filmRoutes');

module.exports.selectById = async (filmId) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(filmId),
      model: Film,
      projection: {
        
      }
    };
    const resFromRepo = await repository.selectById(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-filmService-selectById: ', err)
  }
  return response;
}

module.exports.create = async (dataFromController) => {
  const responseObj = { status: false };
  try {
    const film = new Film(dataFromController);
    const responseFromRepro = await repository.save(film);
    if (responseFromRepro.status) {
      responseObj.result = responseFromRepro.result;
      responseObj.status = true;
    }
  } catch (err) {
    responseObj.error = err;
    console.log('ERROR-filmService-create:', err);
  }
  return responseObj;
}

module.exports.update = async (film) => {
  const responseObj = { status: false };
  try{
    const data = {
      findQuery: { _id:mongoose.Types.ObjectId(film.id) },
      model: Film,
      projection: { _v: false },
      updateQuery: {}
    }
    if (film.title) data.updateQuery.title = film.title;
    if (typeof film.id != 'undefined') data.updateQuery.id = film.id;
    const responseFromRepro = await repository.findOneAndUpdate(data);
    if(responseFromRepro.status) {
      responseObj.result = responseFromRepro.result;
      responseObj.status = true;
    } 
  } catch (err) {
    responseObj.err = err;
    console.log('ERROR-filmService-update', err)
  }
  return responseObj
};

module.exports.delete = async (film) => {
  const responseObj = { status: false };
  try{
    const data = {
      findQuery: { _id:mongoose.Types.ObjectId(film.id) },
      model: Film,
      projection: { _v: false },
      updateQuery: {}
    }
    if (film.title) data.updateQuery.title = film.title;
    if (typeof film.id != 'undefined') data.updateQuery.id = film.id;
    const responseFromRepro = await repository.findOneAndUpdate(data);
    if(responseFromRepro.status) {
      responseObj.result = responseFromRepro.result;
      responseObj.status = true;
    } 
  } catch (err) {
    responseObj.err = err;
    console.log('ERROR-filmService-update', err)
  }
  return responseObj
};