/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
    // 旋转次数
    let step = 0;
    // 死亡结点和已访问结点共用这一个Set
    const deadSet = new Set();
    // 记录所有“死亡点”
    for (const dead of deadends) {
        deadSet.add(dead);
    }
    let q1 = new Set();
    let q2 = new Set();
    // 初始化起点和终点
    q1.add("0000");
    q2.add(target);
    // 循环直至队列为空
    while (q1.size && q2.size) {
        // 双向 BFS 的一个优化，因为按照 BFS 的逻辑，队列（集合）中的元素越多，扩散之后新的队列（集合）中的元素就越多；在双向 BFS 算法中，如果我们每次都选择一个较小的集合进行扩散，那么占用的空间增长速度就会慢一些，效率就会高一些。
        if (q1.size > q2.size) {
            // 交换 q1 和 q2
            [q1, q2] = [q2, q1];
        }
        // 在遍历的过程中不能修改哈希集合
        // 用temp存储q1的扩散结果
        let temp = new Set();
        for (let node of q1) {
            if (deadSet.has(node)) {
                continue;
            }
            if (q2.has(node)) {
                return step;
            }
            deadSet.add(node);
            // 通过遍历当前字符串，找出它的所有子节点，安排入列
            for (let j = 0; j < node.length; j++) {
                // 获取当前的数字num
                const num = node[j] - "0";
                // 往上拧所得的新数，比如1变成2
                const up = (num + 1) % 10;
                // 往下拧所得的新数，比如7变成6
                const down = (num + 9) % 10;
                const upNode = node.substring(0, j) + up + node.substring(j + 1);
                if (!deadSet.has(upNode)) {
                    temp.add(upNode);
                }
                const downNode = node.substring(0, j) + down + node.substring(j + 1);
                if (!deadSet.has(downNode)) {
                    temp.add(downNode);
                }
            }
        }

        step++;
        q1 = q2;
        q2 = temp;
    }
    return -1;
};