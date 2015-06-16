angular.module('app.texts', [])
.controller('textsController', function($scope, $location, $rootScope, Fetch){

  $rootScope.readingList = [];
  $scope.list = $rootScope.readingList;

  $rootScope.readerData = '';

  // $rootScope.getData = function(item){
  //   console.log('url ' + item.title);
  //   Fetch.fetch('/scrape', function(data){
  //     $rootScope.readerData = data;
  //   });
  //   $location.path('/reader');
  // };

  $scope.getInput = function(title, url){

    $rootScope.readingList.push({title: title, url: url});
  };

  $scope.read = function(input){
    // console.log(input);
    $rootScope.readerData = input;
    // Fetch.fetch(input.url, function(){

    $location.path('/reader');
    // });
  };

});


