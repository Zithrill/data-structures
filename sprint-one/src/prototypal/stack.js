var makeStack = function() {
  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.stackSize = 0;
  return obj;
};

var stackMethods = {};

stackMethods.pop = function(){
  if( this.stackSize > 0){
    this.stackSize--;
    var result = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return result;
  }
};
stackMethods.push = function(value){
  this.storage[this.stackSize] = value;
  this.stackSize++;
};
stackMethods.size = function(){
  return this.stackSize;
};
