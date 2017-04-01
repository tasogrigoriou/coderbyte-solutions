/* Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. */

function LetterChanges(str) {

    // Set string to be lower case, just in case we get an input with non-vowel capital letters.
    str = str.toLowerCase();

    // Create string containing each letter in the alphabet.
    var alpha = "abcdefghijklmnopqrstuvwxyz";

    // Create new alphabet string moved one place over with capitalize vowels.
    var newAlpha = "bcdEfghIjklmnOpqrstUvwxyzA";

    // Initialize empty string to return final answer later.
    var newString = "";
    for (i = 0; i < str.length; i++) {

        // Use indexOf method to check if the character in the string we are currently looking at is contained in alpha (in other words, part of the alphabet).
        if (alpha.indexOf(str[i]) != -1) {

            // If the character we are looking it is contained in alpha, we use charAt method to add the converted character to our newAlpha string in the appropriate index. *** [charAt method returns specified character in a string] ***
            newString += newAlpha.charAt(alpha.indexOf(str[i]));
        } else {

            // If we don't find the character contained in alpha, we add it to our answer string, leaving any characters we don't want changed, untouched and in same index as they were in the input string.
            newString += str[i];
        }
    }
    return newString;
};
console.log(LetterChangess("WXYZABCD"));


function LetterChangess(str) {

  // Convert our input string to lowercase to avoid capitalized letters from non-vowels.
  str = str.toLowerCase();
  // Return our string, using replace method to replace all letters from "a-z" and create an anonymous function as our new substring.
  return str.replace(/[a-z]/g,function(c) {

    // Inside anonymous function, we create a new variable "next" that gets the charCode of each character in our new substring and moves them one place over in Unicode. "next" will be the next character in the alphabet from our new substring.
    var next = String.fromCharCode(c.charCodeAt() + 1);

    // Still inside function... we use test method to find a match between a regex (containing all vowels except y) and our "next" string. Regex.test returns a Boolean.
    if (next.match(/[aeiou]/g)) {
    //if (/[aeiou]/g.test(next)) {

      // If the test method finds a vowel in our "next" string, we convert that letter to uppercase.
      next = next.toUpperCase();
    }
    // Still inside anonymous function, we wish to return our "next" variable, which contains all characters moved over one place in alphabet... EXCEPT for the letter "z". We want to change the "z" character to "A" and we can not do this by adding one to its Unicode.
    // Therefore, we use the ternary operator to check if c = "z", and if it is, convert to "A".
    // Or else, return "next" character fromCharCode.
    return c == "z" ? "A" : next;

    // If you wish to use a normal if/else statement, this is how it would be done:
        /* if (c == "z") {
          next = "A";
        }
     return next; */
  });
}

function LetterChangesss(str) {

  var nextChar = str.toLowerCase().replace(/[a-z]/g, function(char) {
    return (char == "z") ? "A" : String.fromCharCode(char.charCodeAt() + 1);
  });

  var caps = nextChar.replace(/[aeiou]/g, function(vowel) {
    return vowel.toUpperCase();
  });

  return caps;
};
