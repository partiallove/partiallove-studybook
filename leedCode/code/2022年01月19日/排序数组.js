/**
 * 选择排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let min = Infinity;
        let minIndex;
        for (j = i; j < nums.length; j++) {
            if (nums[j] < min) {
                min = nums[j]
                minIndex = j;
            }
        }
        [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
};
