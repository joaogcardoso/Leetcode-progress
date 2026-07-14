/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let string = "";
    for (let i = 0; i < digits.length; i++) {
        string += String(digits[i]);
    }
    let num = BigInt(string);
    num++;
    const array = Array.from(String(num), Number);
    return array;
};