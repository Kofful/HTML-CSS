const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
        text: {
            type: String,
            required: true,
        },
        uid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        cid: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    {
        timestamp: true,
    });

const Message = mongoose.model("Message", Schema);

module.exports = Message;