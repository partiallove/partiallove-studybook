/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    /**
     *
     * @param {*} index 当前开始的索引
     * @param {*} path 回溯的路径
     * @param {*} sum 当前路径中所有元素的和
     */
    const backtrack = (index, path, sum) => {
        // 和已超目标值  不符合退出
        if (sum > target) return;
        // 找到目标和 将路径加入结果集中
        if (sum == target) return res.push(path.slice());
        for (let i = index; i < candidates.length; i++) {
            // 选择 candidates[i]
            path.push(candidates[i]);
            sum += candidates[i];
            // 递归遍历下一层回溯树 注意这里是i 而不是i+1 因为一个元素可以重复使用
            backtrack(i, path, sum);
            // 撤销选择 candidates[i]
            sum -= candidates[i];
            path.pop();
        }
    };
    backtrack(0, [], 0);
    return res;
};