/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let counts = [];
    for(let i=0;i<nums.length;i++){
        let j = countNum(nums,i);//计算在该索引值下的值
        counts.push(j);
    }
    return counts;
};
function countNum(nums,ind){
    let j = 0;
    for(let i=ind;i<nums.length;i++){
        if(nums[ind]>nums[i]){//当num[i]>num[i++] 值+1
            j++;
        }
    }
    return j;//输出大于右边的值的数量
}