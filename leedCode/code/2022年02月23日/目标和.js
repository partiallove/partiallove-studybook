/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    target = nums.reduce((a,b)=>a+b,0) - target;
    if(target<0 || target % 2 !== 0) return 0;
    target = target>>1;
    const dp = new Array(target+1).fill(0);
    dp[0] = 1;
    for(let num of nums) {
        for(let i=target; i>=num; i--) {
            dp[i] += dp[i-num];
        }
    }
    return dp[target]
};