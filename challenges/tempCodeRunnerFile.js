function maxSubarray(arr) {
  let max = arr[0];
  let runningMax = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    runningMax = Math.max(runningMax + arr[i], arr[i]);
    max = Math.max(runningMax, max);
    console.log('running', runningMax);
    console.log('max', max);
  }
  return max;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));