const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
   participants: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

const Conversation = mongose.model('Conversation', Schema);

module.exports = Conversation;