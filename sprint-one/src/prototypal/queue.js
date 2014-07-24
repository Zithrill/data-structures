var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.stackSize = 0;
  obj.frontOfQueue = 0;
  obj.backOfQueue = 0;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.backOfQueue] = value;
  this.backOfQueue++;
  this.stackSize++;
};

queueMethods.dequeue = function() {
  if( this.stackSize > 0 ) {
    var result = this.storage[this.frontOfQueue];
    this.stackSize--;

    delete this.storage[this.frontOfQueue];
    this.frontOfQueue++;
    return result;
  }
};

queueMethods.size = function() {
  return this.stackSize;
};
