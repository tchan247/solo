
angular.module('app', ['ngRoute', 'app.reader', 'app.auth', 'app.services'])

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
    // .otherwise({
    //   templateUrl: 'client/app/auth/signin.html',
    //   redirectTo: '/'
    // });

})

.controller('appController', function(){


});
