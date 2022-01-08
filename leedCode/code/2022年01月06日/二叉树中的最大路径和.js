/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    if (!root) {
        return Number.MIN_SAFE_INTEGER
    }
    function dfs1 (node) {
        if (!node) {
            return 0
        }
        const L = dfs1(node.left)
        const R = dfs1(node.right)
        node.val = Math.max(L, R, 0) + node.val
        return node.val
    }
    dfs1(root)

    let ans = Number.MIN_SAFE_INTEGER
    function dfs2 (node) {
        if (!node) {
            return Number.MIN_SAFE_INTEGER
        }
        ans = Math.max(ans, node.val + Math.max(Math.min(node.left?.val || 0, node.right?.val || 0), 0))
        dfs2(node.left)
        dfs2(node.right)
    }
    dfs2(root)
    return ans
};