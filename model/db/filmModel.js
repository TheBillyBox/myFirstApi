const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
  title: String,
});

module.exports = mongoose.model('film', filmSchema);