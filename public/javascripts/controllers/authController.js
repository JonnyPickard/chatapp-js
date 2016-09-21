var app = angular.module('chatapp');

app.controller('authController', function($scope, $http, $location, $rootScope) {
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

      if(data.state == 'success'){
        $rootScope.currentUserSignedIn = true;
        $rootScope.currentUserName = $scope.user.name;
				$location.path('/');
      }
    })
    .error(function(data) {
      $scope.error_message = "username or password does not exist";
    });
	};
});
