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

console.log(gcd(10,8))
console.log(gcd(10,9))

module.exports = gcd;