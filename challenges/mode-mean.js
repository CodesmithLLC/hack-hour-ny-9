/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */


function modemean(array) {
    const objOccurrences = array.reduce((accm, curr) => {
        if (accm[curr] === undefined) accm[curr] = 1;
        else accm[curr]++;
        return accm;
    }, {});

    let mostFrequentOcc = 0;
    for (let key in objOccurrences) {
        mostFrequentOcc = Math.max(mostFrequentOcc, objOccurrences[key]);
    }

    const arrayOfModes = [];
    for (let key in objOccurrences) {
        if (objOccurrences[key] === mostFrequentOcc) arrayOfModes.push(parseFloat(key));
    }

    const maxMode = arrayOfModes.reduce((accm, curr) => Math.max(accm, curr));

    const arraySum = array.reduce((accm, curr) => accm += curr);
    const mean = Math.floor(arraySum / array.length); 

    return mean === maxMode;
}


module.exports = modemean;
