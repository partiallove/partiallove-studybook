/**
 * @param {number[][]} events
 * @return {number}
 */

var maxEvents = function(events) {
    let count = 0, had = [];

    events.sort((a, b) => a[1] - b[1]);

    for (let i = 0, len = events.length; i < len; i++) {
        let [start, end] = events[i];
        for (let j = start; j <= end; j++) {
            if (had[j] === undefined) {
                had[j] = 1;
                count++;
                break;
            }
        }
    }

    return count;
};