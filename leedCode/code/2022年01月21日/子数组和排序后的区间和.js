
/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let arr=[]
    // 找子数组和
    for(let i=0;i<nums.length;i++){
        arr.push(nums[i])
        let tmp = nums[i]
        for(let j=i+1;j<nums.length;j++){
            tmp = tmp + nums[j]
            arr.push(tmp)
        }
    }
    // 排序
    let sArr = arr.sort((a,b)=> a-b)
    let sum = 0
    for(let i = left ; i<=right ;i++){
        sum = (sum+sArr[i-1])%1000000007
    }
    return sum
};
