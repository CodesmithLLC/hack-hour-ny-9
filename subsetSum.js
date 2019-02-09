function subsetSum(array, target) {

  const sets = [[]];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0, length = sets.length; j < length; j++) {
      let temp = sets[j].concat(array[i]);
      sets.push(temp);
      let sum = temp.reduce((p,c) => { return p + c });
      if (sum === target) { return true }
    }
  }
  return false;
};
 
function subsetSumRecursive(array, target) {
  if (!target) return true;
  if (!array.length) return false;
  
  return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);

}