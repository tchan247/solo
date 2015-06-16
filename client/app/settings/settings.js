angular.module('app.settings', [])
.controller('settingsController', function($scope, $rootScope){
  $rootScope.speed = 1;

  $scope.increment = function(){
    if($rootScope.speed < 10) {
      if($rootScope.speed < 1) {
        $rootScope.speed += .1;
      } else {
        $rootScope.speed++;
      }
    }
  };

  $scope.decrement = function(){
    if($rootScope.speed > 0) {
      if($rootScope.speed <= 1) {
        $rootScope.speed -= .1;
      } else {
        $rootScope.speed--;
      }
    }
  };

});