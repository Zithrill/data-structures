var Graph = function(){
  this.master = {};
  this.edges = null;
  this.value = null;
};

Graph.prototype.addNode = function(newNode, toNode){
  //debugger;
  // create a new node with new Constructor
  var node = new Graph();
  node.value = newNode;
  // place link to new node into an array to refrence later
  node.edges = {};
  this.master[newNode] = node;
  var masterKeys =Object.keys(this.master);
  // if this is the first node created its ok to be on its own
  if(masterKeys.length === 1) {
    this.edges = {};
    this.edges[newNode] = node;
  }
  else if(masterKeys.length === 2){
    var firstNode = masterKeys[0];
    this.addEdge(newNode, firstNode );
  }
  //if node 3+ and toNode is defined and exists link newNode to toNode
  else if(masterKeys.length > 2 && toNode && this.contains(toNode)) {
    this.addEdge(newNode, toNode);
  }
  //if this is node #3+ and toNode dose NOT exist throw out this node
  else{
    delete node;
    delete this.master[newNode];
  }
};

Graph.prototype.contains = function(node){
  //check our refrence array to see if a node exists
    //return true or false
  return this.master[node] ? true : false;
};

Graph.prototype.removeNode = function(node){
  //lookup node location using refrence array
  var nodeToDelete = this.master[node];
  if(nodeToDelete){
    //store node edges
    var edgesToRemove = nodeToDelete.edges;
    //for each edge visit node and break link with node being removed
    for(var i = 0; i < edgesToRemove.length; i++){
      delete nodeToDelete.edges[i].edges[node];
      //Check if severed node will be orphaned
        //delete node if orphaned
      if(nodeToDelete.edges[i].edges.length === 0){
        delete nodeToDelete.edges[i];
      }
    }
    delete this.edges[node];
    delete this.master[node];
  }


  //Delete node from memory
};

Graph.prototype.getEdge = function(fromNode, toNode){
  return this.master[fromNode].edges[toNode] ? true : false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.master[fromNode].edges[toNode] = this.master[toNode];
  this.master[toNode].edges[fromNode] = this.master[fromNode];
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var startingNode = this.master[fromNode];
  var endingNode = this.master[toNode];

  delete startingNode.edges[toNode];
  delete endingNode.edges[fromNode];
  if(Object.keys(startingNode.edges).length === 0){
    this.removeNode(fromNode);
  }
  if(Object.keys(endingNode.edges).length === 0){
    this.removeNode(toNode);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
