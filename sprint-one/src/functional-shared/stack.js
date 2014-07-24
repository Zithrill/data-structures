var makeStack = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.stackSize = 0;

  someInstance.push = stackMethods.push;
  someInstance.pop = stackMethods.pop;
  someInstance.size = stackMethods.checkSize;

  return someInstance;
};

var stackMethods = {
  push: function(value){
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },

  pop: function(){
    if( this.stackSize > 0 ) {
      this.stackSize--;
    }

    var item = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return item;
  },

  checkSize: function(){
    return this.stackSize;
  }
};
