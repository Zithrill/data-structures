var Stack = function() {
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.pop = function(){
  if( this.stackSize > 0){
    this.stackSize--;
    var result = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return result;
  }
};
Stack.prototype.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};
Stack.prototype.size = function(){
  return this.stackSize;
};


