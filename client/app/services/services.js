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
    console.log(url)
    return $http.get("'" + url + "'")
    .success(function(data, status, headers, config){
      console.log('success on GET');
      callback(data);
    })
    .error(function(data, status, headers, config){
      console.log('error on GET');
    });
  };

  var text = 'Mongoose is the popular English name for 29 of 34[2] species in the 14 genera of the family \
    Herpestidae, which are small carnivorans that are native to southern Eurasia and mainland Africa. The \
    other five species in the family are the four kusimanses in the genus Crossarchus, and the only species \
    in the genus Suricata: Suricata suricatta, commonly called meerkat in English.\
    \
    Six species in family Eupleridae, endemic to the island of Madagascar, are also called "mongoose" and \
    were originally classified as a genus within the Herpestidae family, but genetic evidence has since shown \
    that they are more closely related to other Madagascar carnivorans in the family Eupleridae; they have, since \
    2006, been classified in the subfamily Galidiinae within Eupleridae.\
    \
    Herpestidae belong to the suborder Feliformia, together with the cat, hyena and civet families.';

  

  var getText = function(){
    return text;
  };

  return {
    fetch: fetch,
    getText: getText
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
  }

  return {
    set: set
  };

})

// process text to certain options
.factory('Process', function(){

  var process = function(text, length, callback){
    var len = text.length;
    var newText = [];
    var start = 0;
    var i = 0;
    
    while(i < len) {
      newText.push(text.slice(start, i));
      start = i;
      i += length;
    }

    newText.push(text.slice(start, i));

    callback(newText);
  };

  return {
    process: process
  };
})



