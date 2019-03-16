// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
  function swap(array, i, j) {
    const ithElement = array[i];
    array[i] = array[j];
    array[j] = ithElement;
  }

  let swapCount = 0;
  do {
    swapCount = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapCount++;
      }
    }
  } while (swapCount !== 0);

  return array;
}

module.exports = bubbleSort;
