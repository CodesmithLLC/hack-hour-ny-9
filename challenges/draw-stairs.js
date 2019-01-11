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
    //concatenate n - 1 spaces on same line
    let str = '';
    for (let k = 1; k <= n; k++) {  //outer loop controls the line, outermost loop counter variable will be referenced by counters in inner loops
        for (let i = n - k; i > 0; i--) {  //inner loop outputs each line
            str += ' ';
        }
        for (let j = 1; j <= n ; j++) {
            str += '*' 
        }
    
    console.log(str);

    }
    //print 


}
drawStairs(5);



module.exports = drawStairs;
