angular.module('app.texts', [])
.controller('textsController', function($scope, $location, $rootScope, Fetch, Set, Retrieve){

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

    var item = {title: title, url: url};

    $rootScope.readingList.push(item);

    Set.set(item);
  };

  $scope.read = function(input){

    $rootScope.readerData = input;

    $location.path('/reader');
  };

  $scope.loadText = function(){
    Retrieve.retrieve(function(data){
      for(var i = 0; i < data.length; i++) {
        $rootScope.readingList.push({title: data[i].title, url: data[i].url});
      }
    });
  };

});


