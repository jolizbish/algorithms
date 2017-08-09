// Initial solution
function characterFrequency (string) {
  var resultsObj = {};
  for (var char of string) {
    if (char in resultsObj) {
      resultsObj[char]++;
    } else {
      resultsObj[char] = 1;
    }
  }
  var results = [];
  for (var letter in resultsObj) {
    results.push([letter, resultsObj[letter]]);
  }
  results.sort(function(a, b) {
    if (b[1] === a[1]) {
      return a[0].charCodeAt() - b[0].charCodeAt();
    } else {
      return b[1] - a[1];
    }
  });

  return results;
}
