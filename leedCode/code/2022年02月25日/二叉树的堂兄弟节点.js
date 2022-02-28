/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    let parentX, parentY;
    let depthX = 0,
        depthY = 0;
    const traverse = (root, depth, parent) => {
        if (root == null) return;
        if (root.val == x) {
            // 找到 x，记录它的深度和父节点
            parentX = parent;
            depthX = depth;
        }
        if (root.val == y) {
            // 找到 y，记录它的深度和父节点
            parentY = parent;
            depthY = depth;
        }
        traverse(root.left, depth + 1, root);
        traverse(root.right, depth + 1, root);
    };
    traverse(root, 0, null);
    // 判断 x，y 是否是表兄弟节点
    return depthX == depthY && parentX != parentY;
};