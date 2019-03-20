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
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate 
 * < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
  const repeatedXInd = {};
  const repeatedYInd = {};
  for (let i = 0; i < x.length; i++) {
    // first we get repeated instances of x and y. This is 
    // needed be able to insert a NEW point
    const xWithoutCurr = [...x.slice(0, i), ...x.slice(i + 1)];
    const yWithoutCurr = [...y.slice(0, i), ...y.slice(i + 1)];

    if (xWithoutCurr.includes(x[i])) {
      if (repeatedXInd[x[i]]) repeatedXInd[x[i]].push(i);
      else repeatedXInd[x[i]] = [i];
    }
    if (yWithoutCurr.includes(y[i])) {
      if (repeatedYInd[y[i]]) repeatedYInd[y[i]].push(i);
      else repeatedYInd[y[i]] = [i];
    } 
  }

  // now we get the max,min of the other coordinates
  for (let key of Object.keys(repeatedXInd)) {
    const arrOfInd = repeatedXInd[key];
    const arrOfValues = arrOfInd.map(ind => y[ind])
    const minMax = [Math.min(...arrOfValues), Math.max(...arrOfValues)];
    repeatedXInd[key] = minMax;
  }
  for (let key of Object.keys(repeatedYInd)) {
    const arrOfInd = repeatedYInd[key];
    const arrOfValues = arrOfInd.map(ind => x[ind])
    const minMax = [Math.min(...arrOfValues), Math.max(...arrOfValues)];
    repeatedYInd[key] = minMax;
  }
  
  let crossCount = 0;
  for (let x in repeatedXInd)  {
    const [y0, y1] = repeatedXInd[x];

    for (let y in repeatedYInd) {
      if (y >= y0 && y <= y1) {
        const [x0, x1] = repeatedYInd[y];
        if (x >= x0 && x <= x1) crossCount++;
      }
    }
  }

  return crossCount;
}

module.exports = newIntersections;
