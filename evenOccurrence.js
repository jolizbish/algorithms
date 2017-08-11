/*INSTRUCTIONS
--------------
Find the first item that occurs an even number of times in an array. Remember
to handle multiple even-occurrence items and return the first one.
Return null if there are no even-occurrence items.*/

// Initial solutions:
function evenOccurrence (arr) {
  var resultsObj = {};
  for (var item of arr) {
    if (item in resultsObj) {
      resultsObj[item]++;
    } else {
      resultsObj[item] = 1;
    }
  }
  for (var item in resultsObj) {
    if (resultsObj[item] % 2 === 0) {
      return isNaN(parseInt(item)) ? item : parseInt(item);
    }
  }
  return null;
}

// Solution using forEach
function evenOccurrence (arr) {
  var results = {};
  arr.forEach(function(el) {
    !results[el] ? results[el] = 1 : results[el]++;
  });
  for (var item of arr) {
    if (results[item] % 2 === 0) {
      return item;
    }
  }
  return null;
}
