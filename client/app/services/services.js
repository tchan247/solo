angular.module('app.services', [])
.factory('Auth', function($http){

  var items = [1,2,3,4,5];

  var getItems = function(){
    return items;
  };

  return {
    getItems: getItems
  };
  
})
.factory('Fetch', function($http){
  var text = [];

  var getText = function(){

  };

  return {
    getText: getText
  };
});