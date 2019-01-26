/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
 * 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function nth(n, r) {
  let output = n;
  if (r === 0) return 1;
  if (r === 1) return output;
  for (let i = 1; i < r; i++) {
    output *= n;
  }
  return output;
}

function binToDec(binary) {
  let add = 0;
  binary = binary
    .split("")
    .reverse()
    .join("");
  for (let i = 0; i < binary.length; i++) {
    add = add += binary[i] * nth(2, i);
  }
  return add;
}

// module.exports = binToDec;

console.log(binToDec("0101"));
console.log(nth(2, 3));
