angular.module('app.texts', [])
.controller('textsController', function($scope, $location, $rootScope, Fetch){

  $scope.list = [];

  $rootScope.readerData = '';

  $rootScope.getData = function(item){
    console.log('url ' + item.title);
    Fetch.fetch('/scrape', function(data){
      $rootScope.readerData = data;
    });
    $location.path('/reader');
  };

  $scope.getInput = function(input){
    console.log(input);

    this.list.push({title: input});
  };

  $scope.read = function(url){
    
  };

});


