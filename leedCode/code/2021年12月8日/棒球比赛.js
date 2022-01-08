/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const stack = []

    for (let i of ops) {
        if (i === 'C') {
            stack.pop()
        } else if (i === 'D') {
            stack.push(stack[stack.length - 1] * 2)
        } else if (i === '+') {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        } else {
            stack.push(+i) // + 号用来将字符串转为数字
        }
    }

    // 只能添加数字
    return stack.reduce((a, b) => a + b)
};
