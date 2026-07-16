/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        let num = nums.some(n => n === i);
        if (num === false) {
            return i;
        }
    }
};