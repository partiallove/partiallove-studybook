/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let count = 1;
    let res;
    function dfs(node) {
        if(res) return;
        if(!node) return;
        dfs(node.right);
        if(k === count++){
            res = node.val;
            return;
        }
        dfs(node.left);
    }
    dfs(root);
    return res
};
