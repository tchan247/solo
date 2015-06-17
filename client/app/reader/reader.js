angular.module('app.reader', ['app.services'])
.controller('readerController', function($scope, $location, Fetch, Process, $rootScope){

  $scope.readerSpeed = 1000;

  $scope.increment = function(){

    if(this.readerSpeed < 2000) {
      this.readerSpeed += 100;
    }
  };
  
  $scope.decrement = function(){
    if(this.readerSpeed > 100) {
      this.readerSpeed -= 100;
    }
  };

  $scope.exit = function(){
    console.log('Exiting');
    $location.path('/home');
  };

  // console.log(' textsController inject ' + textsController.readData);

  $scope.start = function(text){
    var pause = false;
    var i = 0;

    var displayText = function(data){
      var readerEl = angular.element(document.querySelector('.reader'));


      readerEl.append('<p>' + data[i] + '</p>');
      readerEl.children()[0].remove();
      console.log(data[i]);

      i++;

      if(data[i] !== undefined && data[i].length > 0 && !pause) {
        setTimeout(function(){displayText(data)}, $scope.readerSpeed);
      }
    };

    Fetch.fetch($rootScope.readerData.url, function(data){
      
      Process.process(data, 20, displayText);



    });
  };

});

  