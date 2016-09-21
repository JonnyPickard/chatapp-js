var app = angular.module('chatapp');

app.controller('authController', function($scope, $http, $location) {
  $scope.test = "auth controller";

  $scope.user = {
    name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  $scope.register = function(){
		$http.post('/users/register', $scope.user).success(function(data){
			if(data.state == 'success'){
        console.log(data);
				$location.path('/');
			}
			else
      {
				$scope.error_message = data.message;
			}
		});
	};

  $scope.login = function(){
		$http.post('/users/login', {username: $scope.user.username, password: $scope.user.password})
    .success(function(data){
      console.log(data);

      if(data.state == 'success'){
        console.log(data);
				$location.path('/');
      }
    })
    .error(function(data){
      console.log('eror');
      console.log(data);
      $scope.error_message = {msg: data.message};
    });
	};
});
