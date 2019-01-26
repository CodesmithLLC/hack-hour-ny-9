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
  let realBinary = binary.replace(/^0+/, ''); 
  if (realBinary === '') return 0;
  let sum = 0;
  realBinary = realBinary.split("");
  for (let i = 0; i < realBinary.length; i++) {
    if (realBinary[i] === '1') sum+= Math.pow(2, realBinary.length-1-i);
  }
  return sum;
}

// console.log(binToDec('000010'))

module.exports = binToDec;
