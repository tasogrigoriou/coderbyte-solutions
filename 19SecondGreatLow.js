/* Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! */

function SecondGreatLow(arr) {
  arr = arr.sort(function(a,b) { return a - b; });

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      arr.splice(i+1, 1); // Remove the repeated element at i+1.
    }
  }
  if (arr.length < 2) {
    return arr[0] + " " + arr[0];
  } else if (arr.length == 2) {
    return arr[1] + " " + arr[0];
  } else {
    return arr[1] + " " + arr[arr.length - 2];
  }
};
console.log(SecondGreatLow([7,7,12,98,106]));

// Using filter function:
function SecondGreatLowI(arr) { // arr = [10, 5, 5, 20]

  // first we create a unique array by using the filter function
  // we check to see if the index of the current element in the array
  // is equal to the first index of the element, if so then add the
  // element to the new array
  var unique = arr.filter(function(elem, index, self) { // Essentially removes duplicate elements.
    return self.indexOf(elem) == index; // Only add elements to new unique array at first occurance (index)
  });
  var sorted = unique.sort(function(a,b) { return a - b });

  if (sorted.length < 2) {
    return sorted[0] + " " + sorted[0];
  } else {
    return sorted[1] + " " + sorted[sorted.length - 2];
  }
};
