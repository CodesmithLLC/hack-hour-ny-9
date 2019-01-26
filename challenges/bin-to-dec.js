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

function binToDec(binary) {
  let decimal = 0;
  for (let i = binary.length - 1, j = 0; i >= 0; i--, j++) {
    if (binary[i] !== '0') decimal += Math.pow(2, j);
  }
  return decimal;
}

function decToBin(decimal) {
  let binary = '';
  while(decimal) {
    binary += decimal % 2;
    decimal = Math.floor(decimal / 2)
  }
  return binary;
}

module.exports = binToDec;
