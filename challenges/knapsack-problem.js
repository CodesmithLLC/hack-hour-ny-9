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
  const helper = (totalVal, weightLeft, maxVal, index) => {
    if (weightLeft === 0) return totalVal;
    if (weightLeft < 0) return -Infinity;

    for (let i = index; i < items.length; i++) {
      const newTotal = totalVal + items[i].value;
      const newWeightLeft = weightLeft - items[i].weight;
      maxVal = Math.max(helper(newTotal, newWeightLeft, maxVal, i + 1), maxVal);
    }
    return maxVal;
  }
  return helper(0, weightAvailable, -Infinity, 0);
};

module.exports = solveKnapsack;
