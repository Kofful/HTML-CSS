const express = require("express");
const router = require("./router");
//const errorHandler = require("./utils/errorHandler");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
    if(req.path === "/pageableUser") {
        next(new Error());
    }
    else {
        next();
    }
});

app.use(router);
//app.use(errorHandler);

app.listen(3000);
