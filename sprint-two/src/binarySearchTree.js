var makeBinarySearchTree = function(valueIn){
  var node = Object.create(nodeMethods);
  node.left = null;
  node.right = null;
  node.value = valueIn;
  return node;
};

var nodeMethods = {};

nodeMethods.insert = function(val){
  //Somehow check to see if values exist
  if(val > this.value) {
    if(this.right) {
      this.right.insert(val);
    } else {
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

  if(val > this.value) {
    result = this.right ? this.right.contains(val) : false;
  } else {
    result = this.left ? this.left.contains(val) : false;
  }

  return result;
};

nodeMethods.depthFirstLog = function(callback){
  callback(this.value);

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
// var myNode = makeBinarySearchTree(5);
// // =>
// node = {
//   lower: {}
//   higher: {}
//   val: val
//   metods:
// }
// myNode.insert(3);
// myNode.insert(6);
// myNode.insert(4);
// myNode.contains(4);
