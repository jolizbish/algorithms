/*INSTRUCTIONS
--------------
Make an array method that can return whether or not a context array is a
subset of an input array. To simplify the problem, you can assume that both
arrays will contain only strings.*/

// Initial solutions:
Array.prototype.isSubsetOf = function(array) {
  var result = true;
  for (var i = 0; i < this.length; i++) {
    if (!array.includes(this[i])) {
      result = false;
    }
  }
  return result;
};

// My refactored solution
Array.prototype.isSubsetOf = function(array) {
  for (var i = 0; i < this.length; i++) {
    if (!array.includes(this[i])) {
      return false;
    }
  }
  return true;
}

//Solution using .filter()
Array.prototype.isSubsetOf = function(array) {
  return !this.filter((el) => { return !array.includes(el)}).length;
}

  /* returns the opposite equivalent boolean of the length of the filtered
  array-- if the array has a length, returns false, else if length === 0,
  returns true */


// Solution using .reduce()

Array.prototype.isSubsetOf = function(array) {
  return this.reduce((cur, next) => cur && array.includes(next), true);
}
  /* reduce starts at true, turns false if the array doesn't include the
  next character. returns boolean value at end of reduce. */
