angular.module('app.auth', [])

.controller('authController', function($scope, Auth){

  console.log('Auth.getItems()');

  $scope.auth = Auth;

  console.log($scope.auth);


  $scope.signin = function(){


  };

  $scope.signup = function(){


  };

});