'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  for ( let i = 0; i <= 1000; i+=3){
    if ( i % 5 === 0 || i % 3 === 0){
      sum += i
    }
  }
  return sum;
}
console.log(sumMultiples3Or5Below1000())

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  for ( let i = 1; i <= z; i++) {
    if ( i % x === 0 || i % y === 0) {
      sum +=
    }
  }
  return sum;
}
//==========================================raph==================================

///////////////////////////////////
//        ** Section 2 **        //
//     Mathematical Approach     //
///////////////////////////////////

// Some formulas first:

// To find the sum of the first n positive integers:
// n*(n+1)/2

// To find sum of the first n multiples of k:
// k * ( n*(n+1)/2 )

// To count the number of multiples of number x in range y
// y/x

function multiplesOfXOrYMathematical(num1, num2, range) {
  // ** STEP 1: Use formula to count multiples of num1 and num2 in range
  const multiplesOfNum1 = Math.floor((range - 1) / num1);
  const multiplesOfNum2 = Math.floor((range - 1) / num2);

  // ** STEP 2: Find lcm & count multiples of lcm in range (avoid duplicates)
  const lcm = leastCommonMultiple(num1, num2);
  const multiplesOfLCM = Math.floor((range - 1) / lcm);

  // ** STEP 3: Sum multiples of num1 & num2, subtract sum multiples of lcm
  const result =
    (num1 * multiplesOfNum1 * (multiplesOfNum1 + 1)) / 2 +
    (num2 * multiplesOfNum2 * (multiplesOfNum2 + 1)) / 2 -
    (lcm * multiplesOfLCM * (multiplesOfLCM + 1)) / 2;

  return result;
}

// Helper function to return least common multiple of two numbers
function leastCommonMultiple(a, b) {
  return parseFloat((a * b) / greatestCommonDivisor(a, b));
}

// Helper function for leastCommonMultiple: returns greatest common divisor (uses Euclid's Algorithm)
function greatestCommonDivisor(a, b) {
  if (b === 0) return a;
  let greater = Math.max(a);
  let smaller = Math.min(b);
  return greatestCommonDivisor(smaller, greater % smaller);
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
