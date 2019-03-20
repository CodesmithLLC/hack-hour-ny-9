// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

const checkIfInside = (x, y) => x > 0 && x <= 8 && y > 0 && y <= 8;

const knightjumps = str => {
  const knightX = Number(str[1]);
  const knightY = Number(str[3]);

  if (!checkIfInside(knightX, knightY)) return 0;

  let counter = 0;

  for (let x = -2; x <= 2; x++) {
    if (x === 0) continue;
    const y1 = 3 - Math.abs(x);
    const y2 = Math.abs(x) - 3;
    
    if (checkIfInside(x + knightX, y1 + knightY)) counter++;
    if (checkIfInside(x + knightX, y2 + knightY)) counter++;
  }
  console.log(typeof counter);
  return counter;
}

module.exports = knightjumps;
