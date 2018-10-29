const mongoose = require('mongoose')

var MessageSchema = new mongoose.Schema(
    {
	lang: String,
	message: String
    },
    {
	collection: "messages"
    }
);

module.exports = mongoose.model('Message', MessageSchema);
