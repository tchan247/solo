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


// fetch text
.factory('Fetch', function($http){

  var fetch = function(url, callback){
    return $http.get("'" + url + "'")
    .success(function(data, status, headers, config){
      console.log('success on GET');
      callback(data);
    })
    .error(function(data, status, headers, config){
      console.log('error on GET');
    });
  };

  var getReadingList = function(){
    return text;
  };

  return {
    fetch: fetch,
    getReadingList: getReadingList
  };
})

// post data to db
.factory('Set', function($http){

  var set = function(url) {
    return $http.post(url, {msg:'hello word!'}).
      success(function(data, status, headers, config) {
        console.log('successful POST');
      }).
      error(function(data, status, headers, config) {
        console.log('error on POST');
      });
  };

  return {
    set: set
  };

})

// process text to certain options
.factory('Process', function(){

  var process = function(text, length, callback){
    var len = text.length;
    var rawText = [];
    var newText = [];
    var start = 0;
    var i = 0;
    var parser = new DOMParser();
    var doc = parser.parseFromString(text, 'text/html').childNodes[1];

    // recursively find p and article tags
    var find = function(node){
      var children = node.childNodes;

      if(node.tagName === 'P' || node.tagName === 'ARTICLE') {
        rawText.push(node.innerText);
      }

      for(var i = 0; i < children.length; i++) {
        find(children[i]);
      }
    };

    find(doc);
    
    // create an array of strings each with defined length
    rawText = rawText.join('. ');
    i = 0;
    while(i < len) {
      newText.push(rawText.slice(start, i));
      start = i;
      i += length;
    }

    newText.push(rawText.slice(start, i));

    callback(newText);
  };

  return {
    process: process
  };
})



