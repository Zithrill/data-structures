var makeStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[stackSize] = value;
    stackSize++;
  };

  someInstance.pop = function(){
    if( stackSize > 0){
      stackSize--;
      var results = storage[stackSize];
      delete storage[stackSize];
      return results;
    }
  };

  someInstance.size = function(){
    return stackSize;
  };

  return someInstance;
};
