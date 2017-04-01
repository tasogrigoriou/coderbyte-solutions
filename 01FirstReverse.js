/* Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. */

function FirstReverse(str) {
  var newString = ""; // initialize an empty string to store our answer in later.
  for (var i = str.length - 1; i >= 0; i--) { // use for loop iterating BACKWARDS to log each
                                              // character in string in reverse later.
    newString += str[i]; // log each element we look at while looping into newString one at a time.
  }
      return newString; // return our answer.
};

// Alternate solution:
function FirstReverse(str) {
  return str.split("").reverse().join(""); // Use built in methods on our string to...
                                           // FIRST: use .split("") to split our string into an array of individual characters (no spaces)
                                           // SECOND: use .reverse() to reverse our array in place (first element becomes last, vice-versa)
                                           // THIRD: use .join("") to join all elements in the array back into a string.
};
