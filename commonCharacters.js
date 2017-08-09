// Initial solution
var commonCharacters = function(string1, string2){
  var resultsArr = [];
  var string1Arr = string1.split('');
  for (var i = 0; i < string1Arr.length; i++) {
    var currentResults = resultsArr.join('');
    if (string2.includes(string1Arr[i]) && string1Arr[i] !== ' ') {
      resultsArr.push(string1Arr[i]);
    }
  }
  //concat string and use includes method
  str = '';
  for (var j = 0; j < resultsArr.length; j++) {
    if (!(str.includes(resultsArr[j]))) {
      str = str.concat(resultsArr[j]);
    }
  }
  return str;
};

// My refactored solution
function commonCharacters(str1, str2) {
  var result = '';
  for (var i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i]) && !result.includes(str1[i]) && str1[i] !== ' ') {
      result += str1[i];
    }
  }
  return result;
}

// shorter solution + explanation

var commonCharacters = function(str1, str2){
  //
  return str1.split('').reduce(function(cur, next) {
    //Ternary (sp?) statement: if str !contains next character AND current results !contains next character, concatenate
    // results array with next character, else return current array of results.
    return str2.indexOf(next) != -1 && cur.indexOf(next) == -1  && next !== ' ' ? cur.concat(next) : cur
  }, []).join(''); // join results into string
};
