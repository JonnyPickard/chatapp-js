var chai = require('chai');
var expect = chai.expect();
var should = chai.should();
var User = require('../../../models/user.js');

describe("User", function() {

  describe("#create()", function(){
    it('should create a new user', function(){
      var user = {
        name: 'testName',
        password: 'testPassword'
      };

      User.create(user, function(err, createdUser){
        should.not.exist(err);
        should.exist(createdUser);

        expect(createdUser.name).toEqual('testName');
        expect(createdUser.password).toEqual('testPassword');
      });
    });
  });
});
