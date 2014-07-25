var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(!this._storage[item]){
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item){
  return this._storage[item] === item;
};

setPrototype.remove = function(item){
  delete this._storage[item];
};


// var myRevealingModule = (function () {
//   var privateVar = "Ben Cherry",
//       publicVar  = "Hey there!";

//   function privateFunction() {
//       console.log( "Name:" + privateVar );
//   }

//   function publicSetName( strName ) {
//       privateVar = strName;
//   }


//   // Reveal public pointers to
//   // private functions and properties

//   return {
//       setName: publicSetName,
//       greeting: publicVar
//   };

// })();


/*
 * Complexity: What is the time complexity of the above functions?
 */
// var set0 = makeSet();
// var set1 = makeSet();

// set = {
//   _storage: undefined;
//   add: function() {},
//   contains: function() {},
//   remove: function() {}
// };
