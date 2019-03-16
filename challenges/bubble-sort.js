// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  // sorted can only be true once a full pass of the array is completed without sorting 
  while (true) {
    let swapped = false;
    for (let i=0; i < array.length; i++) {
      // any swap performed will set swapped to true
      // while loop will only break once no swaps are performed
      if (array[i+1] && array[i+1] < array[i]) {
        // swap out-of-order consecutive elements
        const temp = array[i+1]
        array[i+1] = array[i];
        array[i] = temp;
        swapped = true;
      }
    }
  }
}

module.exports = bubbleSort;
