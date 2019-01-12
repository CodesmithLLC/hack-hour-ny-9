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

console.log(drawStairs(6))

function drawStairs(n) {
  var stairs = '*/n';

  for(let i = 2; i <= 6; i++){
    let row = makeRow(i);
    if (i === n){
    stairs += row;
    } else {
    stairs = stairs + row + '/n';
    }
  }
  return stairs;
}

function makeRow(n){
  let row = '';

  for (let i = 1; i <= n; i++){
    row += '*';
  }
  return row;
}

module.exports = drawStairs;
