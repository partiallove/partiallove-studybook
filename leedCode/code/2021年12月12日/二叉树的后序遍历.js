/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let res = [];
    const postOrder = (root) => {
        if (root == null) return;
        postOrder(root.left);
        postOrder(root.right);
        res.push(root.val);
    };
    postOrder(root);
    return res;
};
