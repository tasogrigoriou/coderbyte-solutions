/* Have the function DashInsert(str) insert dashes ('-') between each two odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.  */

function DashInsert(str) {
  var arr = str.split("");

  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === 1 && arr[i+1] % 2 === 1) {
      arr.splice(i+1, 0, "-");
    }
  }
  return arr.join("");
};
console.log(DashInsert("454793"));
