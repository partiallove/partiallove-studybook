/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
    let len = hours.length;
    let change = new Array();
    hours.forEach(val => {
        change.push(val > 8 ? 1 : -1);
    });
    let preSum = new Array();
    preSum[0] = 0;
    change.forEach((val, ind) => {
        preSum.push(val + preSum[ind]);
    })
    let stack = [];
    stack.push(0);
    preSum.forEach((val, ind) => {
        if (preSum[stack[stack.length - 1]] > val) {
            stack.push(ind);
        }
    })
    let result = 0;
    for (let i = len; i >= 0; i--) {
        while (stack.length > 0 && preSum[i] > preSum[stack[stack.length - 1]]) {
            result = Math.max(result, i - stack.pop());
        }
    }
    return result;
};
