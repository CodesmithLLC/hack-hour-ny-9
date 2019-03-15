/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to 
 *  cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders 
 *  Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  // get circles that Tyus is inside of (by index) and circles
  // that the END coordinates are inside of

  const tyusCircles = [];
  const destinationCircles = [];
  let circleCount = 0;

  for (let i = 0; i < x.length; i++) {
    // distance between tyus/destination and i-th circle center
    const tyusDistance = Math.sqrt(Math.pow(x[i] - start_x, 2) + Math.pow(y[i] - start_y, 2));
    const destinationDistance = Math.sqrt(Math.pow(x[i] - end_x, 2) + Math.pow(y[i] - end_y, 2));

    if (tyusDistance < r[i] && destinationDistance < r[i]) continue;

    if (tyusDistance < r[i] || destinationDistance < r[i]) circleCount++;
  }

  return circleCount;
}

const x = [1, 3];
const y = [1, 4];
const r = [1, 1];
console.log(circleCountry(x, y, r, 1.5, 1, 3, 3.5));
module.exports = circleCountry;
