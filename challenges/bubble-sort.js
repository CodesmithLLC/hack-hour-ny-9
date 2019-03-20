// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

const bubbleSort = array => {
  for (let j = 0; j < array.length - 1; j++) {
    let didSwap = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        didSwap = true
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
      }
    }
    if (!didSwap) break;
  }
  return array;
}

module.exports = bubbleSort;
