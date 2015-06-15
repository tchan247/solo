angular.module('app.reader', ['app.services'])
.controller('readerController', function($scope, $location, Fetch, Process){

  $scope.text = Fetch.getText();

  // $scope.text = Fetch.fetch();

  // $scope.text = Process.process($scope.text, 25)

  // console.log(Process.process($scope.text, 25))

  $scope.exit = function(){
    console.log('Exiting')
    $location.path('/home');
  };

});

  