var app = angular.module('chatapp', ['ngRoute']);

app.config(function($routeProvider, $controllerProvider){

  app.registerCtrl = $controllerProvider.register;

  $routeProvider
    .when('/', {
      templateUrl: 'partials/chat.html',
      controller: 'chatController'
    })
    .when('/users/login', {
      templateUrl: 'partials/login.html',
      controller: 'authController'
    })
    .when('/users/register', {
      templateUrl: 'partials/register.html',
      controller: 'authController'
    });
});
