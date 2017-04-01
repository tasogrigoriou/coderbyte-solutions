/* Have the function MeanMode(arr) take the array of numbers stored in arr and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers, and will not contain more than one mode.
*/

function MeanMode(arr) { // arr = [5, 3, 3, 3, 1].

  var modeFreq = [];
  var mode = 0;
  var modeCount = 0;
  var mean = 0;
  var sum = 0;
  arr = arr.sort(function(a,b) { return a - b }); // NOW arr = [1, 3, 3, 3, 5].

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = "15".

    if (!modeFreq[arr[i]]) { // While looping thru arr, Check if the element appears in modeFreq array.
      modeFreq[arr[i]] = 1; // If it doesn't appear, set that element equal to 1.
    } else {  // If it doesn't equal null (there's already an element in place), then keep adding one to that element in modeFreq while we loop through our entire array.
      modeFreq[arr[i]]++;  // modeMap[arr[0]] = modeMap[1] = 1!
                            // modeMap[arr[1]] = modeMap[3] = 1
                            // modeMap[arr[2]] = modeMap[3] = 2
                            // modeMap[arr[3]] = modeMap[3] = 3!
                            // modeMap[arr[4]] = modeMap[5] = 1!
                            // modeMap now looks like this --> [0, 1, 0, 3, 0, 1]
    }
    if (modeFreq[arr[i]] > modeCount) { // Keep checking if each element in modeMap array has larger value.
      modeCount = modeFreq[arr[i]]; // And if it does, equate them (for loop will keep checking if statement).
      mode = arr[i]; // Equate the mode with the most frequently appearing element in original array.
    }
  }
  mean = sum / arr.length;

    return mean === mode ? 1 : 0;
};

console.log(MeanMode([5,3,3,3,1]));

function MeanModeI(arr) {

  var sum = arr.reduce(function(prev, curr) {
    return prev + curr;
  }, 0); // (, 0) for initial value to be 0 to callback.
  var mean = sum / arr.length;

  var count = [];
  arr.forEach(function(v) {
    var o = count[v] || {num: v, count: 0};
    o.count++;
    count[v] = o;
  });
  count.sort(function(a,b) { return b.count - a.count; });
  return mean == count[0].num ? 1 : 0;

};
