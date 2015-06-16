angular.module('app.settings', [])
.controller('settingsController', function($scope){
  $scope.speed = 1;

  $scope.increment = function(){
    if(this.speed < 10) {
      if(this.speed < 1) {
        this.speed += .1;
      } else {
        this.speed++;
      }
    }
  };

  $scope.decrement = function(){
    if(this.speed > 0) {
      if(this.speed <= 1) {
        this.speed -= .1;
      } else {
        this.speed--;
      }
    }
  };

});