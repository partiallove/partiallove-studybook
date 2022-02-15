/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    const len = nums.length
    const total = nums.reduce((prev,cur) => prev+cur,0)
    if(total<x) return -1 //边界，如果总和都不达 x, 那就直接跑路吧
    let ret = Infinity //最少的操作数
    let sum = 0
    let l =r =0
    while(r<len){
        sum+=nums[r]
        while(total-sum<x){
            // 外面的值已经小于 x 了，所以需要收缩窗口
            sum-=nums[l]
            l++
        }
        if(total-sum === x){
            // 符合要求
            ret= Math.min(ret,len-(r-l+1))
        }
        r++
    }
    return ret=== Infinity?-1:ret
};