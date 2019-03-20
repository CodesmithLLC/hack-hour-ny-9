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

function newIntersections(x, y){
  // calculate bounds of the largest enclosing rectangle
  // calculate left bounds of periphery
  const x_max = x.reduce((acc,curr,idx) => acc[0] < curr ? [curr,idx] : acc, [Number.MIN_VALUE, -1])[1];
  // calculate right bounds of periphery
  const x_min = x.reduce((acc,curr,idx) => acc[0] > curr ? [curr,idx] : acc, [Number.MAX_VALUE, -1])[1];
  // calculate top bounds of periphery
  const y_max = y.reduce((acc,curr,idx) => acc[0] > curr ? [curr,idx] : acc, [Number.MIN_VALUE, -1])[1];
  // calculate bottom bounds of periphery
  const y_min = y.reduce((acc,curr,idx) => acc[0] < curr ? [curr,idx] : acc, [Number.MAX_VALUE, -1])[1];
  
  const rowNums = x_max - x_min - 1;
  const colNums = y_max - y_min - 1;
  
  return rowNums * colNums;
}

module.exports = newIntersections;
