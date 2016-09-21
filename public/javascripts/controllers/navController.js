var app = angular.module('chatapp');

app.controller('navController', function($scope, $http, $rootScope){
  $scope.logout = function() {
    $http.get('/users/logout')
    .success(function(data){
      console.log('success');
      $rootScope.currentUserSignedIn = false;
      $rootScope.currentUserName = "";
    })
    .error(function(data){
      console.log('error');
    });
  };
});
