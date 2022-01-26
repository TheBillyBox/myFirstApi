const mongoose = require('mongoose');

module.exports = mongoose.model('Film', mongoose.Schema({
  title: String,
  sinopsis: String,
  director: String,
  releasedDate: Date,
  actors: Array,
}));