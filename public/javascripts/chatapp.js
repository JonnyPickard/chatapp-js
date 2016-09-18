var app = angular.module('chatapp', []);

app.controller('chatController', function($scope) {

  var user = {
    name: ""
  };

  $scope.chatList = [];

  $scope.getUsername = function() {
    return user.name;
  };

  $scope.isLoggedIn = function(){
    if (user.name === "") {
      return true;
    } else {
      return false;
    }
  };

  $scope.logIn = function(){
    user.name = $scope.username;
  };

  $scope.addChat = function(){
    $scope.chatList.push({
      text: $scope.chat,
      time: getDate(),
      user: user.name,
      created_at: Date.now()
    });
    $scope.chat = "";
  };

});

function getDate() {
  var d = new Date();
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //Months are zero based
  var curr_year = d.getFullYear();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var date = (hours + ":" + minutes + " - " + curr_date + "-" + curr_month + "-" + curr_year);
  return date;
}
