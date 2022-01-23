/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    function inOrder(root){
        var stack = [];
        var p = root;
        var res = [];
        while(p || stack.length) {
            if (p) {
                stack.push(p);
                p = p.left;
            } else {
                p = stack.pop();
                res.push(p.val);
                p = p.right;
            }
        }
        return res;
    }
    return inOrder(root1).concat(inOrder(root2)).sort((x, y) => x - y);
};