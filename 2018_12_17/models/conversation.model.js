const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
   participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

const Conversation = mongoose.model('Conversation', Schema);

module.exports = Conversation;