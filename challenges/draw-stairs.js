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
    let level = 1;

    while (n >= level) {
        let space = ' '.repeat(n - level);
        let asterisks = '*'.repeat(level);
        console.log(space.concat(asterisks));
        level++
    }
}

drawStairs(6);

module.exports = drawStairs;
