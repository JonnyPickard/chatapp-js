var app = angular.module('chatapp', []);

app.controller('chatController', function($scope) {
  $scope.chatList = [];

  $scope.addChat = function(){
    $scope.chatList.push($scope.chat);
  };

});
