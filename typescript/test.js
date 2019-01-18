const array = [1, 2, 3];
function reverseInPlace(array) {
    let lo = 0;
    let hi = array.length - 1;
    while (lo < hi) {
        let tempLo = array[lo];
        let tempHi = array[hi];
        array[lo] = tempHi;
        array[hi] = tempLo;
        lo += 1;
        hi -= 1;
    }
}
//# sourceMappingURL=test.js.map