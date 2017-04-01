/* Have the function CountingMinutesI(str) take the str parameter being passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. */

function CountingMinutesI(str) { // str = "1:00am-11:00am".

    var timeArray = str.split("-"); // split string into array that splits elements with hyphen in-between.
    var startTime = timeArray[0]; // start time is first element in timeArray ("1:00am").
    var endTime = timeArray[1]; // end time is second element in array ("11:00am").
    var startTimeArr = startTime.split(":"); // split startTime into elements with
                                             // colon in-between ("1", "00am")
    var startTimeHour = parseInt(startTimeArr[0]);// convert 1st element in startTimeArr from string to integer

    var startTimeMinute = parseInt(startTimeArr[1].replace(/[^0-9]/g, "")); // replace all non-integers and
                                                                            // convert 2nd element in
                                                                            // starttimeArr to an integer.
    var startTimeAMPM = startTimeArr[1].replace(/[^a-z]/gi, ""); // Replace all non-alpha chars
                                                                 // and place them (am/pm) into starttimeAMPM.
                          // We've successfully seperated our startTime array elements into variables.
                          // And now we do the same to our endTime array.
    var endTimeArr = endTime.split(":");
    var endTimeHour = parseInt(endTimeArr[0]);
    var endTimeMinute = parseInt(endTimeArr[1].replace(/[^0-9]/g, ""));
    var endTimeAMPM = endTimeArr[1].replace(/[^a-z]/gi, "");

    if ((startTimeHour !== 12) && (startTimeAMPM === "pm")) { // Convert startTimeHour to 24 hr time by
                                                              // adding 12. (Ex: "4:00pm" --> "16:00pm")
        startTimeHour += 12;
    }
    if ((endTimeHour !== 12) && (endTimeAMPM === "pm")) { // Do the same for endTimeHour.
        endTimeHour += 12;
    }
    if ((startTimeHour === 12) && (startTimeAMPM === "am")) { // Convert startTimeHour to 24 hr time again
                                                              // (Ex: "12:00am" --> "00:00am").
        startTimeHour -= 12;
    }
    if ((endTimeHour === 12) && (endTimeAMPM === "am")) { // Do same for endTimeHour.
        endTimeHour -= 12;
    }

    if ((startTimeHour > endTimeHour) || ((startTimeHour === endTimeHour) && (startTimeMinute > endTimeMinute))) {
        return (1440 + ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute));
    } else {
        return ((endTimeHour - startTimeHour) * 60) + (endTimeMinute - startTimeMinute);
    }
};
console.log(CountingMinutesI("1:00am-11:10am"));
var timeArrray = ["1:00am", "11:00am"];
var startTyme = timeArrray[0];
console.log("1:00am".split(":"));
console.log(parseInt("3"));
