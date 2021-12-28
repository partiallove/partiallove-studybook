/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones = stones.sort((a, b) => b-a)
    // 退出条件
    if(stones.length <= 1) {
        return stones
    } else {
        // 两块石头重量相同且个数大于2，全部粉碎
        if(stones[0] === stones[1] && stones.length > 2) {
            return lastStoneWeight(stones.splice(2, stones.length-2));
        } else {
            // 否则粉碎两块石头，并添加粉碎两块的差作为新的重量
            var a = stones[0], b = stones[1];
            stones.splice(0, 2, a- b);
            return lastStoneWeight(stones);
        }
    }
};
