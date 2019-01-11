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
  debugger;
  let result = '';
  while (i !== n + 1) {
    result = result.concat(' '.repeat(n - i) + '*'.repeat(i)).concat('\n');
    i += 1;
  }
  console.log(result);
}

drawStairs(6);

module.exports = drawStairs;
