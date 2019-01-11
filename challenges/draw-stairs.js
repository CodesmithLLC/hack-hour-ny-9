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
  const result = Array(n + 1).fill(' ');
  result[n] = '';

  for (let i = n - 1; i >= 0; i--) {
    result[i] = '*';
  }
  return result.join('')
}

console.log(drawStairs(6));

module.exports = drawStairs;
