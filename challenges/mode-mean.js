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
// find the mode --> shows up most often
// find the mean --> average... use Math.floor
// return the result of comparing the numbers

function modemean(array) {
    function mode(array) {
        let mostNum = null;
        const most = array.reduce((acc, curr) => {
            if (!acc[curr]) acc[curr] = 1;
            else acc[curr] += 1;
            return acc;
        }, {})
        for (let key in most) {
            if (most[key] > mostNum) {
                mostNum = key;
            }
        }
        return mostNum;
    }
    function mean(array) {
        const total = array.reduce((acc, curr) => {
            return acc + curr;
        });
        return Math.floor(total / array.length)
    }
    return Number(mode(array)) === Number(mean(array));
}

module.exports = modemean;
