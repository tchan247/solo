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
      console.log('success on Fetch');
      callback(data);
    })
    .error(function(data, status, headers, config){
      console.log('error on Fetch');
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

// retrieve data from database
.factory('Retrieve', function($http){
  var retrieve = function(callback){
    return $http.get('/retrieve')
    .success(function(data){
      console.log('success on Retrieve');
      callback(data);
    })
    .error(function(data){
      console.log('error on Retrieve');
    });
  };

  return {
    retrieve: retrieve
  };
})

// post data to db
.factory('Store', function($http){

  var store = function(data) {
    return $http.post('/add', data)
      .success(function(data, status, headers, config) {
        console.log('success on POST');
      })
      .error(function(data, status, headers, config) {
        console.log('');
      });
  };

  return {
    store: store
  };

})

.factory('Remove', function($http){
  
  var remove = function(title, callback){
    return $http.delete('/' + title)
    .success(function(){
      console.log('success on Remove');
      callback();
    })
    .error(function(){
      console.log('error on Remove');
    });
    
  };

  return {
    remove: remove
  };
})

// process text to certain options
.factory('Process', function(){

  var process = function(text, length, callback){
    var len = text.length;
    var rawText = [];
    var newText = [];
    var i = 0;
    var parser = new DOMParser();
    var doc = parser.parseFromString(text, 'text/html');

    // find the <html> element
    for(var j = 0; j < doc.children.length; j++) {
      var children = doc.childNodes;
      if(children[i].tagName === 'HTML') {
        doc = children[i];
      }
    }

    console.log(doc);
    // doc = doc.childNodes[1];


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
    rawText = rawText.join(' ');
    var start = 0;
    len = rawText.length;
    i = 0;

    // console.log([rawText, start, i, len]);

    while(i < len) {
      var str = '';
      i += length;

      while(rawText[i] !== ' ' && i < len) {
        i++;
      }

      newText.push(rawText.slice(start, i));
      start = i;

      // newText.push(rawText.slice(start, i));
      // start = i;
    }

    newText.push(rawText.slice(start, i));

    callback(newText);
  };

  return {
    process: process
  };
});



