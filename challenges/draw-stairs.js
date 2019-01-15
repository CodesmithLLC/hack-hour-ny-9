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

// function drawStairs(n, stairs='',count=1) {
//  if (n===0) return stairs;
//  for(let i=0; i<n-1; i++){
//     stairs+= ' ';
//  }
//  for (let j=0; j<count; j++) {
//     stairs+= '*'; 
//  }
//  if (count !==n) stairs+= '\n' // at 6 => 5 nbsp and 1 star but at 5 => 4 spaces and 2 stars 

// return drawStairs(n-1,stairs, count+1)
// }
console.log(drawStairs(6))

function drawStairs(n) {
   for (let i=1; i<n; i++){
      const spaces = ' '.repeat(n-i);
      const stars = '*'.repeat(i);
   }
   console.log( )
}
console.log(drawStairs(6))
module.exports = drawStairs;
