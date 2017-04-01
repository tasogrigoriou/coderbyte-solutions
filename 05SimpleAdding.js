/* Have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. */

function SimpleAdding(num) {
  var total = 0;
  for (var i = 1; i <= num; i++) {
    total += i;
  }
      return total;
};

// Recursive version
function SimpleAdding(num) {
  if (num == 1) {
    return 1;
  } else {
    return num + SimpleAdding(num - 1);
  }
};
