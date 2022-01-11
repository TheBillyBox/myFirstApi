const mongoose = require('mongoose');
const Film = require('../model/db/filmModel');
const repository = require('../database/repository');
const { response } = require('express');

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