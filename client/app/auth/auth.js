angular.module('app.auth', [])

.controller('authController', function($scope, Auth, Set){

  console.log('Auth.getItems()');

  $scope.auth = Auth;

  console.log($scope.auth);

  

  $scope.signIn = function(){
    console.log('siginin');
    Set.set('/signin');
  };

  $scope.signUp = function(){

    console.log('signup');
  };

});