const {DATA_NOT_FOUND, INVALID_PARAMS} = require("./constants");
const path = require("path");

module.exports = {
    validateParams(req, res, next) {
        const id = parseInt(req.params.id);
        if (!id || !isFinite(id) || id <= 0) {
            next(INVALID_PARAMS);
        } else {
            next();
        }
    },
    validateUser(req, res, next) {
        const {
            userNickname,
            password,
            userName,
            userLastName,
        } = req.body;
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!userName || !userNickname || !userLastName || !password ||
            password.length < 8 || password.length > 32 ||
            !re.test(userNickname) || !re.test(password)) {
            next(INVALID_PARAMS);
        }
        else {
            next();
        }
    },
    validateFileName(req, res, next) {
        const fileName = req.params.fileName;
        if (!fileName || fileName.type.split("/")[0] !== "image")
            next(INVALID_PARAMS);
        else next();
    }
};