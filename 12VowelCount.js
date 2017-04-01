/* Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. */

function VowelCount(str) {
  var vowels = "aeiouAEIOU";
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) != -1) { // Use .indexOf method on strings to check if there is an occurance of any vowel present in our string that is being iterated. *** Note: if there are zero instances where a vowel occurs, .indexOf returns -1.
      count++; // If there is a vowel present at the current character we are looking at in our string being iterated, we add 1 to count.
    }
  }
  return count;
};
   console.log(VowelCountt("baefgh"));


// Better Way of solving problem:

function VowelCountt(str) {
  return str.replace(/[^aeiou]/ig, "").length;
};
