const mongoose = require('mongoose');

module.exports = mongoose.model('film', mongoose.Schema({
  title: String,
  sinopsis: String,
  director: String,
  releasedDate: Date,
  actors: Array,
}));