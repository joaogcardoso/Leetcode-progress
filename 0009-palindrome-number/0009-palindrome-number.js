/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const nums = String(x).split("");
    if (nums.includes("-") || JSON.stringify(nums) !== JSON.stringify(nums.reverse())) {
        return false;
    } else {
        return true;
    }
};