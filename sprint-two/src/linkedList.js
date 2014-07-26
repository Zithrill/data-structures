var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(this.head === null) {
      this.head = newNode;
    } else {
      var oldNode = this.tail;
      oldNode.next = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function(){
    var formerHead = this.head;
    this.head = null;
    if(formerHead.next === null){
      this.tail = null;
    } else{
      this.head = formerHead.next;
    }
    return formerHead.value;
  };

  list.contains = function(target){
    var node = this.head;
    while(node.next !== null){
      if(node.value === target){
        return true;
      }
      node = node.next;
    }
    if(node.next === null) {
      if(node.value === target){
        return true;
      }
    }
    return false;
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
