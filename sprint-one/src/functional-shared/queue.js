var makeQueue = function(){
  var someInstance = {};

  someInstance.storage = {};
  someInstance.stackSize = 0;
  someInstance.frontOfQueue = 0;
  someInstance.backOfQueue = 0;

  someInstance.enqueue = queueMethods.enqueue;
  someInstance.dequeue = queueMethods.dequeue;
  someInstance.size = queueMethods.size;

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.backOfQueue] = value;
  this.backOfQueue++;
  this.stackSize++;
};

queueMethods.dequeue = function(){
  if(this.stackSize > 0){
    var result = this.storage[this.frontOfQueue];
    delete this.storage[this.frontOfQueue];
    this.stackSize--;
    this.frontOfQueue++;
    return result;
  }
};

queueMethods.size = function(){
  return this.stackSize;
};


