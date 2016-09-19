var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var userSchema = new mongoose.Schema({
  name: String,
  password: String
});

userSchema.methods.hashPassword = function(passwordRaw) {
  return bcrypt.hashSync(passwordRaw, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePasswords = function(passwordRaw, passwordHash) {
  return bcrypt.compareSync(passwordRaw, passwordHash);
};

module.exports = mongoose.model('User', userSchema);
