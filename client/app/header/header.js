angular.module('app.header', [])
// .controller('headerController', function($scope){
//   $scope;
// })
.directive('headerView', function(){
  return {
    restrict: 'A',
    // replace: true,
    template: '<div class"header"></div>'
    // templateUrl: 'client/app/header/header.html'
  };
})