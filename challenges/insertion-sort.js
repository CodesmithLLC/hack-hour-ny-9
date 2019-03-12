// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


function swap(arr, a, b) {
  if (a < 0 || b < 0 || a >= arr.length || b >= arr.length) {
    console.log("Cannot find ${a} or ${b}")
  } else {
    let temporary = arr[a]
    arr[a] = arr[b]
    arr[b] = temporary;
  }
}
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i
    while (j > 0 && array[j - 1] > array[j]) {
      swap(array, j, --j)
    }
  }
  return array
}

console.log(insertionSort([1, 5, 2, 6, 3, 4]))

module.exports = insertionSort;