/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    let map = {};
    function backup(index)
    {
        if(index<0 || index>=arr.length || map[index]) return false;
        if(arr[index] === 0) return true;
        map[index] = true;
        return backup(index + arr[index]) || backup(index - arr[index]);
    }
    return backup(start);
};