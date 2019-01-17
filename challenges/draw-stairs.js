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

    let astk = '*', space = ' ';

    for (let k = 1; k <= n; k++) { 
        console.log(space.repeat(n-k).concat(astk.repeat(k)))
    }
    
}
drawStairs(6);



module.exports = drawStairs;
