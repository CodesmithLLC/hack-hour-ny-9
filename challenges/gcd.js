/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let smaller = Math.min(a, b);

  for (let i = smaller; i > 0; i--) {
    if (a % i === 0 && b % i === 0) return i;
  }
  return 1;
}

// function gcd(a, b) {
//   // let bigger = Math.max(a, b);
//   let aArray = [];
//   let bArray = [];
//   for (let i = 1; i <= a; i++) {
//     if (a % i === 0) aArray.push(i);
//   }
//   for (let j = 1; j <= b; j++) {
//     if (b % j === 0) bArray.push(j);
//   }
//   let result = aArray.filter((num) => bArray.includes(num));
//   return result[result.length - 1];
// }

// console.log(gcd(10, 9));

module.exports = gcd;