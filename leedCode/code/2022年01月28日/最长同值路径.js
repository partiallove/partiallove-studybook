/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
    if (root == null) return 0;
    let res = 0;
    let maxDepth = (root, parentVal) => {
        // 定义：计算以 root 为根的这棵二叉树中，从 root 开始值为 parentVal 的最长树枝长度
        if (root == null) return 0;
        // 利用函数定义，计算左右子树值为 root.val 的最长树枝长度
        let leftLen = maxDepth(root.left, root.val);
        let rightLen = maxDepth(root.right, root.val);
        // 后序遍历位置顺便更新全局变量，同值路径就是左右同值树枝长度之和
        res = Math.max(res, leftLen + rightLen);
        // 如果 root 本身和上级值不同，那么整棵子树都不可能有同值树枝
        if (root.val != parentVal) return 0;
        // 以 root 为根的二叉树从 root 开始值为 parentVal 的最长树枝长度，等于左右子树的最长树枝长度的最大值加上 root 节点本身
        return 1 + Math.max(leftLen, rightLen);
    };
    // 在后序遍历的位置更新 res
    maxDepth(root, root.val);
    return res;
};