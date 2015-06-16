angular.module('app.settings', [])
.controller('settingsController', function($scope, $rootScope){
  $rootScope.readerSpeed = 10000;

  $scope.increment = function(){
    if($rootScope.readerSpeed < 10000) {
      if($rootScope.readerSpeed <= 0) {
        $rootScope.readerSpeed += 100;
      } else {
        $rootScope.readerSpeed++;
      }
    }
  };

  $scope.decrement = function(){
    if($rootScope.readerSpeed > 0) {
      if($rootScope.readerSpeed <= 1000) {
        $rootScope.readerSpeed -= 100;
      } else {
        $rootScope.readerSpeed -= 100;
      }
    }
  };

});

