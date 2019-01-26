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
  //establish a count to keep track of digits seen
  let count = 0;
  function recursive (binary, counter) {
      if (binary.length === 0) return 0;
      else return (2 * counter) + recursive(binary.slice(-1), counter + 1);
  }
  recursive(binary, count)
}

module.exports = binToDec;
