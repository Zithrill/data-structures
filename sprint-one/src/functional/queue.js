var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var stackSize = 0;
  var frontOfQueue = 0;
  var backOfQueue = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[backOfQueue] = value;
    backOfQueue++;
    stackSize++;
  };

  someInstance.dequeue = function(){
    if(stackSize > 0){
      var result = storage[frontOfQueue];
      delete storage[frontOfQueue];
      stackSize--;
      frontOfQueue++;
      return result;
    }
  };

  someInstance.size = function(){
    return stackSize;
  };

  return someInstance;
};
