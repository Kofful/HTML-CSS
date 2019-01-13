const express = require("express");
const router = require("./router");
const errorHandler = require("../../utils/errorHandler");

require("../../db/mongoose");

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

module.exports = app;
//app.listen(3000);
