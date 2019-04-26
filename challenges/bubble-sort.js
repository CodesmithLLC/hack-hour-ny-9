// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function swap (array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSort(array) {
    for ( let i = 0; i < array.length; i++) {
        for ( let j = 1; j < array.length; j++) {
            if ( array[j-1] > array[j]) {
                swap(array, j-1, j);
            }
        }
    }
    return array;
}

console.log(bubbleSort([3,2,4,7,6,1,9,10]))

module.exports = bubbleSort;
