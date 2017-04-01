/* Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. */

function LetterCountI(str) { // str = "Hello Apple Pie"
  var words = str.split(" ");
  var highestCount = 0;
  var largestIndex;

  for (var i = 0; i < words.length; i++) {
    var word = words[i].split("").sort();
    var count = 0;

    for (var j = 0; j < word.length - 1; j++) {
      if (word[j] == word[j+1]) {
        count++;
      }
    }
    if (count > highestCount) {
      highestCount = count;
      largestIndex = i;
    }
  }

  return highestCount > 0 ? words[largestIndex] : -1;
};


console.log(LetterCountI("Today, is the greatest daay ever!"));


// Using regex:
function LetterCountII(str) {
  var words = str.split(" ");
  var maxCount = 0;
  var maxWord = "";
  for(var i = 0; i < words.length; i++) {
    var hi = words[i].match(/([a-z])(?=.*\1)/ig);
    if (hi != null) {
      if (hi.length > maxCount) {
        maxCount = hi.length;
        maxWord = words[i];
      }
    }
  }
  return maxWord || -1;
};


function LetterCountIII(str) {
  var words = str.split(" ");
  var highestCount = 0;
  var largestIndex;

  for (var i = 0; i < words.length; i++) {
    var word = words[i].split("").sort();
    var count = 0;

    for (var j = 0; j < word.length - 1; j++) {
      if (word[j] == word[j+1]) {
        count++;
      }
    }
    if (count > highestCount) {
      highestCount = count;
      largestIndex = i;
    }
  }

  return highestCount > 0 ? words[largestIndex] : -1;
};
