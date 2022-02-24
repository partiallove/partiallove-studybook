/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    // 设置二分边界
    // 左边界为包裹中最重的重量，确保一定能把所有包裹运送过去
    // 右边界为所有包裹的重量和，一天内便可将所有包裹运送过去
    const sum = weights.reduce((a, b) => a + b)
    let left = Math.max(...weights), right = sum
    // 进行二分查找
    while (left < right) {
        // 选取左右边界的中点
        const mid = (left + right) >> 1
        // 进行计数，求取如果最大运载重量为mid的话，需要多少天来运送所有包裹
        // count为天数，temp为当天运载的重量和
        let count = 1, temp = 0
        // 遍历所有包裹
        for (let weight of weights) {
            temp += weight
            // 如果当前重量超出最大运载重量，便将计数加一，并把当前的重量加到新的一天中
            if (temp > mid) {
                count++
                temp = weight
            }
        }
        // 如果需要的天数超过了days，便把左边界移动到mid+1，否则便将右边界移动到mid
        if (count > days) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    // 退出while循环时left和right是相等的，同时也是我们所求的最低运载能力
    return left
};