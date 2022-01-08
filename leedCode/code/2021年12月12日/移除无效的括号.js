/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    // 记录需要删除的多余括号的索引
    // leftDel, rightDel分别存放'(', ')'
    const n = s.length,
        leftDel = [],
        rightDel = [];
    for (let i = 0; i < n; i++) {
        const char = s[i];
        if (char === '(') {
            leftDel.push(i);
        } else if (char === ')') {
            // 如果有对应的'(', 从删除列表中移除
            // 否则')'是多余的，加入右括号的删除列表
            if (leftDel.length > 0) {
                leftDel.pop();
            } else {
                rightDel.push(i);
            }
        }
    }
    // 根据记录删除
    const res = [...s],
        filter = leftDel.concat(rightDel),
        l = filter.length;
    for (let i = 0; i < l; i++) {
        res[filter[i]] = '';
    }
    return res.join('');
};
