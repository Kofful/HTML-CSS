const mongoose = require("mongoose");

require("../models/userModel");

mongoose.connect("mongodb://localhost/chat",
    {useNewUrlParser: true },
    (error, test) => {
    if(error) {
        process.exit(1);
    }
    console.log("--Database connection successfully");
    });

mongoose.set("debug", true);

module.exports = mongoose;