/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    const nums = words.map(getCharCodeSet)
    let ans = 0
    for (let i = 0; i < nums.length; i ++) {
        for (let j = i + 1; j < nums.length; j ++) {
            if ((nums[i] & nums[j]) === 0) {
                ans = Math.max(ans, words[i].length * words[j].length)
            }
        }
    }
    return ans
};

function getCharCodeSet (word) {
    let num = 0
    for (let i = 0; i < word.length; i ++) {
        const bit = 1 << word[i].charCodeAt() - 97
        num |= bit
    }
    return num
}