/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    let m = nums1.length, n = nums2.length;
    // 记录每个位置的指针，索引从0开始
    let dp = new Array(Math.min(m, k)).fill(0);
    let result = [];

    while (result.length < k) {
        let minIndex = -1, minValue = Number.MAX_VALUE;
        for (let i = 0; i < dp.length; i++) {
            // 兼容一下数量不够的情况
            if (dp[dp.length - 1] === n) return result;

            // 走到尽头了，此路不通
            if (dp[i] === n) continue;

            let cur = nums1[i] + nums2[dp[i]];
            if (cur < minValue) {
                minIndex = i;
                minValue = cur;
            }

            // 判断为空的时候不往后走
            if (dp[i] === 0) {
                break;
            }
        }

        // 记录当前最小值，指针右移
        result.push([ nums1[minIndex], nums2[dp[minIndex]] ]);
        dp[minIndex]++;
    }

    return result;
};