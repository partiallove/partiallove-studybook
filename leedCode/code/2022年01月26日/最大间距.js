/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let maxNum = 0
    if(nums.length < 2) return 0
    nums.sort((a, b) => a - b).reduce((pre, val) => ((val - pre) > maxNum && (maxNum = (val - pre)),val))
    return maxNum
};