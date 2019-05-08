/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */
//FINISH THIS 
function newIntersections(x, y) {
  let coordinatesObj = {};
  //build object

  x.forEach((num, index) => {
    if (!coordinatesObj[num]) coordinatesObj[num] = [y[index]];
    else coordinatesObj[num].push(y[index]);
  })
  x.forEach(num => {
    for (let i = 0; i < coordinatesObj[x].length; i++) {
      // check new point to right
      if (coordinatesObj[num][i] && coordinatesObj[num + 2][i] && coordinatesObj[num + 1][i].includes(coordinatesObj[num + 1][i]))
      // check new point to left
      // check new point to top
      // check new point to bottom
    }
  })
}

module.exports = newIntersections;
