/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let bools = [];
    for (let i = -31; i <= 31; i++) {
        let powerOfTwo = 2 ** i === n ? true : false;
        bools.push(powerOfTwo);
    }
    return bools.some(b => b === true);
};