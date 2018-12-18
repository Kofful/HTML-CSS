const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const result = req.headers.authorization.split(" ");
    if(result.length !== 2 || result[0] !== "Bearer") {
        return next(new Error("Invalid authorization type"))
    }
    const token = result[1];
    jwt.verify(token, "myCustomKey", (err, decoded) => {
        if(err)
            return next(err);
        if(decoded.type !== "access") return next(new Error("Invalid token type"));
    })
        .catch( err => next(err));
};