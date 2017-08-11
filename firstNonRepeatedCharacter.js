/* INSTRUCTIONS
--------------

Given an arbitrary input string, return the first non-repeating
character. For strings with all repeats, return 'sorry'. */

// Initial solutions:

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
