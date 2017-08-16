/*INSTRUCTIONS
--------------
Implement the countLeaves function in this Tree class.

A leaf node is any node in the tree that has no children. countLeaves should
traverse the tree, and return the number of leaf nodes the tree contains.

Illustration of a tree with three leaves:

      * <- root
     / \
    *    * <- leaf
   / \
  *   * <- leaf
 /
* <- leaf
Example usage:
---------------
var root = new Tree();
root.countLeaves(); // 1
root.addChild(new Tree());
root.countLeaves(); // still 1
root.addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].addChild(new Tree());
root.children[0].children[0].addChild(new Tree());
root.countLeaves(); // 3
*/

// Given: tree methods
var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  return child;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    this.children.splice(index,1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};

// ------SOLVE BELOW HERE-------

Tree.prototype.countLeaves = function () {
  if (!this.children.length) {
    return 1;
  } else {
    return this.children.reduce(function(current, next) {
      return current + next.countLeaves();
    }, 0);
  }
}
