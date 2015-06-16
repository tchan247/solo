angular.module('app.reader', ['app.services'])
.controller('readerController', function($scope, $location, Fetch, Process){

  // $scope.text = Fetch.getText();

  // $scope.text = Fetch.fetch();

  // console.log(Fetch.getText())

  $scope.text = Process.process(Fetch.getText(), 25)

  $scope.exit = function(){
    console.log('Exiting')
    $location.path('/home');
  };

  $scope.start = function(){
    setTimeout(function(){console.log('3')}, 1000);
    setTimeout(function(){console.log('2')}, 2000);
    setTimeout(function(){console.log('1')}, 3000);
    setTimeout(function(){displayText()}, 4000);

    var displayText = function(){
      var readerEl = angular.element(document.querySelector('.reader'));
      var i = 0;
      var displayInterval = setInterval(function(){
        if($scope.text[i + 1] === undefined || readerEl.length === 0) {
          clearInterval(displayInterval);

          readerEl.children()[0].remove()
        }

        readerEl.append('<p>' + $scope.text[i] + '</p>');
        readerEl.children()[0].remove()
        console.log($scope.text[i]);
        i++;
      }, 1000);

      
    }
  };

});

  