/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root) {
    let path = 0;
    let helper = function(node){
        if(node == null) return 0;
        let rightVal = helper(node.right);
        let leftVal = helper(node.left);
        path += Math.abs(rightVal)+Math.abs(leftVal);
        return rightVal+leftVal+node.val-1;
    }
    helper(root);
    return path;
};