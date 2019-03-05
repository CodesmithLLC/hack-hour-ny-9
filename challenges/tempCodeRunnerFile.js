
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
        for (let i = 0; i < array.length -1; i++){
            if(array.length===3){
                console.log(i)
            }
          if(array[i][1] >= array[i+1][0]){
            newArray.push([array[i][0],array[i+1][1]])
            if(array.length===3){
                console.log(array)
                console.log(newArray)
            }
            i++
            if(array.length===3){
                console.log(i)
            }
          } else {
           newArray.push(array[i])
         }
       }
      return mergeRanges(newArray)
    }
}


var times = [[0, 4], [3, 5], [4, 8], [10, 12], [9, 10]]


console.log(mergeRanges(times))