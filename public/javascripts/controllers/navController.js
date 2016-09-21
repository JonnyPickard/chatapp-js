var app = angular.module('chatapp');

app.controller('navController', function($scope, $http){
  $scope.logout = function() {
    $http.get('/users/logout')
    .success(function(data){
      console.log('success');
    })
    .error(function(data){
      console.log('error');
    });
  };
});
