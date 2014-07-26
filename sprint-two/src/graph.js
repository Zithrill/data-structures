var Graph = function(){
  this.edges = {};
  this.value = null;
};

Graph.prototype.addNode = function(newNode, toNode){
  //debugger;
  // create a new node with new Constructor
  var node = new Graph();
  node.value = newNode;
  // place link to new node into an array to refrence later
  if(this.edges.length === 1 ){
    node.edges = this.edges;
    //addEdge()
  }
  this.edges[newNode] = node;
  // if toNode provided set edge on newNode and toNode
  var nodeToModify = this.edges[toNode];
  if(nodeToModify){
    this.addEdge(node, nodeToModify);
  }
};

Graph.prototype.contains = function(node){
  //check our refrence array to see if a node exists
    //return true or false
  return this.edges[node] ? true : false;
  // return this.edges[node] && true;
};

Graph.prototype.removeNode = function(node){
  //lookup node location using refrence array
  var nodeToModify = this.edges[node];
  if(nodeToModify){
        //store node edges
    var edgesToRemove = nodeToModify.edges;
    //for each edge visit node and break link with node being removed
    for(var i = 0; i < edgesToRemove.length; i++){
      delete nodeToModify.edges[i].edges[node];
      //Check if severed node will be orphaned
        //delete node if orphaned
      if(nodeToModify.edges[i].edges.length === 0){
        delete nodeToModify.edges[i];
      }
    }
    delete this.edges[node];
  }


  //Delete node from memory
};

Graph.prototype.getEdge = function(fromNode, toNode){
  debugger;
  //lookup fromNode in refrence array
    //store location
  //lookup toNode in refrence array
    //store location
  //check edges in fromNode for link to toNode
};

Graph.prototype.addEdge = function(fromNode, toNode){
  //lookup fromNode in refrence array
    //store location
  //lookup toNode in refrence array
    //store location
  //add edge to fromNode
  //add edge to toNode
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  //lookup fromNode in refrence array
    //store location
  //lookup toNode in refrence array
    //store location
  //delete edge from fromNode
  //delete edge from toNode
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
