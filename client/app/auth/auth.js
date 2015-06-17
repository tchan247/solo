angular.module('app.auth', [])

.controller('authController', function($scope, $location, Auth, Store){

  console.log('Auth.getItems()');

  $scope.auth = Auth;

  $scope.signIn = function(){
    console.log('siginin');
    $location.path('/dashboard');
  };

  $scope.signUp = function(){
    // Store.store('/signin');
    console.log('signup');
  };

});