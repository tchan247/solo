
angular.module('app', ['ngRoute', 'app.auth', 'app.header', 'app.dashboard', 'app.reader', 'app.texts', 'app.settings', 
  'app.services', 'app.stats', 'app.leaderboard'])

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
      templateUrl: 'client/app/settings/settings.html',
      controller: 'settingsController'
    })
    .when('/stats',{
      templateUrl: 'client/app/stats/stats.html',
      controller: 'statsController'
    })
    .when('/leaderboard', {
      templateUrl: 'client/app/leaderboard/leaderboard.html',
      controller: 'leaderboardController'
    })
    .when('/texts', {
      templateUrl: 'client/app/texts/texts.html',
      controller: 'textsController'
    })
    .otherwise({
      templateUrl: 'client/app/dashboard/dashboard.html',
      redirectTo: '/'
    });

})

.controller('appController', function($location){


});
