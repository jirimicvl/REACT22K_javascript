"use strict";

/**
Complete the function sumPositiveNumbers such that it returns the sum of all positive numbers
from the numbers parameter it receives.

/**
 * @param {number[]} numbers
 */
function sumPositiveNumbers(numbers) {
  // Filters array for positive number && push positive number into an array

  let result = numbers.filter(function filterPositiveNumber(number) {
    return number > 0;
  });

  //In the new array, it is sum
  const sum = result.reduce(function (a, b) {
    return a + b;
  }, 0);

  return sum;
}

// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5
