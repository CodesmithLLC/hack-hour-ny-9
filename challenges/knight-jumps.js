// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  let xy = str.split(" ");
  let x = parseInt(xy[0].slice(1));
  let y = parseInt(xy[1].slice(0, -1));
  // console.log(x, y)
  let moves = 0;
  if (x + 2 <= 8 && y + 1 <= 8) moves++;
  if (x + 1 <= 8 && y + 2 <= 8) moves++;
  if (x + 2 <= 8 && y - 1 > 0) moves++;
  if (x + 1 <= 8 && y - 2 > 0) moves++;
  if (x - 2 > 0 && y + 1 <= 8) moves++;
  if (x - 1 > 0 && y + 2 <= 8) moves++;
  if (x - 2 > 0 && y - 1 > 0) moves++;
  if (x - 1 > 0 && y - 2 > 0) moves++;
  return moves;
}

// console.log(knightjumps('(3 1)'))

module.exports = knightjumps;
