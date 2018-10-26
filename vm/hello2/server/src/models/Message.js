var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
  lang: String,
  message: String,
});

module.exports = mongoose.model('Message', MessageSchema);
