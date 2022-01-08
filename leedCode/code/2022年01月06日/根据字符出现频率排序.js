/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const map = new Map()
    for (let i = 0; i < s.length; i ++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1)
    }
    const arr = Array.from(map).sort((a, b) => b[1] - a[1])
    return arr.reduce((cur, next) => {
        return cur + next[0].repeat(next[1])
    }, '')
};