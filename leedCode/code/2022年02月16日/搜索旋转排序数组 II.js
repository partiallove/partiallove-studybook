/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}  59-5
 */
var search = function(nums, target) {
    var low = 0
    var high = nums.length - 1

    while(low <= high){
        console.log('顶')
        var mid = Math.floor(low + (high - low)/2)
        if(nums[mid] == target) {
            return true
        }
        console.log('前',low,'mid',mid)
        if(nums[low] == nums[mid]){
            low++
            continue
        } // 前 0；前 1；后 1


        // while(nums[low] == nums[mid] && nums[low + 1] == nums[low]) {
        //     low = low+1
        // }
        console.log('后',low,'mid',mid)


        if(nums[low] <= nums[mid]){ //左边有序
            if(target >= nums[low] && target < nums[mid]){
                high = mid -1
            }else {
                low = mid + 1
            }
        }else {
            if(target <= nums[high] && target > nums[mid]) {
                low = mid + 1
            }else {
                high = mid - 1
            }
        }
    }

    return false
};