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

//I: number
// O: console.log of staircase of asterisks from left to right

function drawStairs(n) {
  let i = 1;
  while (i !== n + 1) {
    console.log(' '.repeat(n - i) + '*'.repeat(i));
    i += 1;
  }
}
console.log(drawStairs(6));

module.exports = drawStairs;
