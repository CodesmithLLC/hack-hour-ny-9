// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function swap(array, i, j) {
  let hold = array[i]
  let hold2 = array[j]

  array[i] = hold2
  array[j] = hold

  return array
}

function bubbleSort(array) {
  let safe = array.length
  while (1 < safe) {
    for (let i = 1; i < safe; i++) {
      if (array[i - 1] > array[i]) {
        swap(array, i - 1, i)
      }
    }
    safe--
  }
  return array;
}



module.exports = bubbleSort;
