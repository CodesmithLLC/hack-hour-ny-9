/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  const length = items.length;
  const arrayOfIndexes = items.map((el, i) => i);

  const indexes = [];
  for (let i = 1; i <= length; i++) {
    permutation([], 0, i);
  }

  let maxValue = -Infinity;
  for (let indexArr of indexes) {
    const currItems = indexArr.map(i => items[i]);
    let currSum = 0;
    let currWeight = 0;
    let isValidCombination = true;
    for (let item of currItems) {
      currSum += item.value;
      currWeight += item.weight;
      if (currWeight > weightAvailable) {
        isValidCombination = false;
        break;
      };
    }

    if (isValidCombination) maxValue = Math.max(maxValue, currSum);
  }

  return maxValue;

  function permutation(arr, index, k) {
    if (arr.length === k) return indexes.push(arr);
    for (let i = index; i < arrayOfIndexes.length; i++) {
      permutation([...arr, arrayOfIndexes[i]], i + 1, k);
    }
  }
}

module.exports = solveKnapsack;
