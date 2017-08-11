/* INSTRUCTIONS
--------------

Given an arbitrary input string, return the first non-repeating
character. For strings with all repeats, return 'sorry'. */

// Initial solution:
function firstNonRepeatedCharacter(str) {
  var strArr = str.split('');
  var results = {};
  for (var char of strArr) {
    !results[char] ? results[char] = 1 : results[char]++;
  }
  for (var i of strArr) {
    if (results[i] === 1) {
      return i;
    }
  }
  return 'sorry';
}



// My refactored solution:
function firstNonRepeatedCharacter (string) {
  var strArr = string.split('');
  for (let char of strArr) {
    var charList = strArr.filter(el => el === char);
    if (charList.length === 1) {
      return char;
    }
  }
  return 'sorry';
}
