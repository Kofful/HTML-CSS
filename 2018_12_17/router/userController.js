const User = require("../models/userModel");


module.exports.createUser = (req, res, next) => {
  const data = req.body;
  const user = new User(data);
  user.save()
      .then((savedUser) => {
    res.json(savedUser)
  })
      .catch(err => next(err));
};

module.exports.findById = (req, res, next) => {
User.findById(req.params.id)
    .select("+hashPassword -__v -lastName")
    .then((savedUser) => res.json(savedUser))
    .catch( err => next(err))
};

module.exports.login = (req, res, next) => {
  const {email, password} = req.body;
  let currentUser;
  User.findOne({email})
      .select("+hashPassword")
  .then((user) => {
    if (!user || user.comparePassword(password)) {
      return next(new Error("Invalid email or password"));
    }
    currentUser = user;
      return user.genereateTokenPair();
  })
      .then(tokens =>
  {
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
          return next(new Error("User not found"));
        }
        res.json(user)
      })
      .catch(error => {
          next(error);
        })
};