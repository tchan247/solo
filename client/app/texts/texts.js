angular.module('app.texts', [])
.controller('textsController', function($scope, $location, Fetch){

  $scope.list = Fetch.fetch('/readings') || [];

  $scope.getInput = function(input){
    console.log(input);

    this.list.push({title: input});
  };

  $scope.read = function(item){
    console.log('read ' + item.title);
    $location.path('/reader');
  };

});


