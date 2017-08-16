/* INSTRUCTIONS
---------------
Implement a map method on this Tree class.

Map accepts a mapping function as its only argument. It traverses the tree,
passing each node’s value into the mapping function, and generates a new tree
containing the results.

So map should return a tree with the same structure, and different values, but
it should NOT modify the tree that was passed in. */

var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function (child) {
  if (! child ||  ! (child instanceof Tree)){
    child = new Tree(child);
  }

  if (! this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index,1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};

// Initial solution
Tree.prototype.map = function (callback) {
  var mappedTree = function(node) {
    var newBranch = new Tree(callback(node.value));
    for (var i= 0; i < node.children.length; i++) {
      newBranch.addChild(mappedTree(node.children[i]));
    }
    return newBranch;
  }
  return mappedTree(this);
};

// Refactored solution
Tree.prototype.map = function(cb) {
  function mapTree(node) {
    var newBranch = new Tree(cb(node.value));
    node.children.forEach(function(child) {
      newBranch.addChild(mapTree(child));
    })
    return newBranch;
  }
  return mapTree(this);
}
