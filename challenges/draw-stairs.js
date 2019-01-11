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
 //start at one
 //place what i want to print in const - star - space
 // iterate up to num for length
  // interate up to num for width
    //test if i +j ===num
      //print starts
    //else print space
    //newline
  const space = ' ';
  const star = '*';
  let line = '';
  //let j = 1;
  for(let i = 1; i <= n; i++) {
    let numStars = i;
    let numSpace = n - i;
    for(let j = 1; j <= numSpace; j++){
        line+= space;
    }
    for(let k = 1; k <= numStars; k++) {
        line += star;
    }
    line='';
  }
};

module.exports = drawStairs;
