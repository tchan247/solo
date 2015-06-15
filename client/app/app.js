
angular.module('app', ['ngRoute'])

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
    .otherwise({
      templateUrl: 'client/app/auth/signin.html',
      redirectTo: '/'
    });

})

.controller('appController', function(){


});
