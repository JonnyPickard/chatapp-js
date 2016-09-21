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
    console.log("register");
    console.log($scope.user);
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
});
