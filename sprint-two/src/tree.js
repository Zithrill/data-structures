var makeTree = function(valueIn){
  var newTree = {};
  newTree.value = valueIn;
  newTree.children = [];
  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};
var treeMethods = {};

treeMethods.addChild = function(value){
  //Creates a new child under children
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  //Default value is false
  var result = false;
  //Checks calling objects value for a match
  if(this.value === target){
    result = true;
  }
  //calls contains on each child contained in children
  for(var i = 0; i < this.children.length; i++ ){
    var result = this.children[i].contains(target);
    // if we get a true value from any child stop all recursion and return true
    if(result){
      break;
    }
  }
  //if no matching value is found return false ( our default value)
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
