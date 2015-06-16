angular.module('app.auth', [])

.controller('authController', function($scope, $location, Auth, Set){

  console.log('Auth.getItems()');

  $scope.auth = Auth;

  $scope.signIn = function(){
    console.log('siginin');
    Set.set('/signin');
    $location.path('/dashboard');
  };

  $scope.signUp = function(){

    console.log('signup');
  };

});