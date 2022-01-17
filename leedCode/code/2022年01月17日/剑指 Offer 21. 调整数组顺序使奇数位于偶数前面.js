/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let left = 0, right = nums.length-1;
    while(left < right) {
        while(left< right && nums[left] % 2 == 1)  left++;
        while(left < right && nums[right] % 2 == 0)  right--;
        swap(nums, left, right);
    }
    return nums;
};

function swap(nums, i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}