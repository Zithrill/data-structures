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
  var childrenLength = this.children.length;
  this.children[childrenLength] = makeTree(value);
};

treeMethods.contains = function(target){
  var result = false;
  if(this.value === target){
    result = true;
  }
  for(var i = 0; i < this.children.length; i++ ){
    var result = this.children[i].contains(target);
    if(result){
      break;
    }
  }
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
