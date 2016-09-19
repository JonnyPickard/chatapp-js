var utils = require('../../utils');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var User = require('../../../models/user.js');

describe("User", function() {

  describe("#create()", function(){
    it('should create a new user', function(done){
      var user = {
        name: 'testName',
        password: 'testPassword'
      };

      User.create(user, function(err, createdUser){
        should.not.exist(err);
        should.exist(createdUser);

        expect(createdUser.name).to.equal('testName');
        expect(createdUser.password).to.equal('testPassword');
        done();
      });
    });
  });

  describe('#hashPassword()', function(){
    it('should return a hash of the password', function(done){
      var password = ('secret');
      var hashedPassword = User().hashPassword(password);
      expect(password).not.to.equal(hashedPassword);
      done();
    });
  });

  describe('#comparePasswords()', function(){
    it('should successfully compare the raw and hashed passwords', function(){
      var password = ('secret');
      var hashedPassword = User().hashPassword(password);

      expect(User().comparePasswords(password, hashedPassword)).to.equal(true);
    });
  });
});
