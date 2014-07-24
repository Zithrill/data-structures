var Queue = function() {
  this.storage = {};
  this.stackSize = 0;
  this.frontOfQueue = 0;
  this.backOfQueue = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.backOfQueue] = value;
  this.backOfQueue++;
  this.stackSize++;
};

Queue.prototype.dequeue = function() {
  if( this.stackSize > 0 ) {
    var result = this.storage[this.frontOfQueue];
    this.stackSize--;

    delete this.storage[this.frontOfQueue];
    this.frontOfQueue++;
    return result;
  }
};

Queue.prototype.size = function() {
  return this.stackSize;
};
