/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    let arr = []
    if ( a > b ){
        for ( let i = 1; i <= b; i++){
            if ( a % i === 0 && b % i === 0){
                arr.push(i);
            }
        }
    } else {
        for ( let i = 1; i <= a; i++){
            if ( b % i === 0 && a % i === 0){
                arr.push(i);
            }
        }

    }
    return arr.pop();
}
//========================================raph====================================================
// brute force solution
function gcd(a, b) {
    const smaller = Math.min(a, b);
    for (let divisor = smaller; divisor > 0; divisor--) {
      if (a % divisor === 0 && b % divisor === 0) return divisor;
    }
    return 1;
   }
   //============================================raph=============================================
   //euclidean algorithm
function gcd(a, b) {
    let greater = Math.max(a,b);
    let smaller = Math.min(a,b);
    if (smaller === 0) return greater;
    return gcd(smaller, greater % smaller);
}


console.log(gcd(10,8))
console.log(gcd(10,9))

module.exports = gcd;