/* Have the function PowersofTwo(num) take the num parameter being passed which will be an integer and return the string true if it's a power of two. If it's not return the string false. For example if the input is 16 then your program should return the string true but if the input is 22 then the output should be the string false. */

function PowersofTwo(num) {
  var x = num;   // x = 16:                // x = 22:

  while (x % 2 === 0) {
    x = x / 2;   // x = 16 / 2 = 8         // x = 22 / 2 = 11
                 // x = 8 / 2 = 4          // x = 11 / 2 = 5.5 now we stop since 5.5 % 2 != 0.
                 // x = 4 / 2 = 2
                 // x = 2 / 2 = 1
                 // x = 1 now so we stop
  }
  return x === 1 ? true : false;
};

console.log(PowersofTwo(16));
