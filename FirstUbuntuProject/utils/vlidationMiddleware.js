const { DATA_NOT_FOUND, INVALID_PARAMS } = require("./constants");

module.exports = {
    createAccountMiddleware(req, res, next) {
        //TODO validation
        next(INVALID_PARAMS);
    },
    validateParams(req, res, next) {
        const id = parseInt(req.params.id);
        if(!id || !isFinite(id) || id <= 0) {
            next(INVALID_PARAMS);
        } else {
            next();
        }
    },
    validateContact(req, res, next) {
        //TODO validate contact
        next();
    }
};