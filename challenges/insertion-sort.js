// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort



function insertionSort(array) {
  function insert(array, value, index) {
    array = [...array.slice(0, index), value, ...array.slice(index)];
    return array;
  }

  if (array.length === 0) return [];
  const arrLength = array.length;

  for (let i = 1; i < arrLength; i++) {
    const currentValue = array[i];
    for (let j = 0; j < i; j++) {
      if (currentValue < array[j]) {
        array = insert(array, currentValue, j);
        i++;
      }
    }
  }

  return array;
}

console.log(insertionSort([1, 5, 2, 3, 10]));
module.exports = insertionSort;