/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    // 用map存出现字符的最后位置
    const map = new Map()
    for (let i = 0; i < S.length; i++) {
        map.set(S[i], i)
    }
    const res = []
    // tempStart 和 tempEnd 为每段的起始位置
    let tempStart = 0, tempEnd = 0
    for (let i = 0; i < S.length; i++) {
        // 更新tempEnd的值
        tempEnd = Math.max(tempEnd, map.get(S[i]))
        // 如果i与tempEnd相等，这就为一个片段
        if (i == tempEnd) {
            res.push(tempEnd - tempStart + 1)
            tempStart = i + 1
        }
    }
    return res
};