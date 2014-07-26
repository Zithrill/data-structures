var makeBinarySearchTree = function(valueIn){
  var node = Object.create(nodeMethods);
  node.left = null;
  node.right = null;
  node.value = valueIn;
  return node;
};

var nodeMethods = {};

nodeMethods.insert = function(val){
  // Determines where to send the value
  if(val > this.value) {
    // Does value exists
    if(this.right) {
      // Recursively call insert on right object
      this.right.insert(val);
    } else {
      // Create a new node and store reference in right object
      this.right = makeBinarySearchTree(val);
    }
  } else {
    if(this.left) {
      this.left.insert(val);
    } else {
      this.left = makeBinarySearchTree(val);
    }
  }
};

nodeMethods.contains = function(val){
  var result = false;

  if(val === this.value) {
    return true;
  }

  // Checks to see if value should search left or right tree
  if(val > this.value) {
    result = this.right ? this.right.contains(val) : false;
  } else {
    result = this.left ? this.left.contains(val) : false;
  }

  return result;
};

nodeMethods.depthFirstLog = function(callback){
  // Invokes callback on the value on this object
  callback(this.value);

  // Recursively call the the callback on either left or right object
  // depending on low/high value
  if(this.left){
    this.left.depthFirstLog(callback);
  }
  if(this.right){
    this.right.depthFirstLog(callback);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
//  */
