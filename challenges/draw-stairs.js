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
let space = " "
let asterisks = "*"
let aCount = 1
let sCount = n - aCount
for(aCount; aCount <= n; aCount++){
    console.log(space.repeat(sCount) + asterisks.repeat(aCount))
    }
}


module.exports = drawStairs;
