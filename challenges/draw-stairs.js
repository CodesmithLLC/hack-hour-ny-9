/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.

 For example:
 drawStairs(6) ->
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  let string = ""
  // print n levels
  for (let i = 1; i <= n; i++) {
    // print amount of spaces decrementing at each 'level'
    for (let j = n; j > i; j--) {
      string += " ";
    }
    // print amount of stars increasing at each 'level'
    for (let k = 1; k <= i; k++) {
      string += "*"
    }
    // print new line
    string += "\n"
  }
  console.log(string)
}


module.exports = drawStairs;
