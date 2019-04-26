// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
   // Loop forwards in the array from index 1
   for (let i = 1; i < array.length; i++) {
    // Set checking index, for iterating backwards
    let j = i;
    // While checking item is less than the one before it, and...
    // ...checkingItem is not the first item in array
    while (array[j] < array[j-1] && j > 0) {
      // Switch checking item and the item before it
      let temp = array[j];
      array[j] = array[j-1];
      array[j-1] = temp;
      j--;
    }
  }
  return array;
}


console.log(insertionSort([1,2,3,8,7,6,5,4]))
module.exports = insertionSort;