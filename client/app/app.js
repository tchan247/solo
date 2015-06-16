
angular.module('app', ['ngRoute', 'app.auth', 'app.header', 'app.dashboard', 'app.reader', 'app.texts', 'app.settings', 
  'app.services', 'app.leaderboard'])

.config(function($routeProvider){
  $routeProvider
    .when('/signin', {
      templateUrl: 'client/app/auth/signin.html',
      controller: 'authController'
    })
    .when('/signup', {
      templateUrl: 'client/app/auth/signup.html',
      controller: 'authController'
    })
    .when('/reader', {
      templateUrl: 'client/app/reader/reader.html',
      controller: 'readerController'
    })
    .when('/home', {
      templateUrl: 'client/app/dashboard/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/settings', {
      templateUrl: '',
      controller: ''
    })
    .when('/stats',{
      templateUrl: '',
      controller: ''
    })
    .when('/leaderboard', {
      templateUrl: '',
      controller: ''
    })
    .when('/texts', {
      templateUrl: '',
      controller: ''
    })
    .otherwise({
      templateUrl: 'client/app/dashboard/dashboard.html',
      redirectTo: '/'
    });

})

.controller('appController', function(){


});
