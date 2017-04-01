/* Have the function Palindrome(str) take the str parameter being passed and return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the string. */

function Palindrome(str) {
  str = str.replace(/\s/g, ""); // Remove whitespace characters with "\s". Insert new substring with (, "").
  var pal = str.split("").reverse().join(""); // Create pal variable and set equal to our initial string but... split into an array of individual characters, then reverse the characters, then join back into a string.
  return str == pal; // Return truth value comparing the two.
};
console.log(Palindrome("never odd or even"));
