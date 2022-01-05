/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let ans;
    const inOrderTraverse = function(node) {
        if(node!=null && k>0) {
            inOrderTraverse(node.left);
            if(--k==0)
                ans = node.val;
            inOrderTraverse(node.right);
        }
    }
    inOrderTraverse(root);
    return ans;
};
