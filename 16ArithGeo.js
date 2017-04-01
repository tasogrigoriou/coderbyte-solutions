/* Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. */

function ArithGeo(arr) {
  var arrAri = []; // Initialize array to contain the difference between the elements in our array.
  var arrGeo = []; // Initialize array to contain the quotient between the elements in our array.
  var ariTruth = true; // Initialize variable to see whether or not the differences are true (equal).
  var geoTruth = true; // Initialize variable to see whether or not the quotients are true (equal).

  for (var i = 0; i < arr.length - 1; i++) { // Loop thru array length (-1 due to us looking one element ahead)
    arrAri.push(arr[i+1] - arr[i]); // Push value of difference of elements from our array into arrAri.
    arrGeo.push(arr[i+1] / arr[i]); // Push value of quotient of elements from our array into arrGeo.

    for (var j = 0; j < arrAri.length - 1; j++) { // Loop thru our difference array.
      if (arrAri[j] != arrAri[j+1]) { // If each element in arrAri aren't equal, we set ariTruth to false.
        ariTruth = false;
      }
      if (arrGeo[j] != arrGeo[j+1]) { // If each element in arrGeo aren't equal, we set geoTruth to false.
        geoTruth = false;
      }
    }
  } // Want to exit our for loop now.
    if (ariTruth == true) { // If ariTruth is true, we return "Arithmetic".
      return "Arithmetic";
    } else if (geoTruth == true) { // If ariTruth is false and geoTruth is true, we return "Geometric".
      return "Geometric";
    } else { // If neither are true, we return "-1".
      return "-1";
    }
};
console.log(ArithGeo([2,6,18,54]));
