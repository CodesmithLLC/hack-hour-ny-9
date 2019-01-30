/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.length < 3 || !Array.isArray(array)) return 0;
  const arrayOfMax = [];
  let arrayCopy = array.slice();

  const negativeNumCount = array.filter(el => el < 0).length;
  if (negativeNumCount > 1) {
    // we need to check if the product of the smallest 2 is 
    // greater than that of the greatest 2
    const twoMin = [];
    const twoMax = [];

    while(twoMin.length < 2 && arrayCopy.length !== 0) {
      const currMin = Math.min(...arrayCopy);
      twoMin.push(currMin);
      arrayCopy.splice(arrayCopy.indexOf(currMin), 1);
    }
    
    arrayCopy = array.slice();
    while(twoMax.length < 2 && arrayCopy.length !== 0) {
      const currMax = Math.max(...arrayCopy);
      twoMax.push(currMax);
      arrayCopy.splice(arrayCopy.indexOf(currMax), 1);
    }

    arrayCopy = array.slice();

    if (twoMin[0] * twoMin[1] > twoMax[0] * twoMax[1]) {
      arrayOfMax.push(...twoMin);
      arrayCopy.splice(array.indexOf(twoMin[0]), 1);
      arrayCopy.splice(array.indexOf(twoMin[1]), 1);
    } else {
      arrayOfMax.push(...twoMax);
      arrayCopy.splice(array.indexOf(twoMax[0]), 1);
      arrayCopy.splice(array.indexOf(twoMax[1]), 1);
    }

    arrayOfMax.push(Math.max(...arrayCopy));

    return arrayOfMax.reduce((a, b) => a * b);
  } else {
    while(arrayOfMax.length < 2 && arrayCopy.length !== 0) {
      const currMax = Math.max(...arrayCopy);
      arrayOfMax.push(currMax);
      arrayCopy.splice(arrayCopy.indexOf(currMax), 1);
    }

    return arrayOfMax.reduce((a, b) => a * b);
  }  
}

module.exports = highestProduct;
