/* Using the JavaScript language, have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. */

function LetterCapitalize(str) {
  var words = str.split(" ");
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
  }
      return words.join(" ");
};


function LetterCapitalized(str) {

  str = str.toLowerCase();
  // Return our string, using a regex to replace lowercase letters ("[a-z]") which follow a word boundary ("\b"), globally ("g") with the captured pattern converted to uppercase.
  return str.replace(/\b[a-z]/g, function(txt){
    return txt.toUpperCase();
  });
};

console.log(LetterCapitalize("bLAHHADHUSDh bee"));
