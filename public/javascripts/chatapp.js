var app = angular.module('chatapp', []);

app.controller('chatController', function($scope) {
  $scope.chatList = [];

  $scope.addChat = function(){
    $scope.chatList.push({
      text: $scope.chat,
      time: Date.now(),
    });
  };

});
