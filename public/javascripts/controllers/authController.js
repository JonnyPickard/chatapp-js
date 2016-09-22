var app = angular.module('chatapp');

app.controller('authController', function($scope, $http, $location, $rootScope) {

  $scope.isError = false;

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
        $scope.isError = false;
				$location.path('/chat');
			}
			else
      {
        $scope.isError = true;
				$scope.error_message = data.message;
			}
		});
	};

  $scope.login = function(){
		$http.post('/users/login', {username: $scope.user.username, password: $scope.user.password})
    .success(function(data){

      if(data.state == 'success'){
        $rootScope.currentUserSignedIn = true;
        $rootScope.currentUserName = $scope.user.username;
        $scope.isError = false;
				$location.path('/chat');
      }
    })
    .error(function(data) {
      $scope.isError = true;
      $scope.error_message = "username or password does not exist";
    });
	};
});
