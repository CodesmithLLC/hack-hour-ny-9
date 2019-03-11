// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort


//much less efficient on large lists
function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      let unsorted = array[i + 1];//6
      let insertIndex = i//2
      console.log(unsorted)
      while (unsorted < array[insertIndex] && insertIndex > 0) insertIndex--;
      array.splice(i + 1, 1);
      if (unsorted < array[insertIndex]) array.splice(insertIndex, 0, unsorted)
      else array.splice(insertIndex + 1, 0, unsorted)

    }
  }
  return array;
}

// console.log(insertionSort([5, 3, 1, 12, 6, 88, 44, 33, 1000, 99, -1]))

module.exports = insertionSort;