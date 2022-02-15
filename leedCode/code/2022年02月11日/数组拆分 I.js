/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums.sort((a, b) => a - b).reduce((cur, next, index) => {
        if (index % 2) {
            return cur
        }
        return cur + next
    }, 0)
};