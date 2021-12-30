/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = {};
    words.forEach(v => map[v] = (map[v] || 0) + 1);
    const keys = Object.keys(map).sort((a, b) => map[b] - map[a] || a.localeCompare(b))
    return keys.slice(0, k);
};
