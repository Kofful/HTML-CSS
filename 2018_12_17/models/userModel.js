const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
userNickname: {
    type: String,
    required: true,
    unique: true
},
     userName: {
         type: String,
         required: true
     },
     userLastName: {
         type: String,
         required: true
     },
     hashPassword: {
    type: String,
         required: true,
         select: false
     },

 });
Schema.virtual("password")
.set( function(password) {
    this.hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
})
.get( function() {
    return this.hashPassword
});

Schema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.hashPassword);
};

const user = mongoose.model("user", Schema);

module.exports = user;