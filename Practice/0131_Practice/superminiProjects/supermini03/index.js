"use strict";

/**
Complete the function isPromoCodeValid such that it returns true when the promo code is valid 
and false otherwise.
/**
 * @param {boolean} code
 */

const isPromoCodeValid = (code) =>
  code.trim().length >= 5 && code.trim().length < 10;

// Sample usage - do not modify
const code = document.querySelector("#promo-code");

code.addEventListener("keyup", () => {
  let result = isPromoCodeValid(code.value);
  if (result) {
    console.log(`Your code works`);
    code.classList.remove("error");
    code.classList.add("success");
  } else {
    code.classList.add("error");
    code.classList.remove("success");
  }
});
