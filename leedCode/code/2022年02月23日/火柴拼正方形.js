/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {
    if (matchsticks === null || matchsticks.length == 0) return false;
    // 判断数组是否存在且长度不为0
    let allLen = 0;
    for (let item of matchsticks) {
        allLen += item;     //计算总长度
    }
    if (allLen % 4 !== 0) return false;
    // 判断总长度是否可以刚好围成正方形
    const sideLen = allLen / 4;
    // 计算边长
    matchsticks.sort((a, b) => b - a);
    // 可以将火柴数组从大到小排序，方便之后优化
    let sideList = new Array(4);
    for (let i = 0; i < sideList.length; i++) {
        sideList[i] = 0;
    }
    // 定义边长数组sideList并赋初值
    const dfs = (index) => {
        if (index == matchsticks.length) {
            // 结束条件，当index === matchsticks.length时，判断四条边长是否相等；
            return (
                sideList[0] === sideList[1] &&
                sideList[1] === sideList[2] &&
                sideList[2] === sideList[3]
            );
        }
        const targetLen = matchsticks[index];
        // 当前正处理的火柴；
        if (targetLen > sideLen) {
            return false;
        }
        // 因为刚才对火柴进行了排序，所以如果有火柴targetLen大于我们所计算的边长sideLen，则返回
        for (let i = 0; i < 4; i++) {
            if (sideList[i] + targetLen <= sideLen) {
                sideList[i] += targetLen;
                if (dfs(index + 1)) {
                    return true;
                }
                sideList[i] -= targetLen;
                // 这一步是回溯，先加上，再去递归判断下一步，如果false，则减去
            }
        }
        return false;
        // 最后一定记得返回结束
    };
    return dfs(0);
};