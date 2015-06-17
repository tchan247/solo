angular.module('app.texts', [])
.controller('textsController', function($scope, $location, $rootScope, $route, Fetch, Store, Retrieve, Remove){

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

    Store.store(item);
  };

  $scope.read = function(input){

    $rootScope.readerData = input;

    $location.path('/reader');
  };

  $scope.delete = function(title){

    Remove.remove(title, function(){
      $route.reload();  // current solution to re-render
    });

  };

  $scope.returnHome = function(){
    console.log('returning home');
    $location.path('/home');
  };

  $scope.loadText = function(){

    Retrieve.retrieve(function(data){
      for(var i = 0, len = data.length; i < len; i++) {
        $rootScope.readingList.push({title: data[i].title, url: data[i].url});
      }
    });
  };

});


