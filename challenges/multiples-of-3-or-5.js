'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let threeSum = 0, fiveSum = 0, fifteenSum = 0;
  for (let i = 0; i < 1000; i+=3) {
    threeSum += i;
  }
  for (let j = 0; j < 1000; j+=5) {
    fiveSum += j;
  }
  for (let k = 0; k < 1000; k+=15) {
    fifteenSum += k;
  }  
  sum = threeSum + fiveSum - fifteenSum;
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let xSum = 0, ySum = 0, zSum=0;
  function gcd (x,y) {
    if (x === y) return x;
    if (x > y) return gcd(x-y, y)
    else return gcd(x, y-x)
  }
  let d = (x * y)/gcd(x,y);
  for (let i = 0; i < z; i+=x) {
    xSum += i;
  }
  for (let j = 0; j < z; j+=y) {
    ySum += j;
  }
  for (let k = 0; k < z; k+=d) {
    zSum += k;
  }  
  sum = xSum + ySum - zSum;
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
