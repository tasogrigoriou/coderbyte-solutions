/* Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other then return the string -1. */

function CheckNums(num1,num2) {
  if (num1 == num2) {
    return "-1";
  } else {
    return num1 < num2;
  }
};

// Using ternary operator (nested version):

function CheckNumsz(num1,num2) {
  return (num1 == num2) ? "-1" : (num1 < num2) ? true : false;
};
