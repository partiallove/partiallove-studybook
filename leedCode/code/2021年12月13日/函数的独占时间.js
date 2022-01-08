/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
    const result = new Array(n).fill(0)
    let go = 0
    function next() {
        let dura = 0
        const start = logs[go].split(':')
        while (go < logs.length - 1 && logs[go + 1].indexOf('s') !== -1) {
            go++
            dura = dura + next()
        }
        const end = logs[++go].split(':')
        let sum = Number(end[2]) - Number(start[2]) + 1 - dura
        result[Number(start[0])] = result[Number(start[0])] + sum
        return sum + dura
    }
    while (go < logs.length) {
        next()
        go++
    }

    return result
}
