/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
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
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let start = [start_x, start_y];
  let end = [end_x, end_y];

  let cannot = []
  let pair = []
  let pathX = []
  let pathY = []

  for (let i = 0; i < x.length; i++) {
    pair.push([x[i], y[i], r[i]])
  }
  console.log(pair)

  for (let i = 0; i < pair.length; i++) {
    cannot.push([pair[i][0], pair[i][1]], [pair[i][0], (pair[i][1] + pair[i][2])], [(pair[i][0] + pair[i][2]), pair[i][1]])
    cannot.push([pair[i][0], (pair[i][1] - pair[i][2])], [(pair[i][0] - pair[i][2]), pair[i][1]])
  }

  console.log(cannot)

  // let curr = start
  let new = start;
  for (let i = 0; i < start.length; i++) {
    if (new !== end) {
      console.log('hello')
      // if curr is not in cannot
      if (cannot.indexOf(new) === -1) {
        console.log("nope")
      } else
      // if(cannot.indexOf(curr)){

      // }
      // if start[0] < end[0]
      // add to x
      // else if start[0] > end[0]
      // subtract from x
      // now this is curr

      // if curr is in cannot
      // if start[1] <end[1]
      // add to y
      // if start[1] > end[1]
      // subtract from y
      // now this is curr

      // if curr is still in cannot
      // --> impossible
    } else {
      return "hi"
    }
  }
}


console.log(circleCountry([-2, -1, 1, 3], [1, -2, 3, 2], [1, 2, 1, 1], 3, -3, - 3, 3))

module.exports = circleCountry;
