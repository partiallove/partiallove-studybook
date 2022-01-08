/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
    let maxWidth = 0;
    if (root) {
        let queue = [root];
        let xs = [1];
        while (queue.length > 0) {
            let size = queue.length;
            let left, right;
            if (size === 1) {
                xs = [1];
            }
            for (let i = 0; i < size; i++) {
                let node = queue.shift();
                let x = xs.shift();
                if (i === 0) {
                    left = x;
                }
                if (i === size - 1) {
                    right = x;
                }
                if (node.left) {
                    queue.push(node.left);
                    xs.push(x * 2);
                }
                if (node.right) {
                    queue.push(node.right);
                    xs.push(x * 2 + 1)
                }
            }
            maxWidth = Math.max(maxWidth, right - left + 1);
        }
    }
    return maxWidth;
};