/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = nums.indexOf(target)
    if (index>=0) {
        return index
    }else{
        nums.push(target)
        nums.sort((a,b)=>a-b)
        let index = nums.indexOf(target)
        return index
    }
};