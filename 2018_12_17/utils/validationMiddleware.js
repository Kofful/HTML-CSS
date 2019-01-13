const { DATA_NOT_FOUND, INVALID_PARAMS } = require("./constants");
const path = require("path");

module.exports = {
    validateRecipient(req, res, next) {
        const id = parseInt(req.params.recipient);
        if (!id) {
            next(INVALID_PARAMS);
        } else {
            next();
        }
    },
    validateUserPassword(req, res, next) {
        const { password } = req.body;
        console.log(password);
        const pasTest = /^[a-zA-Z0-9_!@#$%^&*-]{8,32}$/;
        if(!password || !pasTest.test(password)) {
            next(INVALID_PARAMS);
        }
        else {
            next();
        }
    },
    validateUserNickname(req, res, next) {
        const { userNickname } = req.body;
        console.log(userNickname);
        const nickTest = /^[a-zA-Z0-9_-]{3,16}$/;
        if(!userNickname || !nickTest.test(userNickname)) {
            next(INVALID_PARAMS);
        }
        else {
            next();
        }
    },
    validateUser(req, res, next) {
        const {
            userName,
            userLastName,
        } = req.body;
        console.log(userName, userLastName);
        if (!userName || !userLastName) {
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