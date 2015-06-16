angular.module('app.dashboard', [])
.controller('dashboardController', function($scope, $location){
  $scope.options = [
    {name: 'Read', click: function(){ $location.path('/reader')}},
    {name: 'Texts', click: function(){ $location.path('/texts')}},
    {name: 'Settings', click: function(){$location.path('/settings')}},
    {name: 'Scores', click: function(){$location.path('/leaderboard')}},
    {name: 'Stats', click: function(){$location.path('/stats')}},
    {name: 'Signout', click: function(){$location.path('/signin')}}

  ];
});