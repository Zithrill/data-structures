var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
  var hashValue = getIndexBelowMaxForKey(key, this._limit);
  var storageNode = [key,value];
  var currentItem = this._storage.get(hashValue);
  if(Array.isArray(currentItem)){
    currentItem.push(storageNode);
  }else {
    this._storage.set(hashValue, [storageNode]);
  }
};

HashTable.prototype.retrieve = function(key){
  var hashValue = getIndexBelowMaxForKey(key, this._limit);
  var currentItem = this._storage.get(hashValue);
  var isAnArray = Array.isArray(currentItem);
  if(isAnArray){
    for(var bucket = 0; bucket < currentItem.length; bucket++ ){
      if(currentItem[bucket][0] === key){
        return currentItem[bucket][1];
      }
    }
  }
  return null;
};

HashTable.prototype.remove = function(key){
  var hashValue = getIndexBelowMaxForKey(key, this._limit);
  var currentItem = this._storage.get(hashValue);
  var isAnArray = Array.isArray(currentItem);
  if(isAnArray){
    for(var bucket = 0; bucket < currentItem.length; bucket++) {
      if(currentItem[bucket][0] === key) {
        return currentItem.splice(bucket, 1);
      }
    }
  }
};
