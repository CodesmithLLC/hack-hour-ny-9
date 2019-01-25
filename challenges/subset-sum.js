/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {
    if (array.length === 1) return array[0] === target;

    for (let i = 1; i <= array.length; i++) {
        const subsetSizeN = nSizeSubsetSum(array.slice(), i);
        if (subsetSizeN.includes(target)) return true;
    }    

    return false;
}

function nSizeSubsetSum(currArr, subsetSize = 1) {
    if (subsetSize === 1) return currArr.slice();
    if (subsetSize === currArr.length) return [currArr.reduce((a, b) => a += b, 0)];
    
    const finalSet = new Set();

    for (let i = 0; i < currArr.length; i++) {
        const sliceArr = currArr.slice();
        sliceArr.splice(i, 1);
        const possiblePrevPerm = nSizeSubsetSum(sliceArr, subsetSize - 1);
        possiblePrevPerm.forEach(el => finalSet.add(currArr[i] + el));
    }   

    return Array.from(finalSet);
}

module.exports = subsetSum;
