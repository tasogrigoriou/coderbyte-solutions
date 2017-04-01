/* Have the function OffLineMinimum(strArr) take the strArr parameter being passed which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your program should return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5. */

function OffLineMinimum(strArr) {
  var myArr = [];
  var finalArr = [];

  for (var i = 0; i < strArr.length; i++) {
    if (strArr[i].match(/\d/g)) { // if element in array is a digit [0-9]...
      myArr.push(strArr[i]); // push that element onto myArr.
    }
    else { // if element in array is NOT a digit (an "E")...
      myArr.sort(function(a,b) { return a - b; }); // sort myArr from least to greatest, which will only be numbers.
      finalArr.push(myArr.shift()); // take first element from myArr (using shift) and push onto finalArr.
    }
  }
  return finalArr.join(","); // Return our finalArr, converting it from array elements back into a string with commas between each number.
};

console.log(OffLineMinimum(["5","4","6","E","1","7","E","E","3","2"]));
