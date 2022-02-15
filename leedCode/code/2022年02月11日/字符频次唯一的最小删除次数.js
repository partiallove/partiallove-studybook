/**
 * @param {string} s
 * @return {number}
 */
function minDeletions(s) {
    const numObj = {};
    let numsSet = new Set();
    for (let i = 0, len = s.length; i < len; i++) {
        if (numObj[s[i]]) {
            numObj[s[i]]++;
        } else {
            numObj[s[i]] = 1;
        }
    }
    const nums = Object.values(numObj);
    const resetArr = []
    nums.forEach(item => {
        if (numsSet.has(item)) {
            resetArr.push(item)
        } else {
            numsSet.add(item)
        }
    })
    let res = 0;

    for (let i = 0; i < resetArr.length; i++) {
        if (resetArr[i] !== 0) {
            while (numsSet.has(resetArr[i])) {
                resetArr[i]--;
                res++;
            }
            if (resetArr[i] > 0) numsSet.add(resetArr[i]);
        }
    }

    return res;
}