// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  let before;
  let after;
  for (let i = 1; i < array.length; i++) {
    for (let j = i - 1; 0 < j; j--) {
      while (array[i] < array[j]) {
        array[i]``
      }
    }
  }
}

console.log(insertionSort([1, 5, 2, 6, 3, 4]))

module.exports = insertionSort;