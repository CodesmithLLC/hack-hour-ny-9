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
// n = 6
//start with n - space star and space (n - 1) spaces;
//return the row
//add 1 star and substract 1 space;
//return the row
function drawStairs(n) {
    let space = ' '; // the space can be n - 1;
    let star = '*';
    let row = '';
    let count = n - 1;

    for (let x = 0; x < n; x++) {
        for (let i = 0; i < count; i++) {
            row += space;
        }
        for (let j = 0; j < n - count; j++) {
            row += star;
        } 
        console.log(row);
        row = '';
        count -= 1;
    }
}

// try to build a recursive/optimize previous solution
// function drawStairs(n) {
//     let space = ' ';
//     let star = '*';

//     if (star.length > n) {
        
//     } else {

//     }
// }
// console.log(drawStairs(6));


module.exports = drawStairs;


// solution
// function drawStairs(n) {
//     for (let i = 1; i <=n; i++) {
//         const spaces = ' '.repeat(n - i);
//         const stars = '*'.repeat(i);
//         console.log(spaces + stars);
//     }
// }