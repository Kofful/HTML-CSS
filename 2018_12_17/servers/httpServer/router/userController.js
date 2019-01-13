const User = require("../../../models/userModel");
const LIMIT = 1;

module.exports.createUser = (req, res, next) => {
    const data = req.body;
    const user = new User(data);
    user.save()
        .then((savedUser) => {
            res.json(savedUser)
        })
        .catch(err => next(err));
};

module.exports.findByNickname = (req, res, next) => {
    const {userNickname} = req.params;
    User.findOne({userNickname})
        .select("-hashPassword -_id -__v")
        .then((savedUser) => res.json(savedUser))
        .catch(err => next(err))
};

module.exports.login = (req, res, next) => {
    const {userNickname, password} = req.body;
    let currentUser;
    User.findOne({userNickname})
        .select("+hashPassword")
        .then((user) => {
            if (!user || !user.comparePassword(password)) {
                return next(new Error("Invalid login or password"));
            }
            currentUser = user;
            return user.generateTokenPair();
        })
        .then(tokens => {
            res.json({currentUser, tokens});
        })
        .catch(error => {
            next(error);
        })
};

module.exports.updateUser = (req, res, next) => {
    const userForUpdate = req.body;
    User.findOneAndUpdate(userForUpdate._id, userForUpdate)
        .select("+hashPassword")
        .then((user) => {
            if (!user) {
                return next("User not found");
            }
            res.json(user)
        })
        .catch(error => {
            next(error);
        })
};

module.exports.getUserWithPredicate = (req, res, next) => {
    const {page, ...other} = req.query;
    //const page = parseInt(req.query.page);
    let currentPage = parseInt(page);
    if (!page | page < 1 || isFinite(page)) {
        currentPage = 1;
    }
    const SKIP = (currentPage - 1) * LIMIT;
    Promise.all(
        [

            User.find(...other).countDocuments(),
            User.find(...other)
                .sort({userNickname: "ask"})
                .skip(SKIP)
                .limit(LIMIT)
        ]
    )
        .then(([total, users]) => {
            res.json(total, users);
        })
        .catch(err => {
            next(err);
        });
};