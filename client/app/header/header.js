angular.module('app.header', [])
// .controller('headerController', function($scope){
//   $scope;
// })
.directive('header', function(){
  return {
    restrict: 'A',
    // replace: true,
    template: '<div class"header"></div>'
    // templateUrl: 'client/app/header/header.html'
  };
})