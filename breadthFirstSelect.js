/* INSTRUCTIONS
--------------
Implement a breadth-first method on a tree class.

BFSelect accepts a filter function, calls that function on each of the nodes
in Breadth-First order, and returns a flat array of node values of the tree
for which the filter returns true.

Example:
--------
var root1 = new Tree(1);
var branch2 = root1.addChild(2);
var branch3 = root1.addChild(3);
var leaf4 = branch2.addChild(4);
var leaf5 = branch2.addChild(5);
var leaf6 = branch3.addChild(6);
var leaf7 = branch3.addChild(7);

root1.BFSelect(function (value, depth) {
  return value % 2;
}) //=> [1, 3, 5, 7]

root1.BFSelect(function (value, depth) {
  return depth === 1;
}) //=> [2, 3] */

// HELPERS
var Queue = function() {
  var storage = [];

  this.enqueue = function(item) {
    storage.push(item);
  };

  this.dequeue = function() {
    return storage.shift();
  };
};

// Given tree methods
var Tree = function(value){
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
  * remove an immediate child
  */
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error('That node is not an immediate child of this tree');
  }
};

// ------SOLVE BELOW HERE-------
Tree.prototype.BFSelect = function(filter) {
  var result = [];

  function queueNodes(node, depth) {
    var queue = [];
    for (var i = 0; i < node.length; i++) {
      console.log('value: ', node[i].value, 'depth: ', depth);
      if (filter(node[i].value, depth)) {
        result.push(node[i].value);
      }
      for (var j = 0; j < node[i].children.length; j++) {
        queue.push(node[i].children[j]);
      }
    }
    if (queue.length) {
      queueNodes(queue, depth + 1);
    } else {
      return;
    }
  }
  queueNodes([this], 0);
  return result;
};
