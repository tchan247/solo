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

  // $scope.text = $rootScope.readerData;
  
  $scope.exit = function(){
    console.log('Exiting');
    $location.path('/home');
  };

  // console.log(' textsController inject ' + textsController.readData);

  $scope.start = function(text){
    setTimeout(function(){console.log('3');}, 1000);
    setTimeout(function(){console.log('2');}, 2000);
    setTimeout(function(){console.log('1');}, 3000);
    // setTimeout(function(){displayText()}, 4000);
    var displayText = function(data){
      var readerEl = angular.element(document.querySelector('.reader'));
      var i = 0;
 
      var displayInterval = setInterval(function(){
        if([i + 1] === undefined || readerEl.length === 0) {
          clearInterval(displayInterval);

          readerEl.children()[0].remove();
        }

        readerEl.append('<p>' + data[i] + '</p>');
        readerEl.children()[0].remove();
        console.log(data[i]);
        i++;
      }, 1000);
    };

    Fetch.fetch('/scrape', function(data){

      Process.process(data, 25, displayText);

    });
  };

});

  