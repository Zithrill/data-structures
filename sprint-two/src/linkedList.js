var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.size = 0;

  list.addToTail = function(value){
    //make a new node
    var newNode = makeNode(value);
    //if calling node has no head set the newNode to the head
    if(this.head === null) {
      this.head = newNode;
    } else {
      //store the old tail so we can set the newNode to the tail
      //and set the next value of that node to the NewNode
      var oldNode = this.tail;
      oldNode.next = newNode;
    }
    //no matter what always set the new node to the tail
    this.tail = newNode;
  };

  list.removeHead = function(){
    //Store the old head so we can get values out of it later
    var formerHead = this.head;
    //check if there was only one node in the list
    if(formerHead.next === null){
      this.tail = null;
    } else{
      //if there was another node in the list set the next one as the new head
      this.head = formerHead.next;
    }
    //return the value of the old head
    return formerHead.value;
  };

  list.contains = function(target){
    var node = this.head;
    // While there are linked nodes, check to see if those nodes value matches target
    while(node.next !== null){
      if(node.value === target){
        return true;
      }
      // Set current node to next node for the while loop
      node = node.next;
    }
    // If there are no more linked nodes, check to see if the current nodes value matches target
    if(node.next === null) {
      if(node.value === target){
        return true;
      }
    }
    // If no matches are found, return false
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
