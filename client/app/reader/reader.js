angular.module('app.reader', ['app.services'])
.controller('readerController', function($scope, $location, Fetch, Process, $rootScope){

  // $scope.text = Fetch.getText();

  // $scope.text = function(){
  //   return Fetch.fetch('/scrape', function(data){
  //     console.log(data)
  //     return data;
  //   });

  // };

  // console.log(Fetch.getText())

  // $scope.text = Process.process(Fetch.getText(), 25);

  $scope.readerSpeed = $rootScope.readerSpeed || 1000;
  
  $scope.exit = function(){
    console.log('Exiting');
    $location.path('/home');
  };

  // console.log(' textsController inject ' + textsController.readData);

  $scope.start = function(text){
    setTimeout(function(){console.log('3');}, 1000);
    setTimeout(function(){console.log('2');}, 2000);
    setTimeout(function(){console.log('1');}, 3000);

    var i = 0;
    var displayText = function(data){
      var readerEl = angular.element(document.querySelector('.reader'));


      readerEl.append('<p>' + data[i] + '</p>');
      readerEl.children()[0].remove();
      console.log(data[i]);
      i++;
      if(data[i] !== undefined && data[i].length > 0) {
        setTimeout(function(){displayText(data)}, $scope.readerSpeed);
      }
    };

    // console.log($rootScope.readerData);

    Fetch.fetch($rootScope.readerData.url, function(data){
      
      Process.process(data, 40, displayText);

    });
  };

});

  