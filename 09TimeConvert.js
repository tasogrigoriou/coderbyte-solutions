/* Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. */

function TimeConvert(num) {
  var hrs = Math.floor(num / 60); // Use Math.floor to round down to nearest whole integer which in this case represents number of hours.
  var mins = num % 60; // Use modulus operator to get remainder of num / 60 (the minutes).
  return hrs + ":" + mins; // return hours, a colon, then minutes.
};
console.log(TimeConvert(129));


// My version, including a "0" after the colon when the number of minutes is less than 10.
function TimeConvert(num) {
  var hrs = Math.floor(num / 60);
  var mins = num % 60;
  if (num % 60 < 10) {
    return hrs + ":" + "0" + mins;
  }
  return hrs + ":" + mins;
};
console.log(TimeConvert(130));
