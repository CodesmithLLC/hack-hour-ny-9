/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function isCondensed (arrOfArrs){
    for ( let i = 0; i < arrOfArrs.length - 1; i++){
        if ( arrOfArrs[i][1] >= arrOfArrs[i+1][0]){
            return false
        }
    }
    return true
}

function mergeRanges(array) {
    if (isCondensed(array)) return array;
    else {
        const newArray = []
        array.sort((a,b) => a[0] - b[0])
        console.log(array)
        for (let i = 0; i <= array.length -1; i++){
            if(i+1<array.length){
                if(array[i][1] >= array[i+1][0]){
                    newArray.push([array[i][0],array[i+1][1]])
                    i++
                } else {
                    newArray.push(array[i])
                }
            } else {
                newArray.push(array[i])
            }
       }
      return mergeRanges(newArray)
    }
}


//=================================================altai===================================================


function mergeRanges(array) {
    const ranges = array.slice();
    const result = [];
    
    ranges.sort((a, b) => {
      return a[0] - b[0];
    });
    result.push(ranges[0]);
    
    for (let i = 1; i < ranges.length; i += 1) {
      let last = result[result.length - 1];
      let current = ranges[i];
      
      if (current[0] > last[1]) {
        result.push(current);
      } else if (current[1] > last[1]) {
        last[1] = current[1];
      } 
    }
  
    return result;
}


var times = [[0, 12], [3, 5], [4, 8], [10, 12], [9, 10]]
console.log(mergeRanges(times))


module.exports = mergeRanges;
