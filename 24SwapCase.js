/* Have the function SwapCase(str) take the str parameter and swap the case of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are. */

function SwapCase(str) {
  var arr = str.split("");

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].match(/[A-Z]/)) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].toUpperCase();
    }
  }
  return arr.join("");
};
console.log(SwapCaseII("Hello World!!"));


// Using map function:
function SwapCaseII(str) {
  return str.split("").map(function(value, index, self) {
    if (value == value.toUpperCase()) { return value.toLowerCase(); }
    return value.toUpperCase();
  }).join("");
};
