/* Have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. */

function ABCheck(str) {
  str = str.toLowerCase();
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      if (str[i-4] === "b" || str[i+4] === "b") {
        return true;
      }
    }
  }
  return false;
};


// Using regex and .test method on strings:
function ABCheck(str) {
  var rightCheck = /a...b/; // Declare regex to match characters "a" and "b" that occur 3 letters apart.
  var leftCheck = /b...a/; // The use of "." matches (nearly) any character.
  return rightCheck.test(str) || leftCheck.test(str); // Return true (due to .test method being applied) if either of the two conditions are satisified (if there is a match in our input string). If not, return false.
};
console.log(ABCheck("bzzza"));
