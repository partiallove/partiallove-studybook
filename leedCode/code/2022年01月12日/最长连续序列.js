var longestConsecutive = function(nums) {
    // 先排序去重
    const arr = [...new Set(nums.sort((a, b) => a - b))]
    const len = arr.length
    if(!len) return 0
    // 计数指针从1开始
    let n = 1, max = 1
    for(let i = 0; i < len; i++) {
        // 如果连续，则 n + 1，否则回到 1 开始
        n = arr[i + 1] - arr[i] === 1 ? n + 1 : 1
        // 取最大数
        max = Math.max(max, n)
    }
    return max
};