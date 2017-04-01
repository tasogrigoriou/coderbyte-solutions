/* Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. */

function SimpleSymbols(str) {

  for (var i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/ig) != null) { // Check to see if the character we are looking at in our string is contained in the alphabet (case insensitive) using regex. _.match returns "null" if no match is found.
      if (str[i-1] != "+" || str[i+1] != "+") { // If it is, we check to see if either one of the two characters surrounding it are NOT "+".
        return false; // If they aren't, we return false.
    }
  }
}
    return true; // If all characters pass our tests, we return true.

};
console.log(SimpleSymbols("A+a+a+"));
