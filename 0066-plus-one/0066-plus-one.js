/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let string = "";
    for (let i = 0; i < digits.length; i++) {
        string += String(digits[i]);
        console.log(`String: ${string}`);
    }
    let num = BigInt(string);
    console.log(num);
    num++;
    console.log(num);
    const array = Array.from(String(num), Number);
    console.log(array);
    return array;
};