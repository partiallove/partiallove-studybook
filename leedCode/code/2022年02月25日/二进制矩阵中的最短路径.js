/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
    // 缓存矩阵的终点位置
    const m = grid.length - 1;
    const n = grid[0].length - 1;

    // 当起点和终点为1时，必然无法到达终点
    if (grid[0][0] === 1 || grid[m][n] === 1) {
        return -1;
    }

    // 如果矩阵只有1个点，且为0，路径为1
    if (m === 0 && n === 0 && grid[0][0] === 0) {
        return 1;
    }

    let queue = [[0, 0]]; // 使用队列进行BFS搜索
    let level = 1; // 缓存路径长度，起点的长度为1
    // 可以向四周所有方向行走，缓存8个方向
    const direction = [
        [-1, 1], // 右上
        [0, 1], // 右
        [1, 1], // 右下
        [1, 0], // 下
        [1, -1], // 左下
        [-1, 0], // 上
        [0, -1], // 左
        [-1, -1], // 左上
    ];

    // 如果队列中有值，则继续搜索
    while (queue.length) {
        // 缓存当前层的节点数量
        let queueLength = queue.length;

        // 每次只遍历当前一层的节点
        while (--queueLength >= 0) {
            // 出队一个坐标，计算它可以行走的下一步位置
            const [x, y] = queue.shift();

            for (let i = 0; i < direction.length; i++) {
                // 下一步可以向四周行走，计算出相应新坐标
                const newX = x + direction[i][0];
                const newY = y + direction[i][1];

                // 如果新坐标超出网格，或者被标记为1，表示无法行走，则跳过
                if (
                    newX < 0 ||
                    newY < 0 ||
                    newX > m ||
                    newY > n ||
                    grid[newX][newY] === 1
                ) {
                    continue;
                }

                // 如果新坐标是终点，表示找到路径，返回长度即可
                if (newX === m && newY === n) {
                    return level + 1;
                }
                // 将走过的位置标记为1，避免重复行走
                grid[newX][newY] = 1;
                // 将下一步的坐标存入队列，用于下一层循环
                queue.push([newX, newY]);
            }
        }

        level++; // 每向前走一层，将步数加1
    }

    return -1;
};