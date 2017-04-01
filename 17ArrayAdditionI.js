/* Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. */

function ArrayAdditionI(arr) {
 arr = arr.sort(function(a,b) {return a - b;});
 var largest = arr.pop();
 function recursion(target, array) {
   if (array.length === 0) {
     return target === 0;
   }
   var n = array[0];
   array = array.slice(1);
   return recursion(target, array) || recursion(target - n, array);
 }
 return recursion(largest, arr);
};

console.log(ArrayAdditionI([4,6,23,10,1,3]));


 function ArrayAdditionII(arr) {
    var max = arr.sort(function(a,b) {return a - b;}).pop();
    if (sum(arr) == max) {return true;}
    return removeOneLayer(arr, max);
};
function removeOneLayer(temp, max) {
    if (temp.length <= 0) {return false;}
    for (var i = 0; i < temp.length; i++) {
        var temp2 = temp.slice(0);
        temp2.splice(i,1);
        if (sum(temp2) == max) {return true;}
        removeOneLayer(temp2, max);
    }
    return false;
};
function sum(arr) {
    return eval(arr.join("+"));
};
