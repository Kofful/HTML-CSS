
const { DATA_NOT_FOUND, INVALID_PARAMS } = require("./constants");

const errors = {
    [INVALID_PARAMS]: {code: 400, message: "invalid Params"},
    [DATA_NOT_FOUND]: {code: 404, message: "Data node found"}
};

module.exports.errorHandler = (err, req, res, next) => {
    let result;
    result = errors[err];
    res.status(result.code).json(result.message);
};