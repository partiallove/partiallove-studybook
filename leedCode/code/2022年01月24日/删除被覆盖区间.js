/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    let right = intervals[0][1]
    let left = intervals[0][0]
    let count = 0
    const n = intervals.length
    for(let i = 1; i < n; i++) {
        const interv = intervals[i]
        if(interv[1] <= right && interv[0] >= left) {
            count++
        }
        // 这里注意，被多个区间覆盖住的区间，也算是被覆盖区间
        if(interv[1] >= right && right >= interv[0]) {
            right = interv[1]
        }

        if(interv[1] > right) {
            left = interv[0]
            right = interv[1]
        }
    }
    return n - count
};