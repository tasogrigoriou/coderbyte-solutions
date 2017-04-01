/* Have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. */

function NumberAddition(str) {

  var arr = str.match(/\d+/g); // Create new array by matching only digits (\d), and include a (+) in regex to only match the previous expression 1 or more times (to get rid of string chars).
  var total = 0;

  for (i = 0; i < arr.length; i++) {
    total += parseInt(arr[i]); // add up all the numbers elements. (use parseInt to convert to integer first).
  }
  return total;
};
console.log(NumberAdditionI("55Hello 5"));
console.log("55Hello 5".match(/[0-9]+/g));
console.log("55Hello 5".match(/\d+/g));



// Using reduce function:
function NumberAdditionI(str) {

  var nums = str.match(/\d+/g);
  return (nums == null) ? // check if there are any numbers first.
    0 : nums.reduce(function(prevVal, currVal) {return parseInt(prevVal) + parseInt(currVal);}, 0);
}; // Need to parse both values to first convert them to integers, THEN to add them all up.
