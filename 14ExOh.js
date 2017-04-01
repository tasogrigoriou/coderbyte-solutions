/* Have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. */

function ExOh(str) {
  var countEx = 0;
  var countOh = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      countEx++;
    } else if (str[i] == "o") {
      countOh++;
    } // Else, do nothing.
  }
  return countEx == countOh; //Return the truth value of comparing the two.
};

// Using filter function:
function ExOhhh(str) {
  var arr = str.split("");
  var x = arr.filter(function(elem, index, self) {
    return elem == "x";
  });
  var o = arr.length - x.length;
  return x.length == o;
};
