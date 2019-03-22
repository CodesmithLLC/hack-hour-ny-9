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

}

module.exports = knightjumps;

//========================================ryan=========================================

function knightjumps(str) {
    const x = parseInt(str[1]);
    const y = parseInt(str[3]);
  
    let spaces = 0;
  
    // if the knight can move to the LEFT ONE space...
    if (x - 1 >= 1) {
      // ...check if the knight can move DOWN TWO spaces
      if (y - 2 >= 1) spaces += 1;
      // ...check if the knight can move UP TWO spaces
      if (y + 2 <= 8) spaces += 1;
    }
  
    // if the knight can move to the LEFT TWO spaces...
    if (x - 2 >= 1) {
      // ...check if the knight can move DOWN ONE space
      if (y - 1 >= 1) spaces += 1;
      // ...check if the knight can move UP ONE space
      if (y + 1 <= 8) spaces += 1;
    }
  
    // if the knight can move to the RIGHT ONE space...
    if (x + 1 <= 8) {
      // ...check if the knight can move DOWN TWO spaces
      if (y - 2 >= 1) spaces += 1;
      // ...check if the knight can move UP TWO spaces
      if (y + 2 <= 8) spaces += 1;
    }
  
    // if the knight can move to the RIGHT TWO spaces...
    if (x + 2 <= 8) {
      // ...check if the knight can move DOWN ONE space    
      if (y - 1 >= 1) spaces += 1;
      // ...check if the knight can move UP ONE space
      if (y + 1 <= 8) spaces += 1;
    }
  
    return spaces;
  }
  
