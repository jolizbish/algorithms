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

// better solution
function characterFrequency (string) {
  var memo = {};
  for (var letter of string) {
    if (memo[letter] === undefined) {
      memo[letter] = 1;
    } else {
      memo[letter]++;
    }
  }

  return Object
           .keys(memo)
           .map(key => [key, memo[key]])
           .sort((a, b) => {
             var valueSort = b[1] - a[1];
             return valueSort === 0 ? a[0].localeCompare(b[0]) : valueSort;
           });
}
