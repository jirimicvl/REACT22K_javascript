"use strict";

/**
Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array.
Otherwise, it should return undefined.

/**
 * @param {number[]} years
 * @param {number} searchYear
 */
function getYear(years, searchYear) {
  let result = years.filter(function filterYear(year) {
    if (searchYear === year) {
      return searchYear;
    } else {
      return null;
    }
  });

  return result;
}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined
