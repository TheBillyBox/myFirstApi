const mongoose = require('mongoose');

module.exports = mongoose.model('users', mongoose.Schema({
    mail: String,
    active: Boolean,
    pwd: String,
}));