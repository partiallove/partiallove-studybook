/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = [];
    const preOrder = (root) => {
        if (root == null) return res;
        res.push(root.val);
        preOrder(root.left);
        preOrder(root.right);
    };
    preOrder(root);
    return res;
};
