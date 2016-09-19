var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  name: String,
  password: String
});

userSchema.methods.hashPassword = function(passwordRaw) {
  return bcrypt.hashSync(passwordRaw, bcrypt.genSaltSync(10));
};

module.exports = mongoose.model('User', userSchema);
