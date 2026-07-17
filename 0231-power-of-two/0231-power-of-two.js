/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let bools = [];
    for (let i = 0; i <= 31; i++) {
        if (2 ** i === n) {
            return true;
        }
    }
    return false;
};