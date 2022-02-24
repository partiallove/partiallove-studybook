/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = s => {
    const len = s.length;
    const res = [];
    // 长度小于等于10，直接返回空数组
    if (len <= 10) return res;
    const set = new Set();
    let i = 0;
    while (i + 9 < len) {
        // 维护长度为10的滑动窗口
        const str = s.slice(i, i + 10);
        // 当前窗口如果set中已经存在，放入res
        if (set.has(str)) res.push(str);
        // 当前窗口加入set
        set.add(str);
        i++;
    }
    // 数组去重
    return [...new Set(res)];
};