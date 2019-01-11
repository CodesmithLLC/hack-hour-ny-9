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

function drawStairs(n, steps = "*") {
    if ( n >= 1 && n <= 100) return steps
    let newN = n + 1;
    steps += "*";
    return drawStairs(newN , steps);
    console.log(drawStairs(6));
}



module.exports = drawStairs;
