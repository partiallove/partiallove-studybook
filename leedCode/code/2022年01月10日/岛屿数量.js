/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === "1") {
                count++;
                turnZero(grid, i, j);
            }
        }
    }
    return count;
};
function turnZero(grid, i, j) {
    if (
        // 超出过些边界
        i < 0 ||
        i >= grid.length ||
        j < 0 ||
        j >= grid[0].length ||
        // 已经是海水了
        grid[i][j] === "0"
    )
        return;
    // 将 (i, j) 变成海水
    grid[i][j] = "0";
    // 淹没上下左右的陆地
    // 为什么每次遇到岛屿，都要用 DFS 算法把岛屿「淹了」呢？主要是为了省事，避免维护visited数组。
    // 方向数组，分别代表上、下、左、右
    let dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    // 递归遍历上下左右的节点
    for (let a of dirs) {
        let nextI = i + a[0];
        let nextJ = j + a[1];
        turnZero(grid, nextI, nextJ);
    }
}