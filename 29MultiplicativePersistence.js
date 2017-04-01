/* Have the function MultiplicativePersistence(num) take the num parameter being passed which will always be a positive integer and return its multiplicative persistence which is the number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. */

function MultiplicativePersistence(num) {
  var count = 0;

  while (num >= 10) {
    count++;
    num = num.toString().split("").reduce(function(prevVal, currVal) {
      return parseInt(prevVal) * parseInt(currVal);
    });
  }
  return count;
};

console.log(MultiplicativePersistence(39));
