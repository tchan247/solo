angular.module('app.texts', [])
.controller('textsController', function($scope, $location, $rootScope, Fetch){

  $scope.list = [];

  $rootScope.readerData = '';

  // $rootScope.getData = function(item){
  //   console.log('url ' + item.title);
  //   Fetch.fetch('/scrape', function(data){
  //     $rootScope.readerData = data;
  //   });
  //   $location.path('/reader');
  // };

  $scope.getInput = function(input){
    console.log(input);

    this.list.push({url: input});
  };

  $scope.read = function(input){
    // console.log(input);
    $rootScope.readerData = input;
    // Fetch.fetch(input.url, function(){

    $location.path('/reader');
    // });
  };

});


