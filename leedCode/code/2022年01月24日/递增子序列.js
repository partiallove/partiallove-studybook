
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let res = [];
    let path = [];
    back(0);
    return res;
    function back(startIndex) {

        if (path.length > 1) {
            res.push(path.slice());
        }
        let used = [];
        for (let i = startIndex; i < nums.length; i++) {

            if ((path.length > 0 && nums[i] < path[path.length - 1]) || used[nums[i] + 100]) {
                continue;
            }
            used[nums[i]+100] = true;
            path.push(nums[i]);
            back(i + 1);
            path.pop()
        }
    }
};