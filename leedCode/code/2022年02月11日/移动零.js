/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let fast = 0,
        slow = 0;
    while (fast < nums.length) {
        if (nums[fast] != 0) {
            nums[slow++] = nums[fast];
        }
        fast++;
    }
    while (slow < nums.length) {
        nums[slow++] = 0;
    }
};