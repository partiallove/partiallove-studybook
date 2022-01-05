/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    // 如果两个节点都是空节点 则肯定相同
    if (p == null && q == null) return true;
    // 如果两个节点只有一个节点为空
    if (p == null || q == null) return false;
    // 两个节点都不为空的情况下 值不相同
    if (p.val != q.val) return false;
    // 递归的去比较左右子树
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};